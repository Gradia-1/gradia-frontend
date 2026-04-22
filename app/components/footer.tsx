import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const productLinks = [
    { label: "About", href: "/root/about" },
    { label: "Packages", href: "" },
    { label: "Pricing", href: "" },
    { label: "Contact", href: "/root/contact" },
  ];

  const forSchoolsLinks = [
    { label: "Head Teachers", href: "" },
    { label: "Teachers", href: "" },
    { label: "Parents", href: "" },
    { label: "Students", href: "" },
  ];

  const resourceLinks = [
    { label: "Help Center", href: "" },
    { label: "Documentation", href: "" },
    { label: "Support", href: "" },
    { label: "Status", href: "" },
  ];

  const legalLinks = [
    { label: "Privacy", href: "/root/privacy" },
    { label: "Terms", href: "" },
    { label: "Cookies", href: "" },
  ];

  const socials = [
    { icon: "bi-twitter-x", href: "", label: "X" },
    { icon: "bi-linkedin", href: "", label: "LinkedIn" },
    { icon: "bi-facebook", href: "", label: "Facebook" },
    { icon: "bi-instagram", href: "", label: "Instagram" },
  ];

  return (
    <footer className="bg-white border-t border-[#DDE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Gradia logo" width={40} height={40} />
              <span className="text-xl font-bold text-[#1A1A1A]">Gradia</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs leading-relaxed">
              The professional school platform that unifies student records,
              academics, finance, and communication in one place.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#DDE7E0] flex items-center justify-center text-gray-600 hover:text-[#1F7A4D] hover:border-[#1F7A4D] transition-colors"
                >
                  <i className={`bi ${s.icon}`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-[#1A1A1A]">Product</h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#1F7A4D]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-[#1A1A1A]">For Schools</h4>
            <ul className="mt-4 space-y-3">
              {forSchoolsLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#1F7A4D]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-[#1A1A1A]">Resources</h4>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#1F7A4D]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold text-[#1A1A1A]">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#1F7A4D]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: copyright | newsletter | tagline */}
        <div className="mt-10 pt-6 border-t border-[#DDE7E0] grid gap-4 md:grid-cols-3 items-center">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Gradia. All rights reserved.
          </p>

          <form className="flex w-full max-w-sm mx-auto items-center gap-2 bg-white border border-[#DDE7E0] rounded-full p-1 pl-3 sm:pl-4 focus-within:border-[#1F7A4D]">
            <i className="bi bi-envelope text-gray-400 text-sm"></i>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-transparent text-xs text-[#1A1A1A] placeholder:text-gray-400 outline-none py-1.5"
            />
            <button
              type="submit"
              className="text-xs font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] px-4 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-500 flex items-center gap-1.5 justify-center md:justify-end">
            Built for schools that care
            <i className="bi bi-heart-fill text-[#1F7A4D]"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
