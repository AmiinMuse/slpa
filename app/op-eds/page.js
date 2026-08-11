import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

export const metadata = {
  title: "Op-Eds, Podcasts & Blogs | SLPA",
};

const MoreArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function OpEds() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Op-Eds, Podcasts &amp; Blogs</div>
          <h1>Professional analysis, aimed at real change.</h1>
          <p className="lede">
            Quarterly analytical op-eds written by SLPA members who are
            subject-matter experts in their fields &mdash; published across
            Somaliland journals to reach the stakeholders who can cultivate
            change.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="article">
            <div className="k">Q1 Quarterly Analytical Op-Ed &middot; Economy</div>
            <h3>
              Leveraging Somaliland&rsquo;s Blue Economy &mdash; Fishery Industry
            </h3>
            <div className="byline">by Deqa Aden</div>
            <p>
              The blue economy is one of the least exploited sectors in
              Somaliland contributing 0.3% to GDP despite the fact that the Horn
              of Africa has the largest coast in mainland Africa. This piece maps
              the opportunity &mdash; from cold-chain infrastructure and
              coastal-guard capacity to formalizing fishing enterprises and
              attracting investment &mdash; with three concrete recommendations
              for unlocking the sector.
            </p>
            <Link className="more" href="/op-eds/blue-economy">
              Read the full op-ed <MoreArrow />
            </Link>
          </Reveal>

          <Reveal className="article">
            <div className="k">
              SLPA&rsquo;s First Quarterly Analytical Op-Ed &middot; Energy
            </div>
            <h3>Somaliland&rsquo;s State of Energy</h3>
            <div className="byline">by Engineer Abdisamad Artan</div>
            <p>
              Electricity in Somaliland is among the most expensive in the world
              &mdash; a crippling burden for households and small businesses
              despite the country&rsquo;s substantial wind, solar, oil, and gas
              resources. The op-ed examines why, and argues that local and
              diaspora investment in self-sustaining energy projects is the path
              to affordable access and credible international investment.
            </p>
            <Link className="more" href="/op-eds/state-of-energy">
              Read the full op-ed <MoreArrow />
            </Link>
          </Reveal>

          <Reveal className="article">
            <div className="k">Blog &middot; Community</div>
            <h3>It&rsquo;s the last 10 days of Ramadan!</h3>
            <div className="byline">by Rahma Osman &middot; May 24, 2019</div>
            <p>
              A Ramadan STEM Education Fundraiser in partnership with Burco
              Academy &mdash; a Somali-American diaspora grassroots effort and
              independent 501(c)(3) boarding school in Somaliland focused on
              Science, Technology, Engineering and Math.
            </p>
            <Link className="more" href="/op-eds/burco-academy-fundraiser">
              Read the blog <MoreArrow />
            </Link>
          </Reveal>

          <Reveal className="success-note">
            <strong>Are you a subject-matter expert?</strong> SLPA op-eds are
            written by members and published across Somaliland journals. If
            you&rsquo;d like to contribute analysis in your field, reach out at{" "}
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
