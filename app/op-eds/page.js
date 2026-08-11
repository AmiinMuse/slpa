import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

export const metadata = {
  title: "Op-Eds | SLPA",
};

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
            <div className="k">Quarterly Op-Ed &middot; Economy</div>
            <h3>Leveraging Somaliland&#39;s Blue Economy: The Fishery Industry</h3>
            <div className="byline">
              By Deqa Aden &mdash; Pearson Fellow and MPP candidate at the
              University of Chicago; formerly World Bank HQ and Hargeisa
              Innovation Hub
            </div>
            <p>
              Somaliland&#39;s 850&nbsp;km coastline holds one of the
              least-exploited fishing grounds in Africa, yet the blue economy
              contributes under 1% of GDP. This piece maps the opportunity
              &mdash; from cold-chain infrastructure and coastal-guard capacity
              to formalizing fishing enterprises and attracting investment
              &mdash; and lays out three concrete recommendations for unlocking
              the sector.
            </p>
            <a className="more" href="https://myslpa.org/op-eds">
              Read the full op-ed{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
          <Reveal className="article">
            <div className="k">Quarterly Op-Ed &middot; Energy</div>
            <h3>Somaliland&#39;s State of Energy</h3>
            <div className="byline">
              By Eng. Abdisamad Artan &mdash; Petroleum Engineer, Houston, TX
            </div>
            <p>
              Electricity in Somaliland is among the most expensive in the world
              &mdash; a crippling burden for households and small businesses
              despite the country&#39;s substantial wind, solar, oil, and gas
              resources. SLPA&#39;s first quarterly op-ed examines why, and
              argues that local and diaspora investment in self-sustaining
              energy projects is the path to affordable access and, in turn,
              credible international investment.
            </p>
            <a className="more" href="https://myslpa.org/op-eds">
              Read the full op-ed{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
          <Reveal className="article">
            <div className="k">Blog &middot; Community</div>
            <h3>Burco Academy Fundraiser</h3>
            <div className="byline">By Rahma Osman</div>
            <p>
              A look back at SLPA&#39;s Ramadan fundraiser in support of Burco
              Academy &mdash; part of our continuing tradition of annual giving
              campaigns for education in Somaliland.
            </p>
            <a className="more" href="https://myslpa.org/op-eds">
              Read the blog{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
          <Reveal className="success-note">
            <strong>Are you a subject-matter expert?</strong> SLPA op-eds are
            written by members and published across Somaliland journals. If
            you&#39;d like to contribute analysis in your field, reach out at{" "}
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
