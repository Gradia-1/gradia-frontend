import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import NotFoundBackground from "./components/not-found-background";

export const metadata: Metadata = {
  title: "Page not found | Gradia",
  description:
    "Sorry, we couldn't find the page you're looking for.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-white min-h-[calc(100vh-4rem)] flex items-center pt-24 md:pt-28 pb-20 md:pb-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,#EAF6EF_0%,#ffffff_55%,#ffffff_100%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-4 sm:px-6 md:px-10">
            <p className="sr-only">404 — Page not found</p>

            <div
              className="pointer-events-none absolute left-1/2 top-[44%] h-[min(100vw,600px)] w-[min(100vw,600px)] -translate-x-1/2 -translate-y-1/2 sm:h-[min(85vw,680px)] sm:w-[min(85vw,680px)]"
              aria-hidden
            >
              <NotFoundBackground />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className="flex items-center justify-center gap-[0.04em] sm:gap-[0.06em] text-[clamp(4rem,18vw,11rem)] font-extrabold leading-none tracking-[-0.04em] text-[#1A1A1A]"
                aria-hidden
              >
                <span className="select-none">4</span>
                <span className="relative inline-flex h-[0.78em] w-[0.78em] shrink-0 items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={320}
                    height={320}
                    className="h-full w-full object-contain drop-shadow-sm"
                    priority
                  />
                </span>
                <span className="select-none">4</span>
              </div>

              <h1 className="mt-12 text-2xl font-bold tracking-tight text-[#1A1A1A] sm:mt-14 sm:text-3xl md:text-4xl">
                Page Not Found
              </h1>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full bg-[#1F7A4D] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#16553A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A4D]"
                >
                  <i className="bi bi-house-door" aria-hidden />
                  Back To Home
                </Link>
                <Link
                  href="/root/contact"
                  className="inline-flex min-w-[180px] items-center justify-center gap-2 rounded-full border border-[#DDE7E0] bg-white px-6 py-3 text-sm font-bold text-[#1A1A1A] transition-colors hover:border-[#1F7A4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A4D]"
                >
                  <i className="bi bi-chat-dots text-[#1F7A4D]" aria-hidden />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
