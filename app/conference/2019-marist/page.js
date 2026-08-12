import Link from "next/link";
import Reveal from "../../components/Reveal";
import JoinBand from "../../components/JoinBand";

export const metadata = {
  title: "2019 Somali Development Conference | SLPA",
};

export default function MaristConference() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">
            Conference Recap &middot; Poughkeepsie, NY &middot; June 8&ndash;9,
            2019
          </div>
          <h1>Somali Development Conference at Marist College 2019</h1>
          <p className="lede">
            Somali Development Conference Recap &mdash; Marist College, NY (June
            8th&ndash;June 9th).
          </p>
          <div className="btn-row">
            <Link href="/conference#past" className="btn btn-outline-light">
              All past conferences
            </Link>
          </div>
          <div className="conf-meta">
            <div>
              <strong>Date</strong>June 8&ndash;9, 2019
            </div>
            <div>
              <strong>Venue</strong>Marist College &mdash; Poughkeepsie, NY
            </div>
            <div>
              <strong>SLPA delegation</strong>~30 members nationwide
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Recap</div>
            <h2>Somali Development Conference 2019</h2>
          </Reveal>
          <Reveal
            className="photo-frame"
            style={{ margin: "0 0 40px", maxWidth: "760px" }}
          >
            <img
              src="/past-conferences/marist-2019.jpg"
              alt="SLPA members and attendees at Marist College in 2019"
              loading="lazy"
            />
          </Reveal>
          <Reveal className="prose">
            <p>
              SLPA was present for the Leadership in &ldquo;Somali Education and
              Development Conference&rdquo; held at Marist College in
              Poughkeepsie, New York. The conference was incredibly successful
              and attracted attendees from schools such as Harvard University,
              Columbia University, Macalester College, and organizations
              including the International Finance Corporation, American
              Enterprise Institute, and Morgan Stanley. Among the honored guests
              were activist Edna Adan, founder of the Edna Adan Maternity
              Hospital in Somaliland and Bashir Goth, Somaliland Ambassador to
              the United States&rdquo; as highlighted on the Marist College
              website. Roughly 30 SLPA members participated in the conference,
              traveling from different parts of the U.S. including the Bay Area,
              Seattle, Florida, Texas, Ohio, Minnesota and D.C.
            </p>
            <p>
              SLPA members benefited greatly from the conference expressing that
              the event was reenergizing and renewed the sense of possibility for
              the region and our contributions. During the event, like minded
              individuals across the US were able to get together and begin these
              crucial conversations on development and the progression of
              Somaliland. The SLPA committee members also participated in five
              panels throughout the two-day event, giving their insight on topics
              such as public health in Somaliland, the contributing role of the
              diaspora, the role of building a robust financial sector in
              Somaliland, IT solutions in technological advancements, and the
              current battle against Female Genital Mutilation in Somaliland.
            </p>
            <p>
              The conference was also the first time all SLPA committee members
              were able to meet since our launch in March. We currently have had
              coffee meet ups in 5 US cities. Many members urged the need to
              expand the coffee meet ups to their local cities. If you are
              interested in leading one in your respective areas, please send us
              an email. We are also excited to begin planning a SLPA conference
              for the year to come. If you have any ideas on what topics/subjects
              you would like discussed please let us know.
            </p>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
