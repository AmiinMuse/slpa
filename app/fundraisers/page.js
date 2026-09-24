import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

export const metadata = {
  title: "Fundraisers | SLPA",
};

const MoreArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Fundraisers() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Fundraisers</div>
          <h1>Every Ramadan, our community shows up.</h1>
          <p className="lede">
            From emergency fire relief to schools, orphan meals, COVID-19
            response, and accessible STEM education &mdash; SLPA has mobilized
            its members and the wider Somaliland diaspora behind causes that
            rebuild and sustain Somaliland. Here is what we&rsquo;ve raised,
            together.
          </p>
        </div>
      </section>

      {/* Evergreen give feature */}
      <section className="section-olive">
        <div className="wrap">
          <Reveal className="donate-box">
            <div>
              <div className="eyebrow" style={{ marginBottom: "14px" }}>
                Support SLPA
              </div>
              <h2>Every Ramadan, we run a community-wide campaign.</h2>
              <p>
                Each year SLPA rallies its members and the wider diaspora behind
                a cause in Somaliland &mdash; from hospitals and schools to
                emergency relief. Your gift keeps that tradition going, and 100%
                goes toward the effort.
              </p>
            </div>
            <div className="donate-panel">
              <img
                src="/logo-mark-light.png"
                alt=""
                className="donate-mark"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
              <h3>Give to SLPA.</h3>
              <p className="small">
                Support our fundraising efforts securely by card or your
                preferred method.
              </p>
              <a
                href="https://www.qrcodechimp.com/page/slpadonation"
                className="btn btn-light"
              >
                Donate
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="section-sand">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">By the Numbers</div>
            <h2>What these campaigns have delivered.</h2>
          </Reveal>
          <Reveal className="impact-grid">
            <div className="impact-card">
              <div className="n">$130,000</div>
              <h3>Hargeisa Fire Relief</h3>
              <p>
                Raised in just 30 days for merchants who lost everything in the
                2022 Waheen Market fire &mdash; in partnership with the Amoud
                Foundation.
              </p>
            </div>
            <div className="impact-card">
              <div className="n">240</div>
              <h3>Merchants Supported</h3>
              <p>
                120 men and 120 women who worked in the Waheen Market each
                received $500 to help rebuild their businesses.
              </p>
            </div>
            <div className="impact-card">
              <div className="n">$25,412</div>
              <h3>Matched by Nominal</h3>
              <p>
                Our friends at Nominal ran a 24-hour Hargeisa Relief campaign
                and donated 100% of their proceeds &mdash; $25,412.14 &mdash; to
                the fundraiser.
              </p>
            </div>
            <div className="impact-card">
              <div className="n">3&times;</div>
              <h3>Borama Eid Drive</h3>
              <p>
                Our Eid Clothing &amp; Toy Drive for the children of Borama
                nearly tripled its $2,500 goal, alongside Somaliland Lifemakers.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Campaign history — newest first */}
      <section className="section-soft">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Campaign History</div>
            <h2>Every fundraiser, newest first.</h2>
          </Reveal>

          {/* Caynaba / Ainabo 2026 */}
          <Reveal className="article">
            <div className="k">Ramadan 2026 &middot; Sool Region</div>
            <h3>7th Annual SLPA Ramadan Fundraiser &mdash; Ainabo Hospital</h3>
            <p>
              Our 7th Annual Ramadan Fundraiser supported the Ainabo (Caynaba)
              International Hospital in the Sool region &mdash; strengthening
              care for the families and community it serves.
            </p>
            <p>
              <strong>We surpassed our goal.</strong> With this campaign, our
              Ramadan fundraising officially reached all six regions of
              Somaliland. Thank you to everyone who gave and shared to make it
              possible.
            </p>
          </Reveal>

          {/* Eerigabo 2025 */}
          <Reveal className="article">
            <div className="k">Ramadan 2025 &middot; Sanaag Region</div>
            <h3>6th Annual SLPA Ramadan Fundraiser &mdash; Eerigabo</h3>
            <p>
              For our 6th Annual Ramadan Fundraiser, we came together to make a
              difference in Eerigabo. One of our SLPA members led an incredible
              initiative to build a school and provide meals for orphans and
              families in need &mdash; pairing lasting educational impact with
              immediate relief.
            </p>
            <p>
              <strong>What we did:</strong> built a school so children can have
              access to education; fed orphans and families so no one goes
              hungry during Ramadan; and uplifted the community through
              generosity and action.
            </p>
          </Reveal>

          {/* Hargeisa Fire Relief 2022 */}
          <Reveal className="article">
            <img
              src="/fundraisers/hargeisa-fire-relief-2022.jpg"
              alt="The Waheen Market in Hargeisa after the 2022 fire"
              className="article-thumb"
              loading="lazy"
            />
            <div className="k">Ramadan 2022 &middot; Hargeisa</div>
            <h3>SLPA Hargeisa Fire Relief &mdash; Waheen Market</h3>
            <div className="byline">
              In partnership with the Amoud Foundation
            </div>
            <p>
              When a devastating fire unexpectedly took over the Waheen Market
              in Hargeisa on the eve of Ramadan, our community quickly mobilized
              in an effort to support our brothers and sisters in Somaliland.
              Through your generous donations, we were able to raise a total of
              $130,000 in just 30 days. This impressive total could not have
              been reached without the efforts of our SLPA community as well as
              our friends at Nominal. Nominal launched a 24-hour Hargeisa Relief
              campaign and donated 100% of their proceeds ($25,412.14) to our
              fundraiser. May Allah reward them for their generosity.
            </p>
            <p>
              The funds were used to support 240 (120 men, 120 women) merchants
              who were impacted by the fire. Each merchant received 500 USD.
              Cash recipients owned and operated different businesses in the
              Waheen Market. They included merchants for clothes, shoes, beauty
              supplies, home appliances, home decors, and street food vendors.
              Under the supervision of the National Committee for the Support of
              the Waheen Market, $500 was deposited into Zaad (Mobile Bank)
              accounts to merchants who worked in the fire.
            </p>
            <p>
              The remaining funds were used to support the Hargeisa Fire
              Department in developing their capacity to respond to emergencies
              and enhancing the efforts of the department to raise awareness
              about fire safety. In order to reduce the likelihood of another
              fire incident, the Hargeisa Fire Department delivered fire safety
              training for all cash recipients. This training was free of cost
              to attendees and included training on how to use fire
              extinguishers and what to do in case of a fire.
            </p>
            <p>
              <strong>$2 Billion in economic loss.</strong> The Waheen Market is
              home to over 5,000 businesses and has long been a support to the
              Hargeisa economy. The fire broke out on the eve of the first
              Ramadan, when businesses were in full bloom. Goods worth millions
              of dollars were destroyed, but what mattered most was the sheer
              vulnerability of the people who lost their bread and butter.
            </p>
            <p>
              <strong>Special thanks &mdash; SLPA Fire Market Relief Team:</strong>{" "}
              Rahma Osman, Amina Hassan, Mohamed Gulaid, Issaq Gass, Faiza Ali,
              Filsan Yousuf, Abdisamad Arten, and Abeer Osman.
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong>Media publications:</strong>
            </p>
            <ul className="past-panels">
              <li>
                <a
                  className="more"
                  href="https://www.youtube.com/watch?v=4YIOhyLOBVg"
                >
                  YouTube coverage <MoreArrow />
                </a>
              </li>
              <li>
                <a className="more" href="https://boramanews.com/?p=50652">
                  Borama News <MoreArrow />
                </a>
              </li>
              <li>
                <a
                  className="more"
                  href="https://www.facebook.com/SAHANSOMALITV/videos/425061352835301/"
                >
                  SAHAN Somali TV <MoreArrow />
                </a>
              </li>
              <li>
                <a
                  className="more"
                  href="https://www.youtube.com/watch?v=o4koTXALSiM"
                >
                  Additional YouTube coverage <MoreArrow />
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Borama Eid Clothing & Toy Drive */}
          <Reveal className="article">
            <img
              src="/fundraisers/borama-eid-drive-lifemakers.jpg"
              alt="SLPA Eid Clothing and Toy Drive for the children of Borama"
              className="article-thumb"
              loading="lazy"
            />
            <div className="k">Ramadan 2021 &middot; Borama</div>
            <h3>Eid Clothing &amp; Toy Drive</h3>
            <div className="byline">
              In partnership with Somaliland Lifemakers
            </div>
            <p>
              SLPA, in partnership with Somaliland Lifemakers, presented the
              &ldquo;Eid Clothing and Toy Drive&rdquo; for the children of
              Borama. For the past several Ramadans, SLPA has consistently
              relied on the generosity of our members and the greater Somaliland
              community around the world &mdash; together supporting causes that
              build our country and make life a little better for all. Somaliland
              Lifemakers is a youth-led organization on the ground, rooted in the
              spirit of volunteerism, just like SLPA.
            </p>
            <p>
              <strong>Thank you for your generosity &mdash; we almost tripled
              our goal of $2,500!</strong> The spirit of a child deserves to be
              joyous, especially on Eid.
            </p>
          </Reveal>

          {/* COVID-19 Relief 2020 */}
          <Reveal className="article">
            <img
              src="/fundraisers/covid-saha-2020.jpg"
              alt="SLPA and SAHA COVID-19 relief efforts in Somaliland"
              className="article-thumb"
              loading="lazy"
            />
            <div className="k">Ramadan 2020 &middot; Nationwide</div>
            <h3>COVID-19 Relief Efforts in Somaliland</h3>
            <div className="byline">
              In partnership with the Somaliland American Health Association
              (SAHA)
            </div>
            <p>
              Amidst the global pandemic, SLPA partnered with the Somaliland
              American Health Association (SAHA) to help tackle COVID-19 relief
              efforts in Somaliland, raising funds through a GoFundMe campaign to
              support the response on the ground.
            </p>
            <p>
              <strong>We reached our goal in 2020.</strong> Thank you to everyone
              who gave and shared to help protect communities across Somaliland.
            </p>
          </Reveal>

          {/* Burco Academy STEM */}
          <Reveal className="article">
            <img
              src="/op-eds/burco-1.jpg"
              alt="Burco Academy students in Somaliland"
              className="article-thumb"
              loading="lazy"
            />
            <div className="k">Ramadan 2019 &middot; Burco</div>
            <h3>Burco Academy Ramadan STEM Fundraiser</h3>
            <p>
              We are glad to have had a successful Ramadan fundraiser for Burco
              Academy. We decided to partner with Burco Academy for their clear
              vision and goal of accessible STEM education for underprivileged
              students. Burco Academy has made great strides and progress since
              its launch in 2016. Amongst our SLPA networks we were able to raise
              $4,200, just $800 shy of our $5,000 target. May Allah bless all who
              contributed during the month of Ramadan.
            </p>
            <p>
              It was narrated from Abu Hurayrah (may Allah be pleased with him)
              that the Messenger of Allah (peace and blessings be upon him) said:
              &ldquo;Spend, O son of Adam, and I shall spend on you.&rdquo;
            </p>
          </Reveal>

          <Reveal className="success-note">
            <strong>Want to support the next campaign?</strong> SLPA runs a
            community-wide Ramadan fundraiser every year &mdash; you can give
            any time at{" "}
            <a
              href="https://www.qrcodechimp.com/page/slpadonation"
              style={{ color: "var(--olive)", fontWeight: 600 }}
            >
              our donation page
            </a>
            . Questions or partnership ideas? Reach us at{" "}
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
