import Link from "next/link";
import styles from "./page.module.css";

const QUICK_LINKS = [
  {
    href: "/programs",
    title: "Programs",
    description: "Mentorship, internships, and volunteer opportunities.",
  },
  {
    href: "/events",
    title: "Events",
    description: "Conferences and gatherings, past and upcoming.",
  },
  {
    href: "/updates",
    title: "Updates",
    description: "News and op-eds from the SLPA community.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Established 2018</p>
        <h1>Moving the next generation forward</h1>
        <p className={styles.subhead}>
          A space for Somaliland professionals to collaborate and exchange
          ideas.
        </p>
        <div className={styles.ctas}>
          <Link href="/get-involved" className={styles.primaryButton}>
            Get Involved
          </Link>
          <Link href="/donate" className={styles.secondaryButton}>
            Donate
          </Link>
        </div>
      </section>

      <section className={styles.quickLinks}>
        {QUICK_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={styles.card}>
            <h2>{link.title}</h2>
            <p>{link.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
