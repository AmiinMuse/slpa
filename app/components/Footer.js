import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>&copy; {year} Somaliland Professionals Association of America</p>
        <div className={styles.links}>
          <Link href="/about">About</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/donate">Donate</Link>
        </div>
      </div>
    </footer>
  );
}
