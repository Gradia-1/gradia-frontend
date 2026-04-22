import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type Member = {
  name: string;
  role: string;
  photo?: string;
};

const team: Member[] = [
  {
    name: "Octave BYIRINGIRO",
    role: "Backend Engineer",
    photo: "/teams/octave_byiringiro.jpeg",
  },
  {
    name: "Pacifique BAKUNDUKIZE",
    role: "Backend Engineer",
  },
  {
    name: "Pascal MUNEZA",
    role: "Frontend Engineer",
    photo: "/teams/muneza_pascal.jpeg",
  },
  {
    name: "Pacifique HARERIMANA",
    role: "Frontend Lead",
    photo: "/teams/pacifique_harerimana.jpeg",
  },
  {
    name: "Pacific UWITONZE",
    role: "Frontend Engineer",
    photo: "/teams/Uwitonze_pacific.jpeg",
  },
  {
    name: "Salomon NKURUNZIZA",
    role: "Team Lead",
    photo: "/teams/salomon_nkurunziza.jpeg",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── 1. HERO / THE MAKERS ────────────────────────── */}
        <section className="relative bg-[#0F3D27] overflow-hidden h-[50vh] min-h-[420px] flex flex-col pt-20 md:pt-24">
          {/* Blurred background image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/hero-section-image.png"
              alt=""
              fill
              className="object-cover blur-xl scale-110 opacity-70"
              priority
            />
          </div>
          {/* Dark green overlay for contrast */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#0F3D27]/45 pointer-events-none"
          />
          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0F3D27] to-transparent pointer-events-none"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-6 md:py-10 flex-1 flex flex-col justify-center">
            {/* Big title */}
            <h2
              className="font-bold leading-none tracking-tight text-white/90 text-[14vw] md:text-[11vw] lg:text-[8rem]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.55) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OUR STORY
            </h2>
            <p className="text-left md:text-right text-white/70 text-[10px] sm:text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] mt-3 md:mt-2">
              HOW GRADIA BEGAN, AND WHERE IT&apos;S GOING
            </p>
          </div>
        </section>

        {/* ── 2. WHAT WE BUILD ────────────────────────────── */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center">
            <span className="inline-block text-[#1F7A4D] text-xs font-bold tracking-[0.4em]">
              WHAT WE BUILD
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-[1.2]">
              A school management platform for records, academics, finance, and
              communication.
            </h2>
            <p className="mt-5 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Built for schools across East Africa one place for every part
              of running your school, from admission to report cards.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-left md:text-center">
              {[
                {
                  icon: "bi-person-vcard",
                  label: "Records",
                  desc: "Student profiles, attendance, and enrollment.",
                },
                {
                  icon: "bi-mortarboard",
                  label: "Academics",
                  desc: "Grading, assignments, and report cards.",
                },
                {
                  icon: "bi-cash-coin",
                  label: "Finance",
                  desc: "Fees, invoices, and mobile money.",
                },
                {
                  icon: "bi-chat-dots",
                  label: "Communication",
                  desc: "Messages, notices, and alerts.",
                },
              ].map((p) => (
                <div key={p.label} className="md:mx-auto md:max-w-[200px]">
                  <i className={`bi ${p.icon} text-[#1F7A4D] text-2xl`}></i>
                  <p className="mt-3 text-sm font-bold text-[#1A1A1A]">
                    {p.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. MISSION ──────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-3xl md:text-4xl font-bold text-[#1F7A4D] leading-none">
                01
              </span>
              <span className="h-px w-8 bg-[#1F7A4D]/50"></span>
              <span className="text-xs font-bold text-[#1F7A4D] tracking-[0.4em]">
                MISSION
              </span>
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.15]">
              Run schools with clarity, speed, and trust.
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We build the operational spine that lets head teachers lead,
              teachers teach, parents stay close, and students thrive.
            </p>
          </div>
        </section>

        {/* ── 4. VISION ───────────────────────────────────── */}
        <section className="bg-[#EAF6EF] py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-3xl md:text-4xl font-bold text-[#1F7A4D] leading-none">
                02
              </span>
              <span className="h-px w-8 bg-[#1F7A4D]/50"></span>
              <span className="text-xs font-bold text-[#1F7A4D] tracking-[0.4em]">
                VISION
              </span>
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.15]">
              Every school on one trusted platform.
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              A region where records, grades, fees, and communication move
              through one calm, honest system no matter the school&apos;s size.
            </p>
          </div>
        </section>

        {/* ── 5. VALUES ───────────────────────────────────── */}
        <section className="bg-white py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-3xl md:text-4xl font-bold text-[#1F7A4D] leading-none">
                03
              </span>
              <span className="h-px w-8 bg-[#1F7A4D]/50"></span>
              <span className="text-xs font-bold text-[#1F7A4D] tracking-[0.4em]">
                VALUES
              </span>
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.15]">
              Simplicity. Warmth. Honesty.
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
              We choose the quiet path fewer buttons, clearer words, and real
              support. Every screen is measured against these three.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Simplicity", body: "Fewer buttons. Clearer words." },
                { label: "Warmth", body: "Human tone, real people." },
                { label: "Honesty", body: "No dark patterns. Ever." },
              ].map((v) => (
                <div
                  key={v.label}
                  className="border-t border-[#DDE7E0] pt-4"
                >
                  <p className="text-sm font-bold text-[#1A1A1A]">{v.label}</p>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. TEAM ─────────────────────────────────────── */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
                <span className="text-[#1A1A1A]">OUR </span>
                <span className="text-[#1F7A4D]">TEAM</span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
                A small, focused team of six. The people who design, build,
                and ship Gradia every week.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10">
              {team.map((member) => {
                const initial = member.name.charAt(0);
                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-gray-200">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover grayscale"
                          sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 35%, #4a5a52 0%, #2a332e 60%, #111613 100%)",
                          }}
                        >
                          <span className="text-5xl md:text-6xl font-bold text-white/85 leading-none select-none">
                            {initial}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="mt-5 text-sm md:text-base font-bold text-[#1F7A4D]">
                      {member.name}
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-gray-500">
                      {member.role}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. FINAL CTA ────────────────────────────────── */}
        <section className="relative bg-white py-16 md:py-20 border-t border-[#DDE7E0]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="inline-block text-[#1F7A4D] text-xs font-bold tracking-[0.3em] mb-3">
                  READY WHEN YOU ARE
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-[1.15]">
                  Bring Gradia to your school.
                </h2>
                <p className="mt-3 text-sm text-gray-600 max-w-md">
                  Book a tailored demo or start your free trial — our team
                  helps you go live within a week.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/root/auth/signup"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1F7A4D] bg-transparent border-2 border-[#1F7A4D] hover:bg-[#1F7A4D] hover:text-white px-6 py-3 rounded-full transition-colors"
                >
                  Start Free Trial
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  href="/root/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] bg-transparent border border-[#DDE7E0] hover:border-[#1F7A4D] hover:text-[#1F7A4D] px-6 py-3 rounded-full transition-colors"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
