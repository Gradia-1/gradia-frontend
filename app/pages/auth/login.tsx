"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Role = "school" | "parent" | "student";
type AlertKind = "created" | "reset";

const roleEnjoyMessage: Record<Role, string> = {
  school: "Enjoy running your school with clarity, speed, and trust.",
  parent: "Enjoy staying connected to your child's learning journey.",
  student: "Enjoy everything you need for school, in one place.",
};

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<{ kind: AlertKind; role?: Role } | null>(null);

  useEffect(() => {
    if (searchParams.get("created") === "true") {
      const role = (searchParams.get("role") as Role) || "school";
      setAlert({ kind: "created", role });
    } else if (searchParams.get("reset") === "true") {
      setAlert({ kind: "reset" });
    } else {
      return;
    }
    const timer = setTimeout(() => setAlert(null), 5000);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <main className="h-screen grid md:grid-cols-2 bg-white overflow-hidden">
      {/* Success alert */}
      {alert && (
        <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 max-w-sm bg-white border border-[#DDE7E0] rounded-[10px] p-4 shadow-lg animate-in slide-in-from-left">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EAF6EF] border border-[#1F7A4D]/30 flex items-center justify-center text-[#1F7A4D] flex-shrink-0">
              <i className="bi bi-check-lg"></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#1A1A1A]">
                {alert.kind === "created"
                  ? "Your account has been created!"
                  : "Password updated!"}
              </p>
              <p className="mt-1 text-xs text-gray-600">
                {alert.kind === "created" && alert.role
                  ? `${roleEnjoyMessage[alert.role]} Sign in to continue.`
                  : "You can now sign in with your new password."}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAlert(null)}
              aria-label="Dismiss"
              className="text-gray-400 hover:text-[#1A1A1A] cursor-pointer flex-shrink-0"
            >
              <i className="bi bi-x-lg text-sm"></i>
            </button>
          </div>
        </div>
      )}

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
              Welcome back
            </span>
            <span className="h-px flex-1 max-w-[140px] bg-white/40"></span>
          </div>

          {/* Bottom-left content */}
          <div className="mt-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15] max-w-md">
              Pick up where you left off.
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              Your school, one login away.
            </p>
          </div>
        </div>
      </div>

      {/* Right: soft-green panel with glass form card */}
      <div className="relative bg-[#EAF6EF] flex items-center justify-center p-6 md:p-10 overflow-y-auto">
        {/* Top-left nav */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 z-10">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#1F7A4D] transition-colors cursor-pointer"
          >
            <i className="bi bi-arrow-left"></i>
            Home
          </button>
        </div>

        <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
            Welcome Back
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Enter your email and password to continue
          </p>

          <form className="mt-6 space-y-2.5">
            <div className="relative">
              <i className="bi bi-envelope text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input
                id="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 rounded-[10px] pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <i className="bi bi-lock text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
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

            <div className="flex items-center justify-between -mt-0.5">
              <label className="flex items-center gap-1 text-xs text-gray-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-3.5 h-3.5 rounded border-[#DDE7E0] text-[#1F7A4D] focus:ring-[#1F7A4D] accent-[#1F7A4D]"
                />
                Remember me
              </label>
              <Link
                href="/root/auth/forgot-password"
                className="text-xs font-bold text-[#1F7A4D] hover:text-[#16553A]"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] py-3.5 rounded-[10px] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30 transition-all cursor-pointer tracking-wider mt-4"
            >
              LOGIN
            </button>
          </form>

          <p className="mt-5 text-sm text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/root/auth/signup" className="font-bold text-[#1F7A4D] hover:text-[#16553A]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
