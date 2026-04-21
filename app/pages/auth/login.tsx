"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="h-screen bg-[#EAF6EF] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-3 md:gap-5 h-full">
        {/* Left: image panel */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0F3D27] hidden md:block h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/gradia-bg-photo.png"
              alt=""
              width={520}
              height={520}
              className="opacity-5 object-contain"
              priority
            />
          </div>

          <div className="relative h-full p-8 md:p-10 flex flex-col">
            {/* Top label */}
            <div className="flex items-center gap-3">
                           <span className="h-px flex-1 max-w-[120px] bg-white/40"></span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
                Smarter school operations
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-white/40"></span>
            </div>

            {/* Bottom content */}
            <div className="mt-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.15]">
                Run your school with clarity, speed, and trust.
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/80 max-w-sm">
                Everything your school needs in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Right: form panel */}
        <div className="relative bg-white rounded-3xl p-4 sm:p-5 md:p-6 flex flex-col h-full">
          {/* Back */}
          <button
            type="button"
            onClick={() => router.back()}
            className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6 inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[#1F7A4D] transition-colors cursor-pointer"
          >
            <i className="bi bi-arrow-left"></i>
            Back
          </button>

          {/* Logo (clickable) */}
          <Link href="/" className="flex items-center justify-center gap-2">
            <Image src="/logo.png" alt="Gradia" width={28} height={28} />
            <span className="text-lg font-bold text-[#1A1A1A]">Gradia</span>
          </Link>

          <div className="flex-1 flex flex-col max-w-sm mx-auto w-full mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center tracking-tight">
              Welcome Back
            </h1>

            <form className="mt-7 space-y-2.5">
              <div className="relative">
                <i className="bi bi-envelope text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus:ring-4 focus:ring-[#1F7A4D]/10 rounded-[10px] pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
                />
              </div>

              <div className="relative">
                <i className="bi bi-lock text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus:ring-4 focus:ring-[#1F7A4D]/10 rounded-[10px] pl-11 pr-11 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
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
                    className="w-3.5 h-3.5 rounded border-[#DDE7E0] text-[#1F7A4D] focus:ring-[#1F7A4D]"
                  />
                  Remember me
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-[#1F7A4D] hover:text-[#16553A]"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="self-start text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] px-16 py-3.5 rounded-[10px] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30 transition-all cursor-pointer tracking-wider mt-4"
              >
                LOGIN
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-[#1F7A4D] hover:text-[#16553A]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
