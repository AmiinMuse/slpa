import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";
import ConferenceSlideshow from "../components/ConferenceSlideshow";

export const metadata = {
  title: "Conferences & Events | SLPA",
};

export default function Conference() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">Conferences &amp; Events</div>
          <h1>
            Where the <em>whole network</em> meets.
          </h1>
          <p className="lede">
            The annual conference is SLPA&rsquo;s flagship &mdash; days of
            cultural celebration, professional development, and networking.
            Between editions, regional events carry that energy from city to
            city. The latest edition: &ldquo;Empowering Tomorrow: Somaliland
            Professionals in Unity,&rdquo; Atlanta, May 2024.
          </p>
          <div className="btn-row">
            <Link href="/conference/2024-atlanta" className="btn btn-light">
              2024 recap &amp; gallery
            </Link>
            <Link
              href="/conference/2024-atlanta/program"
              className="btn btn-outline-light"
            >
              2024 program &amp; speakers
            </Link>
            <a href="#past" className="btn btn-outline-light">
              Past conferences
            </a>
          </div>
          <ConferenceSlideshow />
        </div>
      </section>

      <section className="section-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Why Attend</div>
            <h2>Four reasons to be in the room.</h2>
          </Reveal>
          <Reveal className="impact-grid">
            <div className="impact-card">
              <h3>Networking</h3>
              <p>
                Connect with like-minded peers, mentors, and industry leaders in
                an environment designed to foster meaningful relationships.
              </p>
            </div>
            <div className="impact-card">
              <h3>Professional Development</h3>
              <p>
                Gain insights from top professionals and leaders that can propel
                your career forward.
              </p>
            </div>
            <div className="impact-card">
              <h3>Cultural Celebration</h3>
              <p>
                Embrace the richness of Somali culture through attire, food, and
                music &mdash; celebrating our heritage and unity.
              </p>
            </div>
            <div className="impact-card">
              <h3>Inspiration</h3>
              <p>
                Leave inspired by the stories, achievements, and possibilities
                that emerge when professionals unite with purpose.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="regional" className="section-olive">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Regional Events</div>
            <h2>Between conferences, SLPA comes to your city.</h2>
            <p>
              Since the Atlanta conference, a traveling series of regional
              forums has carried the momentum across the country &mdash; a day
              of keynotes, roundtables, mentorship, and networking, hosted by
              local SLPA chapters.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Latest Stop &middot; April 18, 2026</div>
            <h3>Dallas Regional Forum</h3>
            <div className="byline">
              Embassy Suites, Dallas, TX &middot; 140+ attendees from Texas,
              Oklahoma &amp; Louisiana
            </div>
            <p>
              The seventh stop on the regional series &mdash; and one of the
              largest yet. Mohamoud Egal, founder of Amoud Foundation, opened
              with a keynote on unity and education; petroleum engineer
              Abdisamad Artan traced Somaliland&rsquo;s oil and gas journey
              from the 1960s to today. Roundtables tackled regional
              engagement, mentorship, and how diaspora professionals can
              contribute to Somaliland&rsquo;s development, alongside a career
              panel spanning AI, engineering, technology, and medicine.
            </p>
            <a
              className="more"
              href="https://www.instagram.com/myslpa_/p/DYaVmKMFQlj/"
            >
              See the recap on Instagram{" "}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
          <Reveal>
            <div className="city-tags">
              <span>New York City</span>
              <span>Greater Columbus</span>
              <span>Boston</span>
              <span>Minnesota</span>
              <span>Seattle</span>
              <span>Dallas</span>
            </div>
            <div className="success-note" style={{ marginTop: "24px" }}>
              <strong>Want the next stop in your city?</strong> Follow{" "}
              <a
                href="https://www.instagram.com/myslpa_/"
                style={{ color: "var(--olive)", fontWeight: 600 }}
              >
                @myslpa_
              </a>{" "}
              for announcements, or reach out at{" "}
              <a
                href="mailto:myslpa.info@gmail.com"
                style={{ color: "var(--olive)", fontWeight: 600 }}
              >
                myslpa.info@gmail.com
              </a>{" "}
              to help organize one.
            </div>
          </Reveal>
        </div>
      </section>

      <section id="past" className="section-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Past Conferences</div>
            <h2>Building momentum, year after year.</h2>
          </Reveal>
          <Reveal className="past-conf">
            <div>
              <div className="eyebrow">2022 &middot; Washington, D.C.</div>
              <h3>Somaliland-American Conference</h3>
              <div className="past-meta">
                <div>
                  <strong>Date</strong>March 19, 2022
                </div>
                <div>
                  <strong>Venue</strong>DoubleTree Tysons &mdash; McLean, VA
                </div>
                <div>
                  <strong>Attendance</strong>300+ from the U.S. &amp; Canada
                </div>
              </div>
              <p>
                Hosted with the Somaliland Mission to the U.S., with journalist
                Mona Kosar Abdi as Master of Ceremonies, opening remarks from
                Representative Bashir Goth, and a keynote from
                Somaliland&#39;s Minister of Foreign Affairs, Dr. Essa Kayd.
                The day closed with a banquet hosted by the Somaliland Mission
                in honor of the visiting delegation. Five panels covered:
              </p>
              <ul className="past-panels">
                <li>
                  Somaliland&#39;s role amid U.S.&ndash;China dynamics in the
                  Horn of Africa
                </li>
                <li>
                  Gender and inclusive politics &mdash; equitable
                  representation for Somaliland women
                </li>
                <li>
                  Healthcare and education challenges, and the diaspora&#39;s
                  role
                </li>
                <li>Democracy, justice, and freedom of speech</li>
                <li>Business, job creation, and investment opportunities</li>
              </ul>
              <div className="btn-row" style={{ marginTop: "24px" }}>
                <Link href="/conference/2022-dc" className="btn btn-ghost">
                  Read the full conference memo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="photo-frame past-media" style={{ margin: 0 }}>
              <img
                src="/past-conferences/dc-2022.jpg"
                alt="Attendees at the 2022 Somaliland-American Conference"
                loading="lazy"
              />
              <figcaption>
                300+ attendees filled the hall in the Washington, D.C. area
                &mdash; March 2022.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="past-conf flip">
            <div>
              <div className="eyebrow">2021 &middot; Virtual</div>
              <h3>#SomalilandAt30 Conference</h3>
              <p>
                Commemorating 30 years of peace and development under the theme
                &ldquo;Unity Through Community Building&rdquo; &mdash; hosted
                virtually for members nationwide, alongside a roundtable in
                Hargeisa.
              </p>
            </div>
            <div className="past-tile past-media">
              <div className="big">30</div>
              <div className="sub">Years of peace &amp; development</div>
              <div className="theme">
                &ldquo;Unity Through Community Building&rdquo;
              </div>
            </div>
          </Reveal>

          <Reveal className="past-conf">
            <div>
              <div className="eyebrow">2019 &middot; Poughkeepsie, NY</div>
              <h3>Somali Development Conference at Marist College</h3>
              <div className="past-meta">
                <div>
                  <strong>Date</strong>June 8&ndash;9, 2019
                </div>
                <div>
                  <strong>Venue</strong>Marist College
                </div>
                <div>
                  <strong>SLPA delegation</strong>~30 members nationwide
                </div>
              </div>
              <p>
                Months after SLPA&#39;s launch, some 30 members traveled from
                across the U.S. to join honored guests Edna Adan and
                Ambassador Bashir Goth &mdash; alongside attendees from
                Harvard, Columbia, Macalester, the IFC, and Morgan Stanley.
                SLPA members spoke on five panels, from public health and the
                diaspora&#39;s role to Somaliland&#39;s financial sector. It
                was also the first time the founding committee met in person
                &mdash; the spark for the coffee meet-ups and conferences that
                followed.
              </p>
              <div className="btn-row" style={{ marginTop: "24px" }}>
                <Link href="/conference/2019-marist" className="btn btn-ghost">
                  Read the full recap
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
            <figure className="photo-frame past-media" style={{ margin: 0 }}>
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
