import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

export const metadata = {
  title: "Programs | SLPA",
};

export default function Programs() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Programs</div>
          <h1>Built for every stage of a career.</h1>
          <p className="lede">
            From first internships to seasoned leadership, SLPA&#39;s programs
            give the Somaliland-American professional community room to grow
            together.
          </p>
        </div>
      </section>

      <section id="mentorship" className="section-olive">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Mentorship Program</div>
            <h2>Reach one, teach one.</h2>
          </Reveal>
          <Reveal className="mentor-grid">
            <div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(35,38,31,0.7)",
                  margin: 0,
                }}
              >
                Launched in 2021, the SLPA Mentorship Program connects
                undergraduate students and early-career professionals with
                mentors from our network of 650+ professionals &mdash; spanning
                industries, backgrounds, and every region of the U.S. Mentees
                have seen stronger academic performance, clearer career
                planning, and internships at Fortune 500 companies that led to
                full-time roles.
              </p>
              <div className="mentor-benefits">
                <div>
                  <h4>As a Mentor</h4>
                  <ul>
                    <li>
                      Give back to the next generation of Somaliland-Americans.
                    </li>
                    <li>Sharpen feedback and critical-thinking skills.</li>
                    <li>Grow leadership and communication abilities.</li>
                  </ul>
                </div>
                <div>
                  <h4>As a Mentee</h4>
                  <ul>
                    <li>Guidance from professionals in your own field.</li>
                    <li>Stronger academic and career performance.</li>
                    <li>Leads to internships and full-time opportunities.</li>
                  </ul>
                </div>
              </div>
              <div className="btn-row" style={{ marginTop: "28px" }}>
                <a
                  href="https://www.surveymonkey.com/r/C65NVND"
                  className="btn btn-primary"
                >
                  Sign up as a mentor or mentee
                </a>
              </div>
            </div>
            <div>
              <figure className="photo-frame" style={{ margin: "0 0 24px" }}>
                <img
                  src="https://img1.wsimg.com/isteam/ip/4e720571-a0ff-4e0e-8042-fbca20cd5a15/image0%20(7).jpeg/:/rs=w:900,cg:true"
                  alt="SLPA mentorship program"
                  loading="lazy"
                />
              </figure>
              <blockquote>
                <p>
                  &quot;At SLPA our goal is to help move the next generation
                  forward. If you&#39;re an industry professional, pay it
                  forward by being a mentor. If you&#39;re a student or
                  early-career professional, come seek guidance from our fellow
                  members.&quot;
                </p>
                <cite>&mdash; The SLPA Mentorship Program</cite>
              </blockquote>
              <div className="success-note">
                <strong>Success story:</strong> Through the program, mentee
                Mahad Beergeel of Seattle secured an internship with PwC&#39;s
                Tax Division &mdash; and turned it into a full-time role.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="intern-volunteer" className="section-sand">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Intern + Volunteer Program</div>
            <h2>SLPA Summer Internship &amp; Volunteer Programs in Somaliland.</h2>
          </Reveal>
          <Reveal className="mentor-grid">
            <div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(35,38,31,0.7)",
                  margin: 0,
                }}
              >
                Many of us may have been back to Somaliland throughout the years
                and may have even wanted to get involved. Due to a lack of
                connection or network it may have been difficult. We are now
                looking to connect our members visiting back home this summer to
                opportunities in areas that interest them! SLPA is willing to
                facilitate these opportunities whether you are a college student
                looking for an internship opportunity while you are visiting or a
                young professional willing to volunteer your time in your
                respective areas of knowledge and expertise. Our goal at SLPA is
                to create a platform or space for Somaliland professionals to
                connect and collaborate here in the US as well as back home! If
                you are looking to having a fulfilling and enriching experience
                with our Summer Program please fill out our form of interest
                below!
              </p>
              <div className="btn-row" style={{ marginTop: "28px" }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeF2vMjeB0gkCd2xOo6LXGubRpxLz51X7kLYgP6uBTZOJ20BQ/viewform?vc=0&amp;c=0&amp;w=1"
                  className="btn btn-primary"
                >
                  Fill out the form of interest
                </a>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "19px", marginBottom: "4px" }}>
                SLPA Partners
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(35,38,31,0.6)",
                  margin: "0 0 4px",
                }}
              >
                The institutions and organizations we work with across
                Somaliland and the diaspora.
              </p>
              <div className="city-tags">
                <span>Gollis University</span>
                <span>Harhub Innovation Center</span>
                <span>Shaqadoon Organization</span>
                <span>Pharo Foundation</span>
                <span>Abaarso School</span>
                <span>Hargeysa Cultural Center</span>
                <span>Edna Aden Hospital</span>
                <span>Ministry of Foreign Affairs</span>
                <span>Ministry of Finance</span>
                <span>Somaliland Diaspora Relations Office</span>
                <span>Banfas School of Arts</span>
                <span>Somaliland Intellectuals</span>
                <span>Somaliland Sun</span>
                <span>Somaliland Chronicle</span>
                <span>Nagaad Network</span>
                <span>UK-SL Alliance</span>
                <span>Somaliland Canadian Professionals Forum</span>
                <span>Canadian Somaliland Affairs Community</span>
                <span>Association of Somaliland Community in Australia</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">More Ways In</div>
            <h2>Two more paths to get involved.</h2>
          </Reveal>
          <Reveal className="programs-grid two">
            <div className="program-card">
              <h3>Intern + Volunteer Program</h3>
              <p>
                Summer internship and volunteer placements for members visiting
                Somaliland &mdash; build skills, gain on-the-ground experience,
                and give back to communities across the country. In partnership
                with institutions like Gollis University, we&#39;re working to
                reach universities across all six regions of Somaliland.
              </p>
              <a className="more" href="#intern-volunteer">
                Learn more{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="program-card">
              <h3>Quarterly Analytical Op-Eds</h3>
              <p>
                Written by SLPA members who are subject-matter experts in their
                fields, our op-eds tackle Somaliland&#39;s most pressing issues
                &mdash; energy, the blue economy, education &mdash; and are
                published across Somaliland journals to reach the stakeholders
                who can drive change.
              </p>
              <Link className="more" href="/op-eds">
                Read the op-eds{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
