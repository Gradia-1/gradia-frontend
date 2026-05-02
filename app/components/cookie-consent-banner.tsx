"use client";

import { useEffect, useState } from "react";
import {
  type ConsentChoice,
  type ConsentPreferences,
  getCookieConsent,
  saveCookieConsent,
} from "@/app/lib/cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      setVisible(true);
      return;
    }

    setAnalytics(consent.preferences.analytics);
    setMarketing(consent.preferences.marketing);
  }, []);

  const saveConsent = (choice: ConsentChoice, preferences: ConsentPreferences) => {
    saveCookieConsent(choice, preferences);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[109] bg-black/10 backdrop-blur-[2px]" aria-hidden />
      <div className="fixed inset-x-0 bottom-0 z-[110] px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] sm:px-4 sm:pb-4">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-[#DDE7E0] bg-white shadow-[0_18px_40px_-18px_rgba(15,61,39,0.35)]">
          <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#EAF6EF]" />
          <div className="pointer-events-none absolute -right-4 top-10 h-5 w-5 rounded-full bg-[#1F7A4D]/20" />

          <div className="relative flex flex-col gap-4 p-3 sm:grid sm:grid-cols-[auto,1fr,auto] sm:items-center sm:gap-6 sm:p-4">
            <h3 className="text-3xl font-bold italic text-[#1A1A1A]" style={{ fontFamily: "var(--font-dm-serif)" }}>
              We use cookies
            </h3>

            <p className="text-sm leading-relaxed text-gray-700">
              Gradia uses essential cookies to keep the platform secure and optional cookies to improve product
              experience. New users will see this banner, and it will appear again if browser data is cleared.
            </p>

            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
              <button
                type="button"
                onClick={() => setShowSettings((v) => !v)}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#DDE7E0] bg-[#EAF6EF] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#16553A] transition-colors hover:border-[#1F7A4D]"
              >
                Cookie settings
              </button>
              <button
                type="button"
                onClick={() =>
                  saveConsent("rejected", { essential: true, analytics: false, marketing: false })
                }
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[#DDE7E0] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#1A1A1A] transition-colors hover:border-[#1F7A4D]"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() =>
                  saveConsent("accepted", { essential: true, analytics: true, marketing: true })
                }
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#1F7A4D] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#16553A]"
              >
                Accept
              </button>
            </div>
          </div>

          {showSettings && (
            <div className="relative border-t border-[#DDE7E0] bg-[#FCFEFD] px-3 py-3 sm:px-4">
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded-xl border border-[#DDE7E0] bg-white px-3 py-2">
                  <p className="text-xs font-bold text-[#1A1A1A]">Essential</p>
                  <p className="mt-1 text-xs text-gray-500">Always active</p>
                </div>

                <button
                  type="button"
                  onClick={() => setAnalytics((v) => !v)}
                  className={`rounded-xl border px-3 py-2 text-left transition-colors ${
                    analytics ? "border-[#1F7A4D] bg-[#EAF6EF]" : "border-[#DDE7E0] bg-white"
                  }`}
                >
                  <p className="text-xs font-bold text-[#1A1A1A]">Analytics</p>
                  <p className="mt-1 text-xs text-gray-500">{analytics ? "Enabled" : "Disabled"}</p>
                </button>

                <button
                  type="button"
                  onClick={() => setMarketing((v) => !v)}
                  className={`rounded-xl border px-3 py-2 text-left transition-colors ${
                    marketing ? "border-[#1F7A4D] bg-[#EAF6EF]" : "border-[#DDE7E0] bg-white"
                  }`}
                >
                  <p className="text-xs font-bold text-[#1A1A1A]">Marketing</p>
                  <p className="mt-1 text-xs text-gray-500">{marketing ? "Enabled" : "Disabled"}</p>
                </button>
              </div>

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    saveConsent("custom", { essential: true, analytics, marketing })
                  }
                  className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#1F7A4D] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#16553A]"
                >
                  Save preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
