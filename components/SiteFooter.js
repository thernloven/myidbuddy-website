import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-cloud">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <Link href="/" aria-label="myIDBuddy home">
          <Image src="/logo.png" alt="myIDBuddy" width={821} height={255} className="h-9 w-auto" />
        </Link>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="/privacy" className="transition hover:text-navy">Privacy</Link>
          <Link href="/terms" className="transition hover:text-navy">Terms</Link>
          <a href="mailto:hello@myidbuddy.com" className="transition hover:text-navy">Contact</a>
        </div>
        <p className="text-sm text-muted">© {new Date().getFullYear()} myIDBuddy</p>
      </div>
    </footer>
  );
}
