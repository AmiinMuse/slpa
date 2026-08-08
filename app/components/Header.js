import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/programs", label: "Programs" },
  { href: "/updates", label: "Updates" },
  { href: "/get-involved", label: "Get Involved" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          SLPA
        </Link>
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/donate" className={styles.donateButton}>
          Donate
        </Link>
      </div>
    </header>
  );
}
