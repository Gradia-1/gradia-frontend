"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "sw", label: "Kiswahili", flag: "🇹🇿" },
    { code: "rw", label: "Kinyarwanda", flag: "🇷🇼" },
  ];

  const [currentLang, setCurrentLang] = useState(languages[0]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/gradia-bg-photo.png"
            alt="Gradia logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-[#7C3AED]">
            Gradia
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-black">
          
          <li>
            <Link href="" className="hover:text-[#7C3AED] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#7C3AED] transition-colors">
              Packages
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#7C3AED] transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#7C3AED] transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-black hover:text-[#7C3AED] transition-colors cursor-pointer border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#7C3AED]"
            >
              <i className="bi bi-globe2 text-base"></i>
              <span>{currentLang.label}</span>
            </button>

            {langOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-lg shadow-lg border py-1 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-[#f6f1fd] transition-colors ${
                      currentLang.code === lang.code ? "text-[#7C3AED] font-bold" : "text-black"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/login"
            className="text-sm font-bold text-black hover:text-[#7C3AED] transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-sm font-bold text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
            
            <li>
              <Link href="" className="block hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="" className="block hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>
                Packages
              </Link>
            </li>
            <li>
              <Link href="" className="block hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="" className="block hover:text-[#7C3AED]" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-[#7C3AED]"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-bold text-center text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-5 py-2.5 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <div className="flex gap-3 mt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang);
                    setMenuOpen(false);
                  }}
                  className={`text-xl ${currentLang.code === lang.code ? "opacity-100" : "opacity-50"}`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
