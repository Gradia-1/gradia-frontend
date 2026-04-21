"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const leftPanel = sent
    ? {
        label: "Email on the way",
        headline: "Check your inbox to continue.",
        subtitle: "Follow the link we sent to set a new password.",
      }
    : {
        label: "Secure recovery",
        headline: "Let's get you back in.",
        subtitle: "We'll email you secure reset instructions.",
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
              {leftPanel.label}
            </span>
            <span className="h-px flex-1 max-w-[140px] bg-white/40"></span>
          </div>

          <div className="mt-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-[1.15] max-w-md">
              {leftPanel.headline}
            </h2>
            <p className="mt-3 text-sm text-white/70 max-w-sm">
              {leftPanel.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Right: soft-green panel with glass form card */}
      <div className="relative bg-[#EAF6EF] overflow-y-auto">
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-4 left-4 md:top-6 md:left-6 z-10 inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#1F7A4D] transition-colors cursor-pointer"
        >
          <i className="bi bi-arrow-left"></i>
          Back
        </button>

        <div className="min-h-full flex justify-center p-6 md:p-10">
          <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-sm my-auto">
            {!sent ? (
              <>
                <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
                  Forgot password?
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Enter your email and we&apos;ll send you a reset link.
                </p>

                <form
                  className="mt-6 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="relative">
                    <i className="bi bi-envelope text-sm opacity-60 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 rounded-[10px] pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] py-3.5 rounded-[10px] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30 transition-all cursor-pointer tracking-wider mt-4"
                  >
                    SEND RESET LINK
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
              </>
            ) : (
              <>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#EAF6EF] border border-[#1F7A4D]/30 flex items-center justify-center text-[#1F7A4D]">
                    <i className="bi bi-envelope-check text-2xl"></i>
                  </div>
                  <h1 className="mt-5 text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
                    Check your inbox
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 max-w-xs">
                    We&apos;ve sent a reset link to{" "}
                    <span className="font-bold text-[#1A1A1A]">{email}</span>.
                    Click it to set a new password.
                  </p>
                </div>

                <div className="mt-6 bg-[#F9FAFB] border border-[#DDE7E0] rounded-[10px] p-4 text-xs text-gray-600">
                  <p className="font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Didn&apos;t receive it?
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>Check your spam folder</li>
                    <li>Make sure the email is correct</li>
                    <li>Wait a minute — it may take time to arrive</li>
                  </ul>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="flex-1 text-sm font-bold text-[#1A1A1A] bg-white border border-[#DDE7E0] hover:border-[#1F7A4D] py-3 rounded-[10px] transition-colors cursor-pointer"
                  >
                    Change email
                  </button>
                  <button
                    type="button"
                    className="flex-1 text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] py-3 rounded-[10px] transition-colors cursor-pointer"
                  >
                    Resend
                  </button>
                </div>

                <p className="mt-5 text-sm text-center text-gray-600">
                  <Link
                    href="/root/auth/login"
                    className="font-bold text-[#1F7A4D] hover:text-[#16553A]"
                  >
                    Back to login
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
