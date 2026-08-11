"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/conference", label: "Conference" },
  { href: "/programs", label: "Programs" },
  { href: "/op-eds", label: "Op-Eds" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav-row">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="SLPA logo" className="logo-mark" />
          <div className="brand-text">
            Somaliland Professionals
            <br />
            <small>Association of America &middot; Est. 2018</small>
          </div>
        </Link>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <nav className={open ? "mobile-open" : undefined}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://forms.gle/je2pJbUCcXUVd5FQA" className="nav-cta">
                Become a Member
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
