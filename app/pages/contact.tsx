"use client";

import { useState } from "react";
import Navbar from "../components/navabar";
import Footer from "../components/footer";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState("General inquiry");
  const [topicOpen, setTopicOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [emailBlurred, setEmailBlurred] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showEmailError = emailBlurred && email.length > 0 && !emailValid;

  const topics = [
    "General inquiry",
    "Sales & pricing",
    "Technical support",
    "Partnerships",
    "Press & media",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-[#EAF6EF] pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
              {/* Left: pitch */}
              <div className="md:col-span-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.1]">
                  Talk to our{" "}
                  <span
                    className="italic font-normal text-[#1F7A4D]"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    school success
                  </span>{" "}
                  team today
                </h1>
                <p className="mt-4 text-sm md:text-base text-gray-600 max-w-md">
                  Get in touch with our team for any questions about pricing,
                  onboarding, or running your school with Gradia.
                </p>

                <ul className="mt-8 space-y-5">
                  <FeatureItem
                    title="Personalized onboarding"
                    description="Dedicated guidance from school operations experts."
                  />
                  <FeatureItem
                    title="Secure school data"
                    description="Your students' and families' data protected at bank-grade standards."
                  />
                  <FeatureItem
                    title="Fast & friendly support"
                    description="Our team is ready to assist expect quick responses."
                  />
                </ul>

                <p className="mt-10 text-sm text-gray-600">
                  Need urgent help? Call{" "}
                  <a
                    href="tel:+250788000000"
                    className="font-semibold text-[#1F7A4D] hover:text-[#16553A] underline underline-offset-2"
                  >
                    +250 788 XXX XXX
                  </a>
                </p>
              </div>

              {/* Right: form card */}
              <div className="md:col-span-3">
                <div className="bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl p-6 sm:p-8 shadow-sm">
                  {!sent ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A]">
                        Please enter your information
                      </h2>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="Full name">
                          <input
                            type="text"
                            required
                            placeholder="Enter full name"
                            className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 rounded-[10px] px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
                          />
                        </Field>
                        <Field label="Email">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setEmailBlurred(true)}
                            placeholder="Enter email"
                            className={`w-full bg-white border rounded-[10px] px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all focus-visible:ring-4 ${
                              showEmailError
                                ? "border-red-400 focus:border-red-500 focus-visible:ring-red-200"
                                : "border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-[#1F7A4D]/20"
                            }`}
                          />
                          {showEmailError && (
                            <p className="mt-1.5 text-xs text-red-600 font-medium">
                              Please enter a valid email address
                            </p>
                          )}
                        </Field>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <Field label="School / organization">
                          <input
                            type="text"
                            placeholder="Enter school"
                            className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 rounded-[10px] px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all"
                          />
                        </Field>
                        <Field label="Topic">
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setTopicOpen(!topicOpen)}
                              className={`w-full bg-white border rounded-[10px] px-4 pr-10 py-3 text-sm text-left cursor-pointer flex items-center justify-between transition-colors ${
                                topicOpen
                                  ? "border-[#1F7A4D] ring-4 ring-[#1F7A4D]/10"
                                  : "border-[#DDE7E0] hover:border-[#1F7A4D]"
                              }`}
                            >
                              <span className="text-gray-700">{topic}</span>
                              <i
                                className={`bi bi-chevron-down text-sm opacity-60 text-gray-500 transition-transform ${
                                  topicOpen ? "rotate-180" : ""
                                }`}
                              ></i>
                            </button>
                            {topicOpen && (
                              <div className="absolute z-20 top-full left-0 right-0 mt-1.5 bg-white border border-[#DDE7E0] rounded-[10px] shadow-lg overflow-hidden">
                                {topics.map((t) => (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => {
                                      setTopic(t);
                                      setTopicOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                      topic === t
                                        ? "bg-[#EAF6EF] text-[#1F7A4D] font-bold"
                                        : "text-gray-700 hover:bg-[#F5F7F5]"
                                    }`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </Field>
                      </div>

                      <Field label="Message">
                        <textarea
                          required
                          rows={5}
                          placeholder="Enter your message here…"
                          className="w-full bg-white border border-[#DDE7E0] focus:border-[#1F7A4D] focus-visible:ring-4 focus-visible:ring-[#1F7A4D]/20 rounded-[10px] px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 outline-none transition-all resize-none"
                        ></textarea>
                      </Field>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] disabled:opacity-70 disabled:cursor-not-allowed py-3.5 rounded-[10px] shadow-sm shadow-[#1F7A4D]/20 hover:shadow-md hover:shadow-[#1F7A4D]/30 transition-all cursor-pointer tracking-wider"
                      >
                        {submitting && <i className="bi bi-arrow-repeat animate-spin"></i>}
                        {submitting ? "SENDING..." : "SEND MESSAGE"}
                      </button>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center text-center py-8">
                      <div className="w-14 h-14 rounded-full bg-[#EAF6EF] border border-[#1F7A4D]/30 flex items-center justify-center text-[#1F7A4D]">
                        <i className="bi bi-check-lg text-2xl"></i>
                      </div>
                      <h2 className="mt-5 text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
                        Message sent!
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 max-w-sm">
                        Thanks for reaching out. Our team will get back to you
                        within one business day.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-6 text-sm font-bold text-[#1F7A4D] hover:text-[#16553A] cursor-pointer"
                      >
                        Send another message
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F7A4D] flex items-center justify-center mt-0.5">
        <i className="bi bi-check text-white text-sm"></i>
      </span>
      <div>
        <p className="text-sm font-bold text-[#1A1A1A]">{title}</p>
        <p className="mt-0.5 text-xs text-gray-500">{description}</p>
      </div>
    </li>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-gray-600 uppercase tracking-wider">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
