import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

export const metadata = {
  title: "News | SLPA",
};

const MoreArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function News() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">News</div>
          <h1>Voices and milestones.</h1>
          <p className="lede">
            Analysis from SLPA members published across Somaliland journals,
            and a year-by-year record of what this community has built together.
          </p>
        </div>
      </section>

      <section className="section-sand">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Op-Eds, Podcasts &amp; Blogs</div>
            <h2>Professional analysis, aimed at real change.</h2>
            <p>
              Quarterly analytical op-eds written by SLPA members who are
              subject-matter experts in their fields &mdash; published across
              Somaliland journals to reach the stakeholders who can cultivate
              change.
            </p>
          </Reveal>

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
            <img
              src="/op-eds/burco-thumb.jpg"
              alt="Burao Academy students holding science textbooks"
              className="article-thumb"
              loading="lazy"
            />
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

      <section id="updates" className="section-olive">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">SLPA Updates</div>
            <h2>Accomplishments, year by year.</h2>
            <p>
              From a Zoom launch in 2019 to one of the most successful
              Somaliland conferences in U.S. history &mdash; a record of what
              this community has built together.
            </p>
          </Reveal>
          <Reveal className="mentor-grid" style={{ marginBottom: "56px" }}>
            <figure className="photo-frame" style={{ margin: 0 }}>
              <img
                src="https://img1.wsimg.com/isteam/ip/4e720571-a0ff-4e0e-8042-fbca20cd5a15/2f739b56-e10e-4524-a2c7-07d0379d17b6.jpeg/:/rs=w:700,cg:true"
                alt="SLPA 2024 accomplishments"
                loading="lazy"
              />
              <figcaption>
                2024 accomplishments &mdash; look what we did together!
              </figcaption>
            </figure>
            <figure className="photo-frame" style={{ margin: 0 }}>
              <img
                src="https://img1.wsimg.com/isteam/ip/4e720571-a0ff-4e0e-8042-fbca20cd5a15/a953a791-c1dd-451d-a59d-c7cc18c6bef8.jpeg/:/rs=w:700,cg:true"
                alt="SLPA 2025 goals"
                loading="lazy"
              />
              <figcaption>
                2025 goals &mdash; let&#39;s make this our best year yet!
              </figcaption>
            </figure>
          </Reveal>
          <Reveal className="timeline">
            <div className="tl-row">
              <div>
                <div className="yr">2026</div>
              </div>
              <div>
                <h4>The Regional Series Goes South</h4>
                <ul>
                  <li>
                    Seventh stop on the regional series: the Dallas Regional
                    Forum drew 140+ attendees from Texas, Oklahoma, and
                    Louisiana &mdash; one of the largest regional gatherings
                    yet.
                  </li>
                  <li>
                    7th Annual Ramadan Fundraiser supported the Ainabo
                    International Hospital in Sool &mdash; surpassing its goal
                    and officially reaching all six regions of Somaliland.
                  </li>
                </ul>
              </div>
              <span className="tag live">Ongoing</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2025</div>
              </div>
              <div>
                <h4>Regional Series &amp; 6th Ramadan Fundraiser</h4>
                <ul>
                  <li>
                    Regional event series carried the ATL momentum to NYC and
                    Greater Columbus, where 75+ members gathered for community
                    building and mentorship.
                  </li>
                  <li>
                    6th Annual Ramadan Fundraiser focused on the Sanaag region
                    &mdash; partnering with the Osman Bin Affan Orphanage in
                    Erigabo and the Hope &amp; Legacy School Project.
                  </li>
                </ul>
              </div>
              <span className="tag">Past year</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2024</div>
              </div>
              <div>
                <h4>A Year of Growth and Impact</h4>
                <ul>
                  <li>Membership expanded to 650+ members across 42 states.</li>
                  <li>
                    Hosted &quot;Empowering Tomorrow: Somaliland Professionals
                    in Unity&quot; in Atlanta &mdash; one of the most successful
                    Somaliland conferences in U.S. history.
                  </li>
                  <li>
                    Published an in-depth memo of the 2024 Somaliland
                    Professionals in Unity Summit.
                  </li>
                </ul>
              </div>
              <span className="tag">Recap available</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2022</div>
              </div>
              <div>
                <h4>Relief and a National Stage</h4>
                <ul>
                  <li>
                    Raised $130,000 in 30 days for families affected by the
                    Waheen Market fire in Hargeisa.
                  </li>
                  <li>
                    Hosted the Somaliland-American Conference in Washington,
                    D.C. with the Somaliland Mission &mdash; 300+ attendees and
                    a keynote by Foreign Minister Dr. Essa Kayd.
                  </li>
                </ul>
              </div>
              <span className="tag">Past year</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2021</div>
              </div>
              <div>
                <h4>Programs Take Root</h4>
                <ul>
                  <li>
                    Officially launched the Mentorship Program, with 40 members
                    involved in its first year.
                  </li>
                  <li>
                    Kickstarted an advocacy campaign: 280 members in 18 key
                    states engaged Congress on Somaliland&#39;s right to
                    self-determination.
                  </li>
                  <li>
                    Signed an MOU with Gollis University to host
                    career-development seminars for universities across
                    Somaliland&#39;s six regions.
                  </li>
                  <li>
                    Hosted the #SomalilandAt30 conference and a roundtable in
                    Hargeisa.
                  </li>
                </ul>
              </div>
              <span className="tag">Past year</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2020</div>
              </div>
              <div>
                <h4>Nonprofit Status and National Reach</h4>
                <ul>
                  <li>
                    Co-fundraised $100K for COVID-19 relief in Somaliland
                    alongside SAHA and Amoud Foundation.
                  </li>
                  <li>
                    Officially became a 501(c)(3) nonprofit &mdash; able to
                    accept donations and apply for grants.
                  </li>
                  <li>
                    Grew membership to reach 31 states, covering every region of
                    the U.S.
                  </li>
                  <li>
                    Kickstarted the Quarterly Analytical Op-Eds and the
                    Mentorship Program pilot.
                  </li>
                </ul>
              </div>
              <span className="tag">Past year</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2019</div>
              </div>
              <div>
                <h4>Launch Year</h4>
                <ul>
                  <li>Held the SLPA Launch Conference via Zoom in April 2019.</li>
                  <li>
                    Registered 300 professional members across diverse
                    industries in all regions of the U.S.
                  </li>
                  <li>
                    Coffee meet-ups in Washington DC, Columbus, Minneapolis, San
                    Francisco, and Seattle.
                  </li>
                  <li>
                    Ramadan fundraiser for Burco Academy; partnerships across
                    the U.S., Canada, Europe, and Somaliland.
                  </li>
                </ul>
              </div>
              <span className="tag">Past year</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2018</div>
              </div>
              <div>
                <h4>The Founding</h4>
                <ul>
                  <li>
                    SLPA established; committee met with newly appointed
                    Somaliland Ambassador Bashir Goth at the Somaliland Mission
                    in DC.
                  </li>
                  <li>
                    Hosted the DC community event with Foreign Minister Hon.
                    Yasin Hagi Mohamud Hir (Faratoon).
                  </li>
                </ul>
              </div>
              <span className="tag">Founding</span>
            </div>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
