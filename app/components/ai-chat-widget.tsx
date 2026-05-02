"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi I'm your Gradia assistant. Ask about the platform, pricing, or getting started.",
};

const PLACEHOLDER_REPLY = "Thanks for your message.";

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function AiChatWidget() {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, open, scrollToBottom]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 200);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (widgetRef.current && !widgetRef.current.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  const send = useCallback(() => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = { id: makeId(), role: "user", content: text };
    setInput("");
    setMessages((m) => [...m, userMsg]);
    setIsTyping(true);

    // TODO: replace timeout with real AI API call; stream tokens into assistant message.
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: makeId(), role: "assistant", content: PLACEHOLDER_REPLY },
      ]);
      setIsTyping(false);
    }, 900);
  }, [input, isTyping]);

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 z-[100] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Gradia AI assistant chat"
          className="flex h-[min(100dvh-6.5rem,560px)] w-[min(100vw-1rem,400px)] max-w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-xl border border-[#DDE7E0] bg-white shadow-[0_24px_64px_-12px_rgba(15,61,39,0.25)] sm:rounded-2xl"
        >
          <header className="flex shrink-0 items-center gap-3 border-b border-[#DDE7E0] bg-[#EAF6EF] px-4 py-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#1F7A4D]/25 bg-white">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-[#1A1A1A]">Gradia Assistant</p>
              <p className="text-xs text-gray-600">Ask us anything about Gradia.</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#1A1A1A] transition-colors hover:bg-white/80"
              aria-label="Close chat"
            >
              <i className="bi bi-x-lg text-lg" aria-hidden />
            </button>
          </header>

          <div
            ref={listRef}
            className="relative min-h-0 flex-1 space-y-3 overflow-y-auto bg-white px-4 py-4"
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={300}
                height={300}
                className="h-80 w-80 select-none object-contain opacity-[0.18] blur-[1px] saturate-75"
                aria-hidden
              />
            </div>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`relative z-[1] flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-md bg-[#1F7A4D] text-white"
                      : "rounded-bl-md border border-[#DDE7E0] bg-[#F8FAF9] text-[#1A1A1A]"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="relative z-[1] flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-[#DDE7E0] bg-[#F8FAF9] px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#1F7A4D] [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#1F7A4D] [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#1F7A4D]" />
                </div>
              </div>
            )}
          </div>

          <div className="shrink-0 border-t border-[#DDE7E0] bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <div className="flex items-center gap-2 rounded-full border border-[#DDE7E0] bg-white py-1 pl-3 pr-1 shadow-sm focus-within:border-[#1F7A4D]">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Ask anything…"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#1A1A1A] placeholder:text-gray-400 outline-none"
                autoComplete="off"
                aria-label="Message"
              />
              <button
                type="button"
                onClick={send}
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F7A4D] text-white transition-colors hover:bg-[#16553A] disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <i className="bi bi-send-fill text-sm translate-x-px" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#1F7A4D] text-white shadow-[0_12px_32px_-8px_rgba(31,122,77,0.55)] transition-transform hover:bg-[#16553A] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F7A4D] active:scale-95"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Close assistant" : "Open Gradia assistant"}
      >
        {open ? (
          <i className="bi bi-chevron-down text-xl" aria-hidden />
        ) : (
          <i className="bi bi-chat-dots-fill text-xl" aria-hidden />
        )}
      </button>
    </div>
  );
}
