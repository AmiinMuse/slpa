import Link from "next/link";
import Reveal from "../../components/Reveal";
import JoinBand from "../../components/JoinBand";

export const metadata = {
  title: "2019 Somali Development Conference | SLPA",
};

export default function MaristConference() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">
            Conference Recap &middot; Poughkeepsie, NY &middot; June 8&ndash;9,
            2019
          </div>
          <h1>Somali Development Conference at Marist College</h1>
          <p className="lede">
            Months after SLPA&rsquo;s launch, roughly 30 members traveled from
            across the country for the &ldquo;Somali Education and Development
            Conference&rdquo; at Marist College &mdash; a reenergizing two days
            that renewed the sense of possibility for the region and our
            contributions to it.
          </p>
          <div className="btn-row">
            <Link href="/conference#past" className="btn btn-outline-light">
              All past conferences
            </Link>
          </div>
          <div className="conf-meta">
            <div>
              <strong>Date</strong>June 8&ndash;9, 2019
            </div>
            <div>
              <strong>Venue</strong>Marist College &mdash; Poughkeepsie, NY
            </div>
            <div>
              <strong>SLPA delegation</strong>~30 members nationwide
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Recap</div>
            <h2>Our founding year, on a national stage.</h2>
            <p>
              The conference attracted attendees from Harvard University,
              Columbia University, and Macalester College, and organizations
              including the International Finance Corporation, the American
              Enterprise Institute, and Morgan Stanley. Among the honored
              guests were activist Edna Adan, founder of the Edna Adan
              Maternity Hospital in Somaliland, and Bashir Goth, Somaliland
              Ambassador to the United States.
            </p>
            <p>
              SLPA members traveled in from the Bay Area, Seattle, Florida,
              Texas, Ohio, Minnesota, and D.C. &mdash; and it was the first
              time the founding committee met in person since the March
              launch. The weekend sparked the coffee meet-ups, panels, and
              annual conferences that followed.
            </p>
          </Reveal>
          <Reveal className="mentor-grid">
            <div>
              <h3 style={{ fontSize: "19px", marginBottom: "16px" }}>
                SLPA members spoke on five panels
              </h3>
              <ul className="past-panels">
                <li>Public health in Somaliland</li>
                <li>The contributing role of the diaspora</li>
                <li>
                  Building a robust financial sector in Somaliland
                </li>
                <li>IT solutions in technological advancement</li>
                <li>
                  The ongoing battle against female genital mutilation in
                  Somaliland
                </li>
              </ul>
              <div className="success-note">
                <strong>From the recap:</strong> members described the event as
                reenergizing &mdash; renewing the sense of possibility for the
                region and our contributions &mdash;{" "}
                <a
                  href="https://myslpa.org/development-conference19"
                  style={{ color: "var(--olive)", fontWeight: 600 }}
                >
                  read the original recap
                </a>
                .
              </div>
            </div>
            <figure className="photo-frame" style={{ margin: 0 }}>
              <img
                src="/past-conferences/marist-2019.jpg"
                alt="SLPA members and attendees at Marist College in 2019"
                loading="lazy"
              />
              <figcaption>
                SLPA members among the attendees at Marist College &mdash;
                June 2019.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
