import Link from "next/link";
import Reveal from "./components/Reveal";
import JoinBand from "./components/JoinBand";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                A Space to Collaborate &amp; Exchange Ideas
              </div>
              <h1>
                Moving the <em>next generation</em> forward.
              </h1>
              <p className="lede">
                SLPA brings together Somaliland-American professionals across
                the country &mdash; to mentor, network, and advocate &mdash;
                and connects our diaspora with the professionals building
                Somaliland today.
              </p>
              <div className="btn-row">
                <a
                  href="https://forms.gle/je2pJbUCcXUVd5FQA"
                  className="btn btn-primary"
                >
                  Become a member
                </a>
                <Link href="/conference" className="btn btn-ghost">
                  Explore the annual conference
                </Link>
              </div>
            </div>
            <div className="hero-media">
              <figure className="photo-frame hero-photo">
                <img
                  src="/gallery-2024-atl/atl-107.jpg"
                  alt="SLPA members raising the Somaliland flag together at the 2024 conference"
                  fetchPriority="high"
                />
              </figure>
              <div className="hero-tag">
                <span className="k">Atlanta &middot; May 2024</span>
                <span className="t">Empowering Tomorrow</span>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="n">650+</div>
              <div className="l">
                Professional members across diverse industries
              </div>
            </div>
            <div className="stat">
              <div className="n">42</div>
              <div className="l">
                States represented &mdash; every region of the U.S.
              </div>
            </div>
            <div className="stat">
              <div className="n">$230K+</div>
              <div className="l">Raised for relief efforts in Somaliland</div>
            </div>
            <div className="stat">
              <div className="n">2018</div>
              <div className="l">Founded; 501(c)(3) nonprofit since 2020</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Who We Are</div>
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
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Annual Conference &middot; Atlanta 2024</div>
            <h2>Empowering Tomorrow: Somaliland Professionals in Unity</h2>
            <p>
              Three days of cultural celebration, professional development, and
              networking &mdash; one of the most successful Somaliland
              conferences held in the U.S.
            </p>
          </Reveal>
          <Reveal className="conf-days">
            <div className="conf-day">
              <div className="d">Day One</div>
              <h3>Cultural Mixer</h3>
              <p>
                An evening of music, dance, and cultural exchange in your finest
                cultural attire.
              </p>
            </div>
            <div className="conf-day">
              <div className="d">Day Two</div>
              <h3>Conference &amp; Black Tie Gala</h3>
              <p>
                Panels and workshops by day; an elegant gala with dinner and
                live entertainment by night.
              </p>
            </div>
            <div className="conf-day">
              <div className="d">Day Three</div>
              <h3>BBQ &amp; Networking</h3>
              <p>
                A relaxed close &mdash; great food, new friends, and space to
                reflect.
              </p>
            </div>
          </Reveal>
          <Reveal className="photo-mosaic">
            <figure className="m-a">
              <img
                src="/gallery-2024-atl/atl-084.jpg"
                alt="A member celebrating with the Somaliland flag at the gala"
                loading="lazy"
              />
              <figcaption>One weekend a year, the whole diaspora is in one room.</figcaption>
            </figure>
            <figure className="m-b">
              <img
                src="/gallery-2024-atl/atl-160.jpg"
                alt="Friends together at the closing BBQ in the park"
                loading="lazy"
              />
            </figure>
            <figure className="m-c">
              <img
                src="/gallery-2024-atl/atl-016.jpg"
                alt="Guests at the SLPA photo backdrop in cultural attire"
                loading="lazy"
              />
            </figure>
            <figure className="m-d">
              <img
                src="/gallery-2024-atl/atl-005.jpg"
                alt="Professionals networking at the conference"
                loading="lazy"
              />
            </figure>
            <figure className="m-e">
              <img
                src="/gallery-2024-atl/atl-066.jpg"
                alt="Attendees dancing and waving flags at the cultural mixer"
                loading="lazy"
              />
            </figure>
            <figure className="m-f">
              <img
                src="/gallery-2024-atl/atl-129.jpg"
                alt="Members catching up over food at the outdoor BBQ"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal className="btn-row" style={{ marginTop: "36px" }}>
            <Link href="/conference" className="btn btn-light">
              Full conference details
            </Link>
            <Link
              href="/conference/2024-atlanta"
              className="btn btn-outline-light"
            >
              Recap &amp; gallery
            </Link>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Our Impact</div>
            <h2>What this community has done together.</h2>
            <p>
              When SLPA members mobilize, things happen &mdash; from emergency
              relief to advocacy in Washington.
            </p>
          </Reveal>
          <Reveal className="impact-grid">
            <div className="impact-card">
              <div className="n">$130,000</div>
              <h3>Waheen Market Fire Relief</h3>
              <p>
                When fire devastated Hargeisa&#39;s Waheen Market on the eve of
                Ramadan 2022, our community mobilized &mdash; raising $130,000
                in just 30 days for families in Somaliland.
              </p>
            </div>
            <div className="impact-card">
              <div className="n">$100,000</div>
              <h3>COVID-19 Relief</h3>
              <p>
                Co-fundraised alongside the Somaliland-American Health
                Association (SAHA) and Amoud Foundation to support pandemic
                relief efforts across Somaliland in 2020.
              </p>
            </div>
            <div className="impact-card">
              <div className="n">280</div>
              <h3>Advocacy Campaign</h3>
              <p>
                SLPA members in 18 key states engaged their members of Congress
                on foreign-relations committees &mdash; advocating for
                Somaliland&#39;s right to self-determination.
              </p>
            </div>
            <div className="impact-card">
              <div className="n">6th</div>
              <h3>Annual Ramadan Fundraiser</h3>
              <p>
                Our latest fundraiser focused on the Sanaag region &mdash;
                partnering with the Osman Bin Affan Orphanage in Erigabo and the
                Hope &amp; Legacy School Project to pair immediate meals with
                lasting educational impact.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Program Spotlight</div>
            <h2>Reach one, teach one.</h2>
          </Reveal>
          <Reveal className="mentor-grid">
            <div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(35,38,31,0.7)",
                  margin: "0 0 24px",
                }}
              >
                The SLPA Mentorship Program connects undergraduate students and
                early-career professionals with mentors from our network &mdash;
                spanning industries, backgrounds, and every region of the U.S.
                Mentees have seen stronger academic performance, clearer career
                planning, and internships at Fortune 500 companies that led to
                full-time roles.
              </p>
              <div className="btn-row">
                <Link href="/programs" className="btn btn-primary">
                  Explore the program
                </Link>
                <a
                  href="https://www.surveymonkey.com/r/C65NVND"
                  className="btn btn-ghost"
                >
                  Sign up now
                </a>
              </div>
            </div>
            <figure className="photo-frame" style={{ margin: 0 }}>
              <img
                src="https://img1.wsimg.com/isteam/ip/4e720571-a0ff-4e0e-8042-fbca20cd5a15/image0%20(7).jpeg/:/rs=w:900,cg:true"
                alt="SLPA mentorship program"
                loading="lazy"
              />
              <figcaption>
                SLPA Mentorship Program &mdash; pairing students with
                professionals since 2021.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <JoinBand />

      <section>
        <div className="wrap">
          <Reveal className="donate-box">
            <div>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>
                Support SLPA
              </div>
              <h2>
                Help fund the next conference &mdash; and the next generation.
              </h2>
              <p>
                Your contribution supports our annual conference, mentorship
                program, relief fundraisers, and the community initiatives that
                connect Somaliland-Americans nationwide. SLPA is a 501(c)(3)
                organization &mdash; donations are tax-deductible to the full
                extent allowable under IRS regulations.
              </p>
            </div>
            <div className="donate-panel">
              <img
                src="/logo-mark-light.png"
                alt=""
                className="donate-mark"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
              <h3>Every gift moves us forward.</h3>
              <p className="small">
                Donate securely by card or PayPal. Proceeds go directly toward
                SLPA programs and events.
              </p>
              <a href="https://myslpa.org/donate" className="btn btn-light">
                Donate Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
