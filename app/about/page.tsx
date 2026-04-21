import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-16">

      {/* ── 1. HERO BANNER ───────────────────────────── */}
      <section className="relative bg-[#1E1B4B] py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gradia-bg-photo.png')] bg-cover bg-center opacity-10" />
        <div className="relative z-10">
          <p className="text-gray-300 text-sm mb-3">
            Home &rsaquo; About Us
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold">About Us</h1>
        </div>
      </section>

      {/* ── 2. INTRO (white) ──────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              About Gradia
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-5">
              Hear what schools are saying about School Management.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Gradia helps school administrators, teachers, and parents work
              together effortlessly. Our platform reduces paperwork, improves
              communication, and gives every student the attention they deserve.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              View Our Services
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <i className="bi bi-arrow-right text-xs"></i>
              </span>
            </Link>
          </div>

          {/* Right — image placeholder with play button */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-200 h-72 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-blue-900/40" />
            <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
              <i className="bi bi-play-fill text-purple-600 text-2xl ml-1"></i>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <p className="text-white font-bold text-lg">See Gradia in Action</p>
              <p className="text-white/70 text-sm">Watch how schools transformed their operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR VALUES (lavender bg) ───────────────── */}
      <section className="bg-[#F5F3FF] py-20 px-6 relative overflow-hidden">
        <i className="bi bi-diamond text-purple-200 text-4xl absolute top-8 right-12 rotate-12"></i>
        <i className="bi bi-diamond text-purple-100 text-2xl absolute top-14 right-20"></i>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              Hear what people are saying about School Management.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "bi-bar-chart-fill",
                title: "Academic Progress",
                body: "Your school's success is our success. We believe in making teachers' dreams and goals a reality — and our tools know just how to get there.",
                highlighted: false,
                hoverFrom: "hover:from-[#1D4ED8]",
                hoverTo: "hover:to-[#1E40AF]",
              },
              {
                icon: "bi-building",
                title: "School Administration",
                body: "Your school's success is our success. We believe in making administrators' dreams and goals a reality — and our tools know just how to get there.",
                highlighted: true,
                hoverFrom: "hover:from-[#7C3AED]",
                hoverTo: "hover:to-[#5B21B6]",
              },
              {
                icon: "bi-people-fill",
                title: "Parent–Teacher Teamwork",
                body: "Your school's success is our success. We believe in making collaboration a reality — and our experts know just how to enable it.",
                highlighted: false,
                hoverFrom: "hover:from-[#0F766E]",
                hoverTo: "hover:to-[#134E4A]",
              },
            ].map(({ icon, title, body, highlighted, hoverFrom, hoverTo }) => (
              <div
                key={title}
                className={`group rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                  highlighted
                    ? `bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white shadow-xl shadow-purple-300 hover:shadow-2xl hover:-translate-y-1 ${hoverFrom} ${hoverTo}`
                    : `bg-white text-gray-900 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br ${hoverFrom} ${hoverTo}`
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${highlighted ? "bg-white/20 group-hover:bg-white/30" : "bg-purple-100 group-hover:bg-white/20"}`}>
                  <i className={`bi ${icon} text-2xl transition-colors duration-300 ${highlighted ? "text-white" : "text-purple-600 group-hover:text-white"}`}></i>
                </div>
                <h3 className={`font-bold text-lg mb-3 transition-colors duration-300 ${highlighted ? "text-white" : "text-gray-900 group-hover:text-white"}`}>{title}</h3>
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${highlighted ? "text-purple-100" : "text-gray-500 group-hover:text-white/80"}`}>{body}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300">
                  <span className={`transition-colors duration-300 ${highlighted ? "text-white" : "text-purple-600 group-hover:text-white"}`}>Read More</span>
                  <i className={`bi bi-arrow-right transition-colors duration-300 ${highlighted ? "text-white" : "text-purple-600 group-hover:text-white"}`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MISSION (white) ────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-5">
              Hear what schools are saying about Management.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Gradia helps administrators navigate complex school operations and
              discover the right path to a thriving institution — customised to
              the needs of each of our partner schools.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-purple-200"
            >
              Join Gradia
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <i className="bi bi-arrow-right text-xs"></i>
              </span>
            </Link>
          </div>

          {/* Right — styled card */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-10 shadow-sm">
            <div className="flex gap-3 mb-6">
              <i className="bi bi-quote text-5xl text-purple-200 leading-none"></i>
              <p className="text-gray-900 font-bold text-lg leading-snug pt-2">
                How we can improve your School with our Platform.
              </p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Gradia understands the nuances necessary to navigate school
              administration and can help discover the right path to operational
              excellence and parent engagement.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "We want to understand your school.",
                "Positive outcomes for every student.",
                "Powerful School Administration (SMS).",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-purple-200">
                    <i className="bi bi-check text-white text-xs font-bold"></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                  MN
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-sm">Muneza</p>
                  <p className="text-purple-500 text-xs font-medium">Founder, Gradia</p>
                </div>
                <div className="ml-auto flex gap-2">
                  {["bi-linkedin", "bi-twitter-x"].map((icon) => (
                    <a key={icon} href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:border-purple-300 transition-all">
                      <i className={`bi ${icon} text-xs`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. VISION (lavender bg) ───────────────────── */}
      <section className="bg-[#F5F3FF] py-20 px-6 relative overflow-hidden">
        <i className="bi bi-diamond text-purple-200 text-4xl absolute bottom-8 right-12 rotate-12"></i>
        <i className="bi bi-diamond text-purple-100 text-2xl absolute bottom-14 right-20"></i>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left — image placeholder */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900 h-80 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20 bg-[url('/gradia-bg-photo.png')] bg-cover bg-center" />
            <div className="relative z-10 text-center px-8">
              <i className="bi bi-mortarboard-fill text-white text-6xl mb-4 block"></i>
              <p className="text-white font-bold text-xl">Empowering Schools</p>
              <p className="text-white/70 text-sm mt-2">Across Africa and beyond</p>
            </div>
          </div>

          {/* Right */}
          <div>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-5">
              Hear what schools are saying about the future of Management.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We envision a world where every school — regardless of size or
              budget — has access to enterprise-grade tools and every student
              gets the support they deserve.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "We want to understand your school.",
                "Positive outcomes for every student.",
                "Powerful School Administration (SMS).",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <i className="bi bi-check text-white text-xs"></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              Join Gradia
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <i className="bi bi-arrow-right text-xs"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
