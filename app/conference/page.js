import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";
import ConferenceSlideshow from "../components/ConferenceSlideshow";

export const metadata = {
  title: "Annual Conference | SLPA",
};

export default function Conference() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">
            Annual Conference &middot; May 24&ndash;26, 2024 &middot; Atlanta,
            GA
          </div>
          <h1>Empowering Tomorrow: Somaliland Professionals in Unity</h1>
          <p className="lede">
            An unparalleled three-day journey of cultural celebration,
            professional development, and networking &mdash; bringing the
            brightest minds from every sector together to share knowledge,
            foster collaboration, and celebrate Somaliland heritage.
          </p>
          <div className="btn-row">
            <Link href="/conference/2024-atlanta" className="btn btn-light">
              See the recap &amp; gallery
            </Link>
            <a href="#past" className="btn btn-outline-light">
              Past conferences
            </a>
          </div>
          <ConferenceSlideshow />
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Weekend</div>
            <h2>Three days, three moods.</h2>
          </Reveal>
          <Reveal className="programs-grid">
            <div className="program-card">
              <div className="k">Day One &middot; Cultural attire</div>
              <h3>Cultural Mixer</h3>
              <p>
                Kick off in style &mdash; network with fellow professionals
                while showcasing your finest cultural attire, in a vibrant
                evening of music, dance, and cultural exchange that sets the
                tone for unity.
              </p>
            </div>
            <div className="program-card">
              <div className="k">Day Two &middot; Professional / Black tie</div>
              <h3>Conference &amp; Black Tie Gala</h3>
              <p>
                A full day of thought-provoking panels and workshops led by
                leaders at the front of their fields. As the sun sets, the
                elegance unfolds &mdash; dinner, live entertainment, and a
                surprise guest.
              </p>
            </div>
            <div className="program-card">
              <div className="k">Day Three &middot; Casual</div>
              <h3>BBQ &amp; Networking</h3>
              <p>
                Wind down in a relaxed atmosphere &mdash; savor great food,
                connect with new friends, and reflect on the insights gained
                over the weekend.
              </p>
            </div>
          </Reveal>
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
          <Reveal className="success-note" style={{ marginTop: "28px" }}>
            <strong>Good to know:</strong> Students qualify for 50% off tickets
            &mdash; reach out at{" "}
            <a
              href="mailto:myslpa.info@gmail.com"
              style={{ color: "var(--olive)", fontWeight: 600 }}
            >
              myslpa.info@gmail.com
            </a>
            . Tickets are nonrefundable and are not sold at the door.
          </Reveal>
        </div>
      </section>

      <section id="past">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Past Conferences</div>
            <h2>Building momentum, year after year.</h2>
          </Reveal>
          <Reveal className="timeline">
            <div className="tl-row">
              <div>
                <div className="yr">2022</div>
                <div className="city">Washington, D.C.</div>
              </div>
              <div>
                <h4>Somaliland-American Conference</h4>
                <p>
                  Hosted with the Somaliland Mission to the U.S. on March 19,
                  2022 &mdash; 300+ attendees from the U.S. and Canada, opening
                  remarks from Representative Bashir Goth, and a keynote from
                  Somaliland&#39;s Minister of Foreign Affairs, Dr. Essa Kayd.
                  Five panels covered:
                </p>
                <ul>
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
              </div>
              <span className="tag">Past event</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2021</div>
                <div className="city">Virtual</div>
              </div>
              <div>
                <h4>#SomalilandAt30 Conference</h4>
                <p>
                  Commemorating 30 years of peace and development under the
                  theme &quot;Unity Through Community Building.&quot;
                </p>
              </div>
              <span className="tag">Past event</span>
            </div>
            <div className="tl-row">
              <div>
                <div className="yr">2019</div>
                <div className="city">United States</div>
              </div>
              <div>
                <h4>SLPA Launch &amp; Development Conference &#39;19</h4>
                <p>
                  Our founding year: the launch conference, coffee meet-ups in
                  five cities, and panel discussions at the Somali Development
                  Conference with Abaarso School at Marist College.
                </p>
              </div>
              <span className="tag">Past event</span>
            </div>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
