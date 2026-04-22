"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type BillingPeriod = "monthly" | "sixMonth" | "yearly";

const periodMeta: Record<BillingPeriod, { label: string; save: number; billedLabel: string }> = {
  monthly: { label: "1 month", save: 0, billedLabel: "Billed monthly" },
  sixMonth: { label: "6 months", save: 10, billedLabel: "Billed every 6 months" },
  yearly: { label: "12 months", save: 20, billedLabel: "Billed annually" },
};

type Plan = {
  id: "basic" | "standard" | "premium";
  name: string;
  description: string;
  prices: Record<BillingPeriod, number | null>;
  featuresLabel: string;
  features: string[];
  cta: { label: string; href: string };
  highlight: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "For small schools starting to digitize operations.",
    prices: { monthly: 29, sixMonth: 26, yearly: 23 },
    featuresLabel: "What's included",
    features: [
      "Up to 500 students",
      "Student records & attendance",
      "Basic billing tools",
      "Parent communication",
    ],
    cta: { label: "Choose Basic", href: "/root/auth/signup" },
    highlight: false,
  },
  {
    id: "standard",
    name: "Standard",
    description: "For growing schools that need more control and visibility.",
    prices: { monthly: 79, sixMonth: 71, yearly: 63 },
    featuresLabel: "Everything in Basic, plus",
    features: [
      "LMS, grading & exams",
      "Advanced billing & mobile money",
      "Analytics dashboard",
      "Admin, teacher, student & parent portals",
    ],
    cta: { label: "Start Free Trial", href: "/root/auth/signup" },
    highlight: true,
    badge: "Most loved",
  },
  {
    id: "premium",
    name: "Premium",
    description: "For multi-school networks and ambitious operations.",
    prices: { monthly: null, sixMonth: null, yearly: null },
    featuresLabel: "Everything in Standard, plus",
    features: [
      "Multi-school management",
      "AI insights & executive reporting",
      "Priority onboarding",
      "Custom integrations",
    ],
    cta: { label: "Contact Sales", href: "/root/contact" },
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or downgrade at any time from your dashboard. Changes take effect at the start of the next billing cycle, and we'll pro-rate the difference.",
  },
  {
    q: "Is there a free trial?",
    a: "Every paid plan includes a full school term (3 months) as a free trial. No credit card required to start you only pay when you decide Gradia is the right fit.",
  },
  {
    q: "What happens at the end of the free trial?",
    a: "Nothing automatically. We'll email you a reminder a week before your trial ends. If you decide not to continue, your account stays read-only for 30 days enough time to export everything. No data is ever deleted without notice.",
  },
  {
    q: "Do you offer discounts for multiple schools?",
    a: "Yes. Multi-school networks, school groups, and districts get custom pricing on Premium. Reach out via our contact form and our team will tailor a plan.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit and debit cards, mobile money (MTN, Airtel, M-Pesa), and bank transfers in local currencies for annual plans.",
  },
  {
    q: "How do I cancel?",
    a: "You can cancel anytime from your dashboard's billing page. No phone calls, no cancellation fees. You'll keep access until the end of your current billing period.",
  },
  {
    q: "Is our school's data secure?",
    a: "Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Gradia runs on hardened cloud infrastructure, enforces role-based access controls, and never sells or shares your data with third parties. Regular backups and audit logs are built in.",
  },
  {
    q: "Who owns the data we put into Gradia?",
    a: "Your school owns 100% of its data student records, grades, fees, everything. Gradia is only a custodian. You can export all of it at any time as standard CSV/Excel files, no approval needed.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most schools go live within a week. Setup takes a few hours (classes, fees, users), and our team helps you import existing records. For multi-school networks, we schedule a dedicated kickoff session.",
  },
  {
    q: "Do you train our teachers and staff?",
    a: "Yes. Every plan includes guided onboarding videos, role specific walkthroughs, and a live training session for staff. Premium plans get on-site training and a dedicated success manager.",
  },
  {
    q: "Can we import our existing student records?",
    a: "Absolutely. Upload a CSV or Excel file (from your current system or spreadsheets) and our importer handles the mapping. Need help? Our team runs the import for you during onboarding at no extra cost.",
  },
  {
    q: "Does Gradia work on mobile?",
    a: "Yes. Gradia works on any smartphone, tablet, or laptop through a browser no app install required. Teachers, parents, and students can all access their portal from anywhere.",
  },
  {
    q: "What happens if our internet goes down?",
    a: "Gradia is a cloud platform, so a full outage means temporary read-only access. We recommend keeping a local spreadsheet for emergency attendance. Premium plans include an offline PWA mode that syncs once connectivity returns.",
  },
  {
    q: "Do parents or students need to pay anything?",
    a: "No. Gradia is billed to the school only. Parents, students, and teachers access their portals for free it's part of your school's subscription.",
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <>
      <Navbar />
      <main>
        {/* Hero + cards on soft-green background */}
        <section className="relative bg-[#EAF6EF] overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24">
          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-20 md:top-24 text-center pointer-events-none select-none"
          >
            <span className="block font-bold leading-none text-[#1F7A4D]/[0.08] text-[120px] md:text-[200px] lg:text-[260px]">
              Pricing
            </span>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            {/* Header block */}
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.1]">
                Choose your right plan!
              </h1>
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!
              </p>

              {/* Billing toggle */}
              <div
                className="mt-8 inline-flex items-center gap-1 bg-white/30 backdrop-blur-md border border-[#1F7A4D]/30 rounded-full p-1"
                role="radiogroup"
                aria-label="Billing period"
              >
                {(Object.keys(periodMeta) as BillingPeriod[]).map((p) => {
                  const active = period === p;
                  const meta = periodMeta[p];
                  return (
                    <button
                      key={p}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setPeriod(p)}
                      className={`relative inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all cursor-pointer focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 outline-none ${
                        active
                          ? "bg-[#1F7A4D] text-white shadow-sm"
                          : "text-gray-600 hover:text-[#1A1A1A]"
                      }`}
                    >
                      {meta.label}
                      {meta.save > 0 && (
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            active
                              ? "bg-[#F4B740] text-[#1A1A1A]"
                              : "bg-[#F4B740]/20 text-[#1F7A4D]"
                          }`}
                        >
                          -{meta.save}%
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pricing cards */}
            <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} period={period} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative bg-[#EAF6EF]/40 py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
                Frequently asked questions
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">
                Still have questions?{" "}
                <Link
                  href="/root/contact"
                  className="font-semibold text-[#1F7A4D] hover:text-[#16553A]"
                >
                  Talk to us
                </Link>
                .
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white/60 backdrop-blur-xl border border-white/80 rounded-[10px] overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                    <span className="text-sm md:text-base font-semibold text-[#1A1A1A]">
                      {f.q}
                    </span>
                    <i className="bi bi-plus-lg text-[#1F7A4D] text-lg transition-transform group-open:rotate-45"></i>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function PlanCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const price = plan.prices[period];

  return (
    <div
      className={`relative bg-white/40 backdrop-blur-xl rounded-2xl p-7 flex flex-col ${
        plan.highlight
          ? "border-2 border-[#1F7A4D] md:-translate-y-4 shadow-lg shadow-[#1F7A4D]/10"
          : "border border-white/60"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-[#F4B740] text-[#1A1A1A] px-3 py-1 rounded-full">
          {plan.badge}
        </span>
      )}

      <h3 className="text-2xl font-bold text-[#1A1A1A]">{plan.name}</h3>
      <p className="mt-2 text-sm text-gray-500">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1.5">
        {price !== null ? (
          <>
            <span className="text-5xl font-bold text-[#1A1A1A] transition-all duration-200">
              ${price}
            </span>
            <span className="text-sm text-gray-500">/ month</span>
          </>
        ) : (
          <span className="text-5xl font-bold text-[#1A1A1A]">Custom</span>
        )}
      </div>
      {price !== null && period !== "monthly" && (
        <p className="mt-1 text-xs text-gray-500">{periodMeta[period].billedLabel}</p>
      )}
      {price === null && (
        <p className="mt-1 text-xs text-gray-500">Tailored to your network size</p>
      )}

      <div className="my-6 h-px bg-[#DDE7E0]"></div>

      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        {plan.featuresLabel}
      </p>
      <ul className="mt-4 space-y-3 text-sm text-gray-700 flex-1">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <i className="bi bi-check-circle-fill text-[#1F7A4D] mt-0.5"></i>
            {feat}
          </li>
        ))}
      </ul>

      <Link
        href={plan.cta.href}
        className={`mt-7 w-full inline-flex items-center justify-center text-sm font-bold py-3.5 rounded-[10px] transition-all cursor-pointer tracking-wider ${
          plan.highlight
            ? "text-white bg-[#1F7A4D] hover:bg-[#16553A] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30"
            : "text-[#1A1A1A] bg-white border border-[#DDE7E0] hover:border-[#1F7A4D]"
        }`}
      >
        {plan.cta.label}
      </Link>
    </div>
  );
}
