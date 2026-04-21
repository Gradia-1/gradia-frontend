"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // reserved for future backend validation
  void token;

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }
    setError(null);
    router.push("/root/auth/login?reset=true");
  };

  return (
    <main className="h-screen grid md:grid-cols-2 bg-white overflow-hidden">
      {/* Left: dark panel */}
      <div className="relative bg-[#0F3D27] hidden md:block overflow-hidden">
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
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
              Fresh start
            </span>
            <span className="h-px flex-1 max-w-[140px] bg-white/40"></span>
          </div>

          <div className="mt-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15] max-w-md">
              Choose a new password to continue.
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              Pick something you&apos;ll remember — and keep it safe.
            </p>
          </div>
        </div>
      </div>

      {/* Right: soft-green panel with glass form card */}
      <div className="relative bg-[#EAF6EF] overflow-y-auto">
        <button
          type="button"
          onClick={() => router.push("/root/auth/login")}
          className="absolute top-4 left-4 md:top-6 md:left-6 z-10 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#1F7A4D] transition-colors cursor-pointer"
        >
          <i className="bi bi-arrow-left"></i>
          Back
        </button>

        <div className="min-h-full flex justify-center p-6 md:p-10">
          <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-sm my-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
              Set new password
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Choose a strong password for your account.
            </p>

            <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
              <div>
                <div className="relative">
                  <i className="bi bi-lock text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New password"
                    className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 rounded-[10px] pl-11 pr-11 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-[#1A1A1A] cursor-pointer"
                  >
                    <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                  </button>
                </div>
                {password && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            i <= strength.level ? strength.barColor : "bg-gray-200"
                          }`}
                        ></div>
                      ))}
                    </div>
                    <span className={`text-[10px] font-bold ${strength.textColor} min-w-[42px] text-right`}>
                      {strength.label}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <div className="relative">
                  <i className="bi bi-lock-fill text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Confirm new password"
                    className={`w-full bg-white border rounded-[10px] pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all focus-visible:ring-4 ${
                      confirm && confirm !== password
                        ? "border-red-400 focus:border-red-500 focus-visible:ring-red-200"
                        : "border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-[#1F7A4D]/20"
                    }`}
                  />
                </div>
                {confirm && confirm !== password && (
                  <p className="mt-1.5 text-xs text-red-600 font-medium pl-1">
                    Passwords don&apos;t match
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-500 pl-1">
                At least 8 characters. Mix letters, numbers, and symbols for a stronger password.
              </p>

              {error && (
                <p className="text-xs text-red-600 font-medium pl-1">{error}</p>
              )}

              <button
                type="submit"
                className="w-full text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] py-3.5 rounded-[10px] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30 transition-all cursor-pointer tracking-wider mt-4"
              >
                RESET PASSWORD
              </button>
            </form>

            <p className="mt-5 text-sm text-center text-gray-600">
              Remember your password?{" "}
              <Link
                href="/root/auth/login"
                className="font-bold text-[#1F7A4D] hover:text-[#16553A]"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function getPasswordStrength(p: string): {
  level: number;
  label: string;
  barColor: string;
  textColor: string;
} {
  if (!p) return { level: 0, label: "", barColor: "", textColor: "" };
  let score = 0;
  if (p.length >= 8) score++;
  if (p.length >= 12) score++;
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) score++;
  if (/[0-9]/.test(p)) score++;
  if (/[^A-Za-z0-9]/.test(p)) score++;

  if (score <= 2) return { level: 1, label: "Weak", barColor: "bg-red-400", textColor: "text-red-500" };
  if (score === 3) return { level: 2, label: "Fair", barColor: "bg-yellow-400", textColor: "text-yellow-600" };
  if (score === 4) return { level: 3, label: "Good", barColor: "bg-[#1F7A4D]/60", textColor: "text-[#1F7A4D]" };
  return { level: 4, label: "Strong", barColor: "bg-[#1F7A4D]", textColor: "text-[#1F7A4D]" };
}
