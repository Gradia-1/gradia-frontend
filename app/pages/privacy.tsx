"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const sections = [
  { id: "introduction", title: "Introduction", icon: "bi-info-circle" },
  { id: "data-collection", title: "Data Collection", icon: "bi-database" },
  { id: "types-of-data", title: "Types of Data", icon: "bi-collection" },
  { id: "use-of-data", title: "Use of Data", icon: "bi-gear" },
  { id: "data-sharing", title: "Data Sharing", icon: "bi-people" },
  { id: "user-rights", title: "Your Rights", icon: "bi-shield-check" },
  { id: "security", title: "Security Measures", icon: "bi-lock" },
  { id: "childrens-privacy", title: "Children's Privacy", icon: "bi-emoji-smile" },
  { id: "retention", title: "Data Retention", icon: "bi-clock-history" },
  { id: "changes", title: "Changes to Policy", icon: "bi-arrow-repeat" },
  { id: "contact", title: "Contact Us", icon: "bi-envelope" },
];

export default function Privacy() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative bg-[#0F3D27] pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-16 md:top-20 text-center pointer-events-none select-none"
          >
            <span className="block font-bold leading-none text-white/[0.05] text-[120px] md:text-[200px] lg:text-[260px]">
              Privacy
            </span>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm md:text-base text-white/80">
              How we collect, use, and protect your information.
            </p>
            <p className="mt-2 text-xs text-white/60">Last updated: April 21, 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="relative bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8 md:gap-12">
              {/* TOC sidebar */}
              <aside className="hidden md:block md:sticky md:top-24 md:self-start">
                <div className="bg-[#EAF6EF]/40 border border-[#DDE7E0] rounded-[10px] p-5">
                  <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Table of contents
                  </p>
                  <ul className="mt-4 space-y-0.5">
                    {sections.map((s) => {
                      const active = activeId === s.id;
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => scrollTo(s.id)}
                            className={`w-full flex items-center gap-2.5 text-left text-sm px-3 py-2 rounded-md transition-colors cursor-pointer ${
                              active
                                ? "bg-[#1F7A4D] text-white font-semibold"
                                : "text-gray-600 hover:text-[#1A1A1A] hover:bg-white"
                            }`}
                          >
                            <i className={`bi ${s.icon} text-xs opacity-70`}></i>
                            {s.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>

              {/* Main content */}
              <article className="min-w-0 space-y-12 text-[15px] text-gray-700 leading-relaxed">
                <Section id="introduction" title="Welcome to our Privacy Policy!">
                  <p>
                    At Gradia, we take your privacy seriously. This policy outlines how we collect,
                    use, and protect your personal information when you interact with our platform,
                    website, or services. By using Gradia, you agree to the terms described below.
                  </p>
                  <p>
                    Our commitment to safeguarding your data is rooted in our respect for your trust.
                    We want you to feel confident that your information, and your students&apos;
                    information, is handled responsibly, ethically, and in full compliance with
                    applicable data protection laws. Please read this policy carefully.
                  </p>
                </Section>

                <Section id="data-collection" title="Data Collection">
                  <p>
                    We collect information to provide and improve our services. The kinds of data we
                    collect fall into three categories.
                  </p>
                  <NumberedList
                    items={[
                      {
                        heading: "Information You Provide Directly",
                        body: "When you interact with Gradia, you voluntarily share details with us:",
                        bullets: [
                          ["Account information:", "name, email, phone number, school affiliation, and role (administrator, teacher, parent, or student)."],
                          ["Student records:", "names, class assignments, attendance, grades, and assessments entered by your school."],
                          ["Financial information:", "billing details, fee payments, and transaction history."],
                          ["Communication:", "messages, notifications, and any content you share through our platform."],
                        ],
                      },
                      {
                        heading: "Automatically Collected Information",
                        body: "When you use Gradia, we automatically collect limited technical data to keep the service running and secure:",
                        bullets: [
                          ["Device & browser:", "device type, operating system, browser version, IP address, and timezone."],
                          ["Usage analytics:", "pages visited, features used, and time spent. This data is anonymized and aggregated."],
                          ["Cookies & similar technologies:", "we use cookies to keep you signed in and remember preferences. You can control these through your browser."],
                        ],
                      },
                      {
                        heading: "Third-Party Sources",
                        body: "Some data reaches us through integrations your school chooses to enable:",
                        bullets: [
                          ["Payment providers:", "mobile money operators (MTN, Airtel, M-Pesa) and banks process payments on our behalf."],
                          ["Single sign-on:", "if you log in with Google, we receive basic profile information from that provider."],
                        ],
                      },
                    ]}
                  />
                </Section>

                <Section id="types-of-data" title="Types of Data">
                  <p>
                    The data we hold can be grouped into several categories, each handled with the
                    appropriate level of care:
                  </p>
                  <BulletList
                    items={[
                      ["Personally Identifiable Information (PII):", "names, national ID numbers, email addresses, and phone numbers."],
                      ["Educational records:", "grades, attendance, assignments, report cards, and teacher feedback."],
                      ["Financial records:", "fee structures, invoices, receipts, and payment histories."],
                      ["Technical data:", "IP addresses, device identifiers, session logs, and error reports."],
                      ["Communication data:", "messages between teachers, parents, and school administrators."],
                    ]}
                  />
                </Section>

                <Section id="use-of-data" title="Use of Data">
                  <p>We use your data for specific, limited purposes:</p>
                  <BulletList
                    items={[
                      ["Service delivery:", "operating the platform, managing student records, and processing transactions."],
                      ["Communication:", "sending notifications, alerts, reports, and important service updates."],
                      ["Improvement:", "analyzing aggregated usage patterns to make Gradia faster, safer, and easier to use."],
                      ["Compliance:", "meeting legal, regulatory, and audit obligations."],
                      ["Security:", "detecting fraud, preventing abuse, and protecting user accounts."],
                    ]}
                  />
                </Section>

                <Section id="data-sharing" title="Data Sharing">
                  <p>
                    <strong className="text-[#1A1A1A]">We do not sell your data.</strong> We only
                    share information when it is necessary to run the service or when the law
                    requires it:
                  </p>
                  <BulletList
                    items={[
                      ["Service providers:", "cloud hosting, payment processing, and transactional email are handled by vetted partners under strict contracts."],
                      ["Schools you belong to:", "your school administrators can see data relevant to their role (teachers see their classes, parents see their children)."],
                      ["Legal authorities:", "when compelled by valid legal process, such as a court order or regulatory investigation."],
                      ["Business transfers:", "in the event of a merger or acquisition, data may transfer to the new entity under the same protections."],
                    ]}
                  />
                </Section>

                <Section id="user-rights" title="Your Rights">
                  <p>
                    You have meaningful control over your data. Depending on your jurisdiction, you
                    may exercise the following rights:
                  </p>
                  <BulletList
                    items={[
                      ["Access:", "request a copy of the personal data we hold about you."],
                      ["Correction:", "update or correct any information that is inaccurate."],
                      ["Deletion:", "request deletion of your data, subject to legal retention requirements."],
                      ["Portability:", "export your data in a standard, machine-readable format."],
                      ["Objection:", "object to certain uses of your data, such as marketing analytics."],
                      ["Withdraw consent:", "change your mind at any time for anything based on your consent."],
                    ]}
                  />
                  <p className="text-sm text-gray-500">
                    To exercise any of these rights, contact us through the details at the bottom of
                    this page. We respond within 30 days.
                  </p>
                </Section>

                <Section id="security" title="Security Measures">
                  <p>
                    Protecting your data is not optional. Our security program combines industry
                    standards with school-specific safeguards:
                  </p>
                  <BulletList
                    items={[
                      ["Encryption:", "all data is encrypted in transit (TLS 1.3) and at rest (AES-256)."],
                      ["Access controls:", "role-based permissions ensure users only see the data they need."],
                      ["Infrastructure:", "hardened cloud environments with isolated databases and regular vulnerability scans."],
                      ["Backups:", "daily automated backups retained across multiple geographic regions."],
                      ["Audit logs:", "sensitive actions are logged for forensic review."],
                      ["Incident response:", "a documented breach protocol and notification process within 72 hours of discovery."],
                    ]}
                  />
                </Section>

                <Section id="childrens-privacy" title="Children's Privacy">
                  <p>
                    Gradia serves schools, which means we handle data about minors. We treat this
                    responsibility with extra care:
                  </p>
                  <BulletList
                    items={[
                      ["Parental consent:", "for children under the applicable age of consent in your jurisdiction, we require schools and parents to authorize data collection."],
                      ["No targeted advertising:", "we never serve ads to students or use their data for marketing."],
                      ["Limited collection:", "we collect only what is necessary to deliver educational services."],
                      ["Compliance:", "our practices align with COPPA, FERPA (where applicable), and GDPR-K standards."],
                    ]}
                  />
                </Section>

                <Section id="retention" title="Data Retention">
                  <p>
                    We retain data only as long as needed to provide the service or meet legal
                    obligations:
                  </p>
                  <BulletList
                    items={[
                      ["Active accounts:", "data is retained for the duration of your subscription."],
                      ["Cancelled accounts:", "30-day read-only grace period for exports, followed by 1-year archive, then full deletion."],
                      ["Legal obligations:", "some records (such as financial transactions) are kept longer where required by law."],
                      ["Anonymized analytics:", "may be retained indefinitely since they cannot identify individuals."],
                    ]}
                  />
                </Section>

                <Section id="changes" title="Changes to This Policy">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our
                    practices, technology, or legal requirements. When we make material changes, we
                    will notify you by email or through a prominent notice in the platform before
                    the changes take effect.
                  </p>
                  <p>
                    Continued use of Gradia after updates means you accept the revised policy. If
                    you disagree with any changes, you may cancel your account at any time.
                  </p>
                </Section>

                <Section id="contact" title="Contact Us">
                  <p>
                    If you have questions, concerns, or requests regarding this Privacy Policy or
                    your data, we want to hear from you:
                  </p>
                  <div className="bg-[#EAF6EF]/50 border border-[#DDE7E0] rounded-[10px] p-5 space-y-2 text-sm">
                    <p>
                      <strong className="text-[#1A1A1A]">Email:</strong>{" "}
                      <a
                        href="mailto:privacy@gradia.app"
                        className="text-[#1F7A4D] hover:text-[#16553A] font-semibold"
                      >
                        privacy@gradia.app
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#1A1A1A]">Phone:</strong>{" "}
                      <a
                        href="tel:+250788000000"
                        className="text-[#1F7A4D] hover:text-[#16553A] font-semibold"
                      >
                        +250 788 XXX XXX
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#1A1A1A]">Address:</strong> Kigali Innovation City,
                      Kigali, Rwanda
                    </p>
                    <p className="pt-2">
                      <Link
                        href="/root/contact"
                        className="inline-flex items-center gap-1.5 text-[#1F7A4D] hover:text-[#16553A] font-semibold"
                      >
                        Or send a message through our contact form
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </p>
                  </div>
                </Section>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function NumberedList({
  items,
}: {
  items: {
    heading: string;
    body: string;
    bullets: [string, string][];
  }[];
}) {
  return (
    <ol className="space-y-6 pl-0 list-none">
      {items.map((item, idx) => (
        <li key={item.heading} className="space-y-2">
          <p>
            <span className="text-[#1F7A4D] font-bold">{idx + 1}.</span>{" "}
            <strong className="text-[#1A1A1A]">{item.heading}:</strong> {item.body}
          </p>
          <ul className="ml-6 space-y-2">
            {item.bullets.map(([label, text]) => (
              <li key={label} className="flex items-start gap-2.5 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A4D] mt-2 flex-shrink-0"></span>
                <span>
                  <strong className="text-[#1A1A1A]">{label}</strong> {text}
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function BulletList({ items }: { items: [string, string][] }) {
  return (
    <ul className="space-y-2.5">
      {items.map(([label, text]) => (
        <li key={label} className="flex items-start gap-2.5 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1F7A4D] mt-2 flex-shrink-0"></span>
          <span>
            <strong className="text-[#1A1A1A]">{label}</strong> {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
