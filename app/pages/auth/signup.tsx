"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Role = "chooser" | "school" | "parent" | "student";

const banks = [
  "Bank of Kigali (BK)",
  "UMWALIMU SACCO",
  "Equity Bank Rwanda",
  "I&M Bank Rwanda",
  "Ecobank Rwanda",
  "KCB Bank Rwanda",
  "Access Bank Rwanda",
  "GT Bank Rwanda",
  "Cogebanque",
  "Banque Populaire du Rwanda (BPR)",
  "NCBA Bank Rwanda",
  "Bank of Africa Rwanda (BOA)",
  "Development Bank of Rwanda (BRD)",
  "Urwego Opportunity Bank",
  "Zigama CSS",
  "Other",
];

export default function Signup() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("chooser");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [relationship, setRelationship] = useState("");

  const goBack = () => {
    if (role === "chooser") router.back();
    else setRole("chooser");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === "chooser") return;
    setIsSubmitting(true);
    // simulate brief API call — replace with real auth call later
    setTimeout(() => {
      router.push(`/root/auth/login?created=true&role=${role}`);
    }, 800);
  };

  const leftPanel: Record<Role, { label: string; headline: string; subtitle: string }> = {
    chooser: {
      label: "Start your journey",
      headline: "Join schools running smarter.",
      subtitle: "Set up your account in under a minute.",
    },
    school: {
      label: "Register your school",
      headline: "A new era for your school starts here.",
      subtitle: "Tell us about your school so we can get you live.",
    },
    parent: {
      label: "Stay connected",
      headline: "Be part of your child's school day.",
      subtitle: "Link to their school in a few steps.",
    },
    student: {
      label: "Learn with Gradia",
      headline: "Your school, always in your pocket.",
      subtitle: "One account for grades, assignments, and updates.",
    },
  };

  const roleMeta: Record<Exclude<Role, "chooser">, { title: string; subtitle: string }> = {
    school: {
      title: "New school application",
      subtitle: "Submit your school's details. We'll review and email you when approved.",
    },
    parent: {
      title: "Parent account",
      subtitle: "Connect to your child's school using their Student ID.",
    },
    student: {
      title: "Student account",
      subtitle: "Access grades, assignments, and school updates.",
    },
  };

  return (
    <main className="h-screen grid md:grid-cols-2 bg-white overflow-hidden">
      {/* Left: dark panel with label top, watermark center, headline bottom */}
      <div className="relative bg-[#0F3D27] hidden md:block overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src="/gradia-bg-photo.png"
            alt=""
            width={520}
            height={520}
            className="opacity-10 object-contain"
            priority
          />
        </div>

        <div className="relative h-full p-10 flex flex-col">
          {/* Top-left label */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              {leftPanel[role].label}
            </span>
            <span className="h-px flex-1 max-w-[140px] bg-white/40"></span>
          </div>

          {/* Bottom-left content */}
          <div className="mt-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15] max-w-md transition-opacity duration-300">
              {leftPanel[role].headline}
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-sm transition-opacity duration-300">
              {leftPanel[role].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Right: soft-green panel with glass form card */}
      <div className="relative bg-[#EAF6EF] overflow-y-auto">
        <button
          type="button"
          onClick={goBack}
          className="absolute top-4 left-4 md:top-6 md:left-6 z-10 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#1F7A4D] transition-colors cursor-pointer"
        >
          <i className="bi bi-arrow-left"></i>
          Back
        </button>

        <div className="min-h-full flex justify-center p-6 md:p-10">
          <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-sm my-auto">
            {role === "chooser" ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center tracking-tight">
                  Create your account
                </h1>
                <p className="mt-1 text-sm text-gray-500 text-center">
                  Choose your role to get started
                </p>

                <div className="mt-7 space-y-2.5">
                  <RoleCard
                    icon="bi-building"
                    title="School / Head Teacher"
                    description="Register your school and manage operations"
                    onClick={() => setRole("school")}
                  />
                  <RoleCard
                    icon="bi-heart"
                    title="Parent"
                    description="Connect to your child's school"
                    onClick={() => setRole("parent")}
                  />
                  <RoleCard
                    icon="bi-mortarboard"
                    title="Student"
                    description="Access your grades and assignments"
                    onClick={() => setRole("student")}
                  />
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/root/auth/login" className="font-bold text-[#1F7A4D] hover:text-[#16553A]">
                    Log in
                  </Link>
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center tracking-tight">
                  {roleMeta[role].title}
                </h1>
                <p className="mt-1 text-sm text-gray-500 text-center">
                  {roleMeta[role].subtitle}
                </p>

                <form className="mt-6 space-y-2.5" onSubmit={handleSubmit}>
                  {role === "school" && (
                    <>
                      <InputField icon="bi-building" name="schoolName" placeholder="School name" />

                      <CustomSelect
                        icon="bi-geo-alt"
                        placeholder="Select Province"
                        value={province}
                        onChange={setProvince}
                        options={[
                          "Kigali City",
                          "Northern Province",
                          "Southern Province",
                          "Eastern Province",
                          "Western Province",
                        ]}
                      />
                      <CustomSelect
                        icon="bi-pin-map"
                        placeholder="Select District"
                        value={district}
                        onChange={setDistrict}
                        options={["Nyarugenge", "Gasabo", "Kicukiro", "Other"]}
                      />
                      <CustomSelect
                        icon="bi-signpost"
                        placeholder="Select Sector"
                        value={sector}
                        onChange={setSector}
                        options={["Kimisagara", "Nyamirambo", "Remera", "Other"]}
                      />

                      <InputField icon="bi-person" name="contactPerson" placeholder="Contact person name" />
                      <InputField icon="bi-telephone" type="tel" name="phone" placeholder="Phone number" />
                      <InputField icon="bi-envelope" type="email" name="email" placeholder="Email address" />

                      <CustomMultiSelect
                        icon="bi-bank"
                        placeholder="Select affiliated banks"
                        value={selectedBanks}
                        onChange={setSelectedBanks}
                        options={banks}
                      />
                    </>
                  )}

                  {role === "parent" && (
                    <>
                      <InputField icon="bi-building" name="school" placeholder="Your child's school" />
                      <InputField icon="bi-person-badge" name="studentId" placeholder="Student ID" />
                      <InputField icon="bi-person" name="fullName" placeholder="Your full name" />
                      <InputField icon="bi-envelope" type="email" name="email" placeholder="Your email" />
                      <CustomSelect
                        icon="bi-people"
                        placeholder="Relationship to student"
                        value={relationship}
                        onChange={setRelationship}
                        options={["Mother", "Father", "Guardian"]}
                      />
                      <PasswordField
                        show={showPassword}
                        toggle={() => setShowPassword(!showPassword)}
                      />

                      <div className="flex items-start gap-2 text-xs text-gray-600 bg-[#F9FAFB] border border-[#DDE7E0] rounded-[10px] p-3">
                        <i className="bi bi-info-circle text-[#1F7A4D] mt-0.5 flex-shrink-0"></i>
                        <span>
                          You can add more children to your account after signing up — including kids at different schools.
                        </span>
                      </div>
                    </>
                  )}

                  {role === "student" && (
                    <>
                      <InputField icon="bi-building" name="school" placeholder="Your school" />
                      <InputField icon="bi-person-badge" name="studentId" placeholder="Student ID" />
                      <InputField icon="bi-envelope" type="email" name="email" placeholder="Your email" />
                      <PasswordField
                        show={showPassword}
                        toggle={() => setShowPassword(!showPassword)}
                      />
                      <PasswordField
                        show={showPassword}
                        toggle={() => setShowPassword(!showPassword)}
                        placeholder="Confirm password"
                      />
                    </>
                  )}

                  <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer select-none pt-1">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 w-3.5 h-3.5 rounded border-[#DDE7E0] text-[#1F7A4D] focus:ring-[#1F7A4D] accent-[#1F7A4D]"
                    />
                    <span>
                      I agree to Gradia&apos;s{" "}
                      <Link href="#" className="text-[#1F7A4D] hover:text-[#16553A] font-bold">
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-[#1F7A4D] hover:text-[#16553A] font-bold">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="self-start inline-flex items-center gap-2 text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] disabled:opacity-70 disabled:cursor-not-allowed px-12 py-3.5 rounded-[10px] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30 transition-all cursor-pointer tracking-wider mt-4"
                  >
                    {isSubmitting && (
                      <i className="bi bi-arrow-repeat animate-spin"></i>
                    )}
                    {isSubmitting
                      ? role === "school" ? "SUBMITTING..." : "CREATING..."
                      : role === "school" ? "SUBMIT APPLICATION" : "CREATE ACCOUNT"}
                  </button>
                </form>

                <p className="mt-6 text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/root/auth/login" className="font-bold text-[#1F7A4D] hover:text-[#16553A]">
                    Log in
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function RoleCard({
  icon,
  title,
  description,
  onClick,
}: {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full flex items-center gap-3 bg-white border border-[#DDE7E0] hover:border-[#1F7A4D] rounded-[10px] px-4 py-3.5 text-left transition-colors cursor-pointer"
    >
      <span className="w-10 h-10 rounded-lg bg-[#EAF6EF] flex items-center justify-center text-[#1F7A4D]">
        <i className={`bi ${icon} text-lg`}></i>
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-sm font-bold text-[#1A1A1A]">{title}</span>
        <span className="block text-xs text-gray-500 truncate">{description}</span>
      </span>
      <i className="bi bi-arrow-right text-gray-400 group-hover:text-[#1F7A4D] transition-colors"></i>
    </button>
  );
}

function CustomSelect({
  icon,
  placeholder,
  options,
  value,
  onChange,
}: {
  icon: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <i className={`bi ${icon} text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10`}></i>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-white border rounded-[10px] pl-11 pr-10 py-3 text-sm text-left cursor-pointer flex items-center justify-between transition-colors ${
          open ? "border-[#1F7A4D] ring-4 ring-[#1F7A4D]/10" : "border-[#DDE7E0] hover:border-[#1F7A4D]"
        }`}
      >
        <span className={value ? "text-gray-700" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <i
          className={`bi bi-chevron-down text-sm opacity-60 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {open && (
        <div className="absolute z-20 top-full left-0 right-0 mt-1.5 bg-white border border-[#DDE7E0] rounded-[10px] shadow-lg overflow-hidden max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === opt
                  ? "bg-[#EAF6EF] text-[#1F7A4D] font-bold"
                  : "text-gray-700 hover:bg-[#F5F7F5]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CustomMultiSelect({
  icon,
  placeholder,
  options,
  value,
  onChange,
}: {
  icon: string;
  placeholder: string;
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (opt: string) => {
    if (value.includes(opt)) {
      onChange(value.filter((v) => v !== opt));
    } else {
      onChange([...value, opt]);
    }
  };

  const label =
    value.length === 0
      ? placeholder
      : value.length === 1
        ? value[0]
        : `${value.length} banks selected`;

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        <i className={`bi ${icon} text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10`}></i>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`w-full bg-white border rounded-[10px] pl-11 pr-10 py-3 text-sm text-left cursor-pointer flex items-center justify-between transition-colors ${
            open ? "border-[#1F7A4D] ring-4 ring-[#1F7A4D]/10" : "border-[#DDE7E0] hover:border-[#1F7A4D]"
          }`}
        >
          <span className={value.length ? "text-gray-700" : "text-gray-400"}>
            {label}
          </span>
          <i
            className={`bi bi-chevron-down text-sm opacity-60 text-gray-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          ></i>
        </button>
      </div>

      {open && (
        <div className="absolute z-20 top-full left-0 right-0 mt-1.5 bg-white border border-[#DDE7E0] rounded-[10px] shadow-lg overflow-hidden">
          <div className="p-2 border-b border-[#DDE7E0]">
            <div className="relative">
              <i className="bi bi-search text-xs opacity-60 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
              <input
                type="text"
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search banks..."
                className="w-full bg-[#F5F7F5] border border-transparent focus:border-[#1F7A4D] focus:bg-white rounded-[8px] pl-8 pr-3 py-2 text-xs text-gray-700 placeholder:text-gray-400 outline-none transition-all"
              />
            </div>
          </div>
          <div className="max-h-52 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-xs text-gray-500 text-center">
                No banks match &ldquo;{search}&rdquo;
              </p>
            ) : (
              filtered.map((opt) => {
                const checked = value.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggle(opt)}
                    className={`w-full flex items-center gap-2.5 text-left px-4 py-2.5 text-sm transition-colors ${
                      checked
                        ? "bg-[#EAF6EF] text-[#1F7A4D] font-bold"
                        : "text-gray-700 hover:bg-[#F5F7F5]"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        checked
                          ? "bg-[#1F7A4D] border-[#1F7A4D]"
                          : "border-[#DDE7E0] bg-white"
                      }`}
                    >
                      {checked && <i className="bi bi-check text-white text-xs"></i>}
                    </span>
                    {opt}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {value.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {value.map((v) => (
            <span
              key={v}
              className="inline-flex items-center gap-1 bg-[#EAF6EF] text-[#1F7A4D] text-xs font-medium px-2 py-1 rounded-md"
            >
              {v}
              <button
                type="button"
                onClick={() => toggle(v)}
                className="hover:text-[#16553A] cursor-pointer"
                aria-label={`Remove ${v}`}
              >
                <i className="bi bi-x text-sm"></i>
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function InputField({
  icon,
  name,
  placeholder,
  type = "text",
}: {
  icon: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <i className={`bi ${icon} text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500`}></i>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus:ring-4 focus:ring-[#1F7A4D]/10 rounded-[10px] pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
      />
    </div>
  );
}

function PasswordField({
  show,
  toggle,
  placeholder = "Password",
}: {
  show: boolean;
  toggle: () => void;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <i className="bi bi-lock text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
      <input
        type={show ? "text" : "password"}
        required
        placeholder={placeholder}
        className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus:ring-4 focus:ring-[#1F7A4D]/10 rounded-[10px] pl-11 pr-11 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-[#1A1A1A] cursor-pointer"
      >
        <i className={`bi ${show ? "bi-eye-slash" : "bi-eye"}`}></i>
      </button>
    </div>
  );
}
