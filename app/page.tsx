import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white h-screen flex items-center pt-16">
        <div className="relative max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left: copy */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-black max-w-xl">
              Run your school with{" "}
              <span className="text-[#22C55E]">clarity, speed, and trust</span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-600 max-w-lg">
              Gradia unifies student records, academics, finance, communication,
              and AI-powered insights in one professional platform built for
              school owners, administrators, teachers, and parents.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all"
              >
                Start Free Trial
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-black bg-white border border-gray-200 hover:border-[#22C55E] px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all"
              >
                <i className="bi bi-play-circle text-[#22C55E]"></i>
                See How It Works
              </Link>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 max-w-lg">
              <li className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#22C55E]"></i>
                Mobile-first and intuitive
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-check-circle-fill text-[#22C55E]"></i>
                Billing-ready
              </li>
              <li className="flex items-center gap-2 sm:col-span-2">
                <i className="bi bi-check-circle-fill text-[#22C55E]"></i>
                Scales from one school to many
              </li>
            </ul>
          </div>

          {/* Right: visual */}
          <div className="relative flex items-center justify-center h-full">
            <div className="absolute inset-4 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
            <Image
              src="/hero-section-image.png"
              alt="Teacher showing analytics to students"
              width={720}
              height={720}
              className="relative w-full max-w-xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Who is Gradia for? */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-10 relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#16A34A] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="bi bi-people-fill"></i>
              Everything your school needs in one platform
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              Built around the daily flow of school operations
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Gradia groups powerful tools into clear modules so every role can
              move faster, communicate better, and make decisions with confidence.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Student Management */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="text-[#22C55E] text-3xl flex justify-center">
                <i className="bi bi-person-vcard-fill"></i>
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">Student Management</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Admissions, profiles, attendance, discipline, class lists, and complete digital student records.
              </p>
            </div>

            {/* Academics & LMS */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="text-[#22C55E] text-3xl flex justify-center">
                <i className="bi bi-book-half"></i>
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">Academics &amp; LMS</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Timetables, assignments, grading, exams, report cards, content delivery, and learning progress.
              </p>
            </div>

            {/* Finance & Billing */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="text-[#22C55E] text-3xl flex justify-center">
                <i className="bi bi-cash-stack"></i>
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">Finance &amp; Billing</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Fee structures, invoices, payment tracking, receipts, debt follow-up, and mobile money support.
              </p>
            </div>

            {/* Communication */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="text-[#22C55E] text-3xl flex justify-center">
                <i className="bi bi-chat-dots-fill"></i>
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">Communication</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Announcements, parent messaging, staff notices, alerts, and class-specific updates from one hub.
              </p>
            </div>

            {/* Analytics & AI Insights */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="text-[#22C55E] text-3xl flex justify-center">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">Analytics &amp; AI Insights</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Track trends, identify risk patterns, monitor finances, and get smarter operational recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-10 relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#16A34A] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="bi bi-patch-check-fill"></i>
              Why schools choose GRADIA
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              A professional system that still feels approachable
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              From a single campus to a growing network of schools, Gradia helps
              you simplify administration while improving visibility across
              every department.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {/* All-in-one operations */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="flex items-center gap-3">
                <i className="bi bi-layers-fill text-[#22C55E] text-2xl"></i>
                <h3 className="text-lg font-bold text-black">All-in-one operations</h3>
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Replace scattered spreadsheets and disconnected tools with one
                trusted source of truth.
              </p>
            </div>

            {/* Mobile money ready */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="flex items-center gap-3">
                <i className="bi bi-phone-fill text-[#22C55E] text-2xl"></i>
                <h3 className="text-lg font-bold text-black">Mobile money ready</h3>
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Support modern fee collection methods that fit African and
                emerging market schools.
              </p>
            </div>

            {/* Actionable AI insights */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="flex items-center gap-3">
                <i className="bi bi-lightning-charge-fill text-[#22C55E] text-2xl"></i>
                <h3 className="text-lg font-bold text-black">Actionable AI insights</h3>
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Spot attendance risks, billing delays, and performance trends
                before they become bigger issues.
              </p>
            </div>

            {/* Scalable multi-school SaaS */}
            <div className="relative bg-white rounded-2xl border border-gray-200 p-6 cursor-pointer">
              <div className="flex items-center gap-3">
                <i className="bi bi-bank2 text-[#22C55E] text-2xl"></i>
                <h3 className="text-lg font-bold text-black">Scalable multi-school SaaS</h3>
              </div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Manage one school or many with role controls, centralized
                reporting, and cloud reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#16A34A] text-xs font-bold px-3 py-1.5 rounded-full">
              <i className="bi bi-tag-fill"></i>
              Simple, transparent pricing
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              Choose the package that matches your growth stage
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              Simple SaaS pricing with room to scale as your school expands its
              operations, users, and campuses.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
            {/* Basic */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col">
              <h3 className="text-2xl font-extrabold text-black">Basic</h3>
              <p className="mt-2 text-sm text-gray-500">
                For small schools starting to digitize operations.
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-extrabold text-black">$29</span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>
              <div className="my-6 h-px bg-gray-200"></div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">What&apos;s included</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 flex-1">
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Up to 500 students
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Student records &amp; attendance
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Basic billing tools
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Parent communication
                </li>
              </ul>
              <Link
                href="/signup"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-black bg-white border border-gray-200 hover:border-[#22C55E] px-5 py-3 rounded-full transition-colors"
              >
                Choose Basic
              </Link>
            </div>

            {/* Standard — highlighted */}
            <div className="relative bg-white rounded-2xl border-2 border-[#22C55E] p-7 md:-translate-y-4 flex flex-col">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest bg-[#22C55E] text-white px-3 py-1 rounded-full">
                Most loved
              </span>
              <h3 className="text-2xl font-extrabold text-black">Standard</h3>
              <p className="mt-2 text-sm text-gray-500">
                For growing schools that need more control and visibility.
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-extrabold text-black">$79</span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>
              <div className="my-6 h-px bg-[#22C55E]/20"></div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Everything in Basic, plus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 flex-1">
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  LMS, grading &amp; exams
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Advanced billing &amp; mobile money
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Analytics dashboard
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Admin, teacher, student &amp; parent portals
                </li>
              </ul>
              <Link
                href="/signup"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] px-5 py-3 rounded-full transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col">
              <h3 className="text-2xl font-extrabold text-black">Premium</h3>
              <p className="mt-2 text-sm text-gray-500">
                For multi-school networks and ambitious operations.
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-5xl font-extrabold text-black">Custom</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">Tailored to your network size</p>
              <div className="my-6 h-px bg-gray-200"></div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Everything in Standard, plus
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 flex-1">
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Multi-school management
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  AI insights &amp; executive reporting
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Priority onboarding
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="bi bi-check-circle-fill text-[#22C55E] mt-0.5"></i>
                  Custom integrations
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 text-sm font-bold text-black bg-white border border-gray-200 hover:border-[#22C55E] px-5 py-3 rounded-full transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#16A34A] text-xs font-bold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
              Trusted by forward-thinking schools
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1]">
              What school leaders are saying
            </h2>
            <p className="mt-5 text-base text-gray-600 max-w-xl">
              Short, credible social proof that highlights operational value,
              transparency, and improved school-parent relationships.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <p className="text-sm text-gray-700 leading-relaxed">
                &ldquo;Gradia helped us move from manual reporting to real-time
                visibility. We now track attendance, fees, and academic
                performance from a single dashboard.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="https://i.pinimg.com/736x/78/a4/90/78a49037be202bfa335fef1cf9e3718f.jpg"
                  alt="Pascal MUNEZA"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border border-[#22C55E]/30"
                />
                <div>
                  <p className="text-sm font-bold text-black">Pascal MUNEZA</p>
                  <p className="text-xs text-gray-500">Principal, Green Hills Academy</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <p className="text-sm text-gray-700 leading-relaxed">
                &ldquo;Fee collection became smoother almost immediately.
                Parents appreciate the transparency, and our admin team spends
                far less time following up manually.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="https://i.pinimg.com/736x/85/0e/cf/850ecf4212cb66a5ce94a94132b530ca.jpg"
                  alt="Pacifique HARERIMANA"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border border-[#22C55E]/30"
                />
                <div>
                  <p className="text-sm font-bold text-black">Pacifique HARERIMANA</p>
                  <p className="text-xs text-gray-500">Administrator, Crestview Schools</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <p className="text-sm text-gray-700 leading-relaxed">
                &ldquo;The role-based portals made adoption easy. Teachers,
                parents, and school leaders each know exactly where to go and
                what to do.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="https://i.pinimg.com/736x/a7/78/1b/a7781b8c72004ae4f9c014cfeeffd005.jpg"
                  alt="Octave BYIRINGIRO"
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover border border-[#22C55E]/30"
                />
                <div>
                  <p className="text-sm font-bold text-black">Octave BYIRINGIRO</p>
                  <p className="text-xs text-gray-500">Director, Sunrise College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-white pb-20 md:pb-28 pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a1a0f] px-8 py-16 md:px-16 md:py-20">
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                Ready to modernize your school operations?
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
                Transform your school today
              </h2>

              <p className="mt-5 text-base md:text-lg text-gray-300 max-w-lg">
                Book a tailored demo or start your free trial to see how Gradia
                can simplify management, improve communication, and unlock
                better decisions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-white bg-[#22C55E] hover:bg-[#16A34A] px-6 py-3 rounded-full transition-colors"
                >
                  Request a Demo
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-white bg-transparent border border-white/30 hover:border-white hover:bg-white/10 px-6 py-3 rounded-full transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
