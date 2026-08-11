import Link from "next/link";
import Reveal from "../../components/Reveal";
import JoinBand from "../../components/JoinBand";

export const metadata = {
  title: "2022 Somaliland-American Conference | SLPA",
};

export default function DcConference() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">
            Conference Memo &middot; Washington, D.C. &middot; March 19, 2022
          </div>
          <h1>2022 Somaliland-American Conference</h1>
          <p className="lede">
            Hosted by SLPA and the Somaliland Mission to the United States, the
            conference brought together delegates from Somaliland and
            stakeholders from the diaspora for critical discussions on the
            political, social, and economic development of Somaliland.
          </p>
          <div className="btn-row">
            <a href="#panels" className="btn btn-light">
              Explore the five panels
            </a>
            <Link href="/conference#past" className="btn btn-outline-light">
              All past conferences
            </Link>
          </div>
          <div className="conf-meta">
            <div>
              <strong>Date</strong>March 19, 2022
            </div>
            <div>
              <strong>Venue</strong>DoubleTree Tysons &mdash; McLean, VA
            </div>
            <div>
              <strong>Attendance</strong>300+ from the U.S. &amp; Canada
            </div>
            <div>
              <strong>Hosts</strong>SLPA &amp; the Somaliland Mission
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Day</div>
            <h2>Somaliland&rsquo;s leaders, face to face with the diaspora.</h2>
            <p>
              The conference opened with introductory remarks by SLPA, followed
              by opening remarks from the Somaliland Representative in the
              United States, Bashir Goth, and a keynote address by
              Somaliland&rsquo;s Minister of Foreign Affairs, Dr. Essa Kayd.
              Journalist Mona Kosar Abdi served as Master of Ceremonies, and
              the day closed with a banquet hosted by the Somaliland Mission in
              honor of the visiting delegation.
            </p>
          </Reveal>
          <Reveal className="mentor-grid">
            <figure className="photo-frame" style={{ margin: 0 }}>
              <img
                src="/past-conferences/dc-2022.jpg"
                alt="Attendees at the 2022 Somaliland-American Conference"
                loading="lazy"
              />
              <figcaption>
                300+ attendees from the U.S. and Canada filled the hall.
              </figcaption>
            </figure>
            <figure className="photo-frame" style={{ margin: 0 }}>
              <img
                src="/past-conferences/dc-2022-stage.jpg"
                alt="Performer on stage beside the Somaliland flag"
                loading="lazy"
              />
              <figcaption>
                Somaliland colors on stage at the DoubleTree Tysons.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="section-soft" id="panels">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Five Panels</div>
            <h2>From geopolitics to job creation.</h2>
            <p>
              Panelists ranged from members of the Somaliland delegation to
              distinguished leaders in academia, business, and the nonprofit
              sector &mdash; each panel exploring how the diaspora can support
              the country&rsquo;s development.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Panel One &middot; Foreign Affairs</div>
            <h3>
              Dynamics in the Horn of Africa vis-&agrave;-vis U.S. &amp;
              Chinese rivalry, and the unique role of Somaliland
            </h3>
            <div className="byline">
              Moderated by Dr. Ahmed Samater &middot; Panelists: Dr. Essa
              Kayd, Michael Rubin, Tibor Nagy
            </div>
            <p>
              An exploration of Somaliland&rsquo;s geopolitical environment,
              honing in on the differing approaches to diplomacy between the
              United States and China, and Somaliland&rsquo;s strategic
              relationships within the Horn of Africa and globally. The
              takeaway: Somaliland&rsquo;s diplomatic priority is recognition
              of its successful, democratic sovereignty &mdash; and strategic
              relationships should lean on shared interests and mutual benefit
              to advance that goal.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Panel Two &middot; Gender &amp; Politics</div>
            <h3>
              Gender and inclusive politics: ensuring equitable representation
              of Somaliland women
            </h3>
            <div className="byline">
              Moderated by Suad Mohamed Jama &middot; Panelists: Minister
              Shukri H. Ismail Bandere, Samia Mohamed Abdullahi Walanwal
            </div>
            <p>
              How Somaliland aims to improve women&rsquo;s political
              participation: instituting a quota for women in political
              positions, establishing a fund to support women in election
              processes, and empowering women engaged in community work.
              Obstacles persist &mdash; including the need for greater
              women&rsquo;s voter registration &mdash; and the panel urged
              diaspora women to enter politics in their own countries as well.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Panel Three &middot; Health &amp; Education</div>
            <h3>Healthcare and education challenges, and the role of the diaspora</h3>
            <div className="byline">
              Moderated by Faisa Ali &middot; Panelists: Ali Hoori, Asha
              Farah, Dr. Abdirahman Madar, Mohamoud Egal, Dr. Jama Muse Jama
            </div>
            <p>
              A look at today&rsquo;s challenges &mdash; from underqualified
              teachers to curriculum development &mdash; and the high-impact
              initiatives sparking change: Burco Academy of Science and
              Technology, the Hargeysa Book Fair, the Somalilander-American
              Health Association (SAHA), and Amoud Foundation, a sponsor of
              the conference.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Panel Four &middot; Democracy</div>
            <h3>Democracy, justice, and freedom of speech</h3>
            <div className="byline">
              Moderated by Yasin Abdi &middot; Panelists: Ministers Mohamed
              Kahin Ahmed &amp; Dr. Sulayman Yusuf Ali Koore
            </div>
            <p>
              A focal point was Somaliland&rsquo;s success in sustaining
              democratic governance &mdash; effective separation of powers and
              a democratic election process &mdash; alongside a global view of
              how freedom of speech and journalism are under attack, and why
              media literacy matters in an age of misinformation.
            </p>
          </Reveal>
          <Reveal className="article">
            <div className="k">Panel Five &middot; Business</div>
            <h3>Business and job creation: investment opportunities in Somaliland</h3>
            <div className="byline">
              Moderated by Issaq Gass &middot; Panelists: Minister Mohamoud
              Sa&rsquo;eed Saajin, Dr. Osman Sheikh Ahmed, Fathia Oomar,
              Abdirashid Dahabshiil, Abdikarim Mohamed Eid
            </div>
            <p>
              Strides in intellectual property rights, online business
              registration, and e-commerce infrastructure &mdash; set against
              a high unemployment rate and reliance on foreign imports.
              Industry partners like Telesom and Dahabshiil shared how their
              companies create jobs directly and through subsidiaries across
              construction, gas, ride-sharing, and finance, with the growing
              local population and expansive diaspora as twin engines of the
              economy.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="success-note">
            <strong>A tremendous success:</strong> SLPA and the Somaliland
            Mission welcomed the Somaliland delegation and 300+ attendees for a
            day of discussions key to the country&rsquo;s development. Memo
            written by Deqa Mohamed and edited by Hodan Gudal, on behalf of the
            SLPA Conference Planning and Logistics Committees &mdash;{" "}
            <a
              href="https://myslpa.org/2022-dc-conference"
              style={{ color: "var(--olive)", fontWeight: 600 }}
            >
              read the original memo
            </a>
            .
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
