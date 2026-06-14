"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import WaitlistForm from "./WaitlistForm";

export default function EarlyAccessButton() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const modal = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-md rounded-4xl bg-white p-6 shadow-soft sm:p-8">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cloud text-navy transition hover:bg-land"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <h3 className="text-2xl font-extrabold tracking-tight text-navy">Get early access</h3>
        <p className="mt-2 text-sm text-navy/70">
          Be first on the map when we launch. Join the waitlist.
        </p>
        <div className="mt-5">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-deep"
      >
        Get early access
      </button>
      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
