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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#DDE7E0]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Gradia logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">
            Gradia
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold text-[#1A1A1A]">

          <li>
            <Link href="" className="hover:text-[#1F7A4D] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#1F7A4D] transition-colors">
              Packages
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#1F7A4D] transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-[#1F7A4D] transition-colors">
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
              className="flex items-center gap-1.5 text-sm font-medium text-[#1A1A1A] hover:text-[#1F7A4D] transition-colors cursor-pointer bg-white border border-[#DDE7E0] rounded-full px-3 py-1.5 hover:border-[#1F7A4D]"
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
                      currentLang.code === lang.code ? "text-[#1F7A4D] font-bold" : "text-[#1A1A1A]"
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
            className="text-sm font-bold text-[#1A1A1A] hover:text-[#1F7A4D] transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-sm font-bold text-white bg-[#1F7A4D] hover:bg-[#16553A] px-6 py-2.5 rounded-full transition-all"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#1A1A1A]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#DDE7E0] px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700">

            <li>
              <Link href="" className="block hover:text-[#1F7A4D]" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="" className="block hover:text-[#1F7A4D]" onClick={() => setMenuOpen(false)}>
                Packages
              </Link>
            </li>
            <li>
              <Link href="" className="block hover:text-[#1F7A4D]" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="" className="block hover:text-[#1F7A4D]" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-[#1F7A4D]"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-bold text-center text-white bg-[#1F7A4D] hover:bg-[#16553A] px-5 py-2.5 rounded-full transition-colors"
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
