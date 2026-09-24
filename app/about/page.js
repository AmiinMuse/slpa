import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

export const metadata = {
  title: "About | SLPA",
};

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">About SLPA</div>
          <h1>Who we are.</h1>
          <p className="lede">
            The Somaliland Professionals Association of America is a 501(c)(3)
            nonprofit, founded in 2018, that brings together Somaliland-American
            professionals across the country &mdash; to mentor, network, and
            advocate &mdash; and connects our diaspora with the professionals
            building Somaliland today.
          </p>
        </div>
      </section>

      <section id="mission" className="section-olive">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Mission &amp; Vision</div>
            <h2>Three ideas hold this organization together.</h2>
            <p>
              SLPA exists to close the distance &mdash; between
              Somaliland-Americans scattered across the country, and between our
              diaspora and the professionals building Somaliland today.
            </p>
          </Reveal>
          <Reveal className="pillars">
            <div className="pillar">
              <h3>What We Do</h3>
              <ul>
                <li>A U.S.-based association for Somaliland professionals.</li>
                <li>
                  Partnering with organizations to elevate issues facing our
                  community.
                </li>
                <li>
                  Linking Somaliland-American and Somaliland-based
                  professionals.
                </li>
                <li>
                  Using technology to connect forward-thinking
                  Somaliland-Americans.
                </li>
              </ul>
            </div>
            <div className="pillar">
              <h3>Goals &amp; Vision</h3>
              <ul>
                <li>Working with the Somaliland Mission in DC for our community.</li>
                <li>Hosting annual events that spark breakthrough ideas.</li>
                <li>Supporting self-sustaining projects inside Somaliland.</li>
                <li>
                  Promoting Somaliland&#39;s history and right to
                  self-determination.
                </li>
                <li>Displaying the distinct cultural heritage of Somaliland.</li>
              </ul>
            </div>
            <div className="pillar">
              <h3>Why Now?</h3>
              <ul>
                <li>Our community&#39;s efforts have long been disconnected.</li>
                <li>
                  Somaliland-Americans are spread thin across every region.
                </li>
                <li>
                  Few dedicated advocates are advancing Somaliland&#39;s vision.
                </li>
                <li>
                  Mentorship and career networks remain few and far between.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal className="success-note" style={{ marginTop: "36px" }}>
            <strong>Since 2018.</strong> For the full story &mdash; year by
            year, from the Zoom launch to today &mdash; see our{" "}
            <Link
              href="/news#updates"
              style={{ color: "var(--olive)", fontWeight: 600 }}
            >
              milestones on the News page
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <section id="team">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Our Team</div>
            <h2>The people behind SLPA.</h2>
            <p>
              SLPA is powered by a volunteer board and regional chapter leads
              across the country. Team profiles are coming soon.
            </p>
          </Reveal>
          <Reveal className="success-note">
            <strong>Are you a member who&rsquo;d like to help lead?</strong>{" "}
            We&rsquo;re always looking for volunteers and regional organizers.
            Reach out at{" "}
            <a
              href="mailto:myslpa.info@gmail.com"
              style={{ color: "var(--olive)", fontWeight: 600 }}
            >
              myslpa.info@gmail.com
            </a>
            .
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
