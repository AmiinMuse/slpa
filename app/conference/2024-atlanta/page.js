import Link from "next/link";
import Reveal from "../../components/Reveal";
import JoinBand from "../../components/JoinBand";
import Gallery from "../../components/Gallery";
import { GALLERY } from "./photos";

export const metadata = {
  title: "2024 Recap & Gallery | SLPA",
};

export default function AtlantaRecap() {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">
            Recap &amp; Gallery &middot; Atlanta, GA &middot; May 24&ndash;26,
            2024
          </div>
          <h1>Empowering Tomorrow, in pictures.</h1>
          <p className="lede">
            Three days of cultural celebration, professional development, and
            networking &mdash; one of the most successful Somaliland
            conferences held in the U.S. Here&rsquo;s how the weekend unfolded.
          </p>
          <div className="btn-row">
            <a href="#gallery" className="btn btn-light">
              Browse the gallery
            </a>
            <Link
              href="/conference/2024-atlanta/program"
              className="btn btn-outline-light"
            >
              Program &amp; speakers
            </Link>
          </div>
          <div className="conf-meta">
            <div>
              <strong>Dates</strong>May 24&ndash;26, 2024
            </div>
            <div>
              <strong>Venue</strong>Loudermilk Conference Center &mdash;
              Atlanta, GA
            </div>
            <div>
              <strong>The weekend</strong>Cultural Mixer &middot; Conference
              &amp; Gala &middot; BBQ
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Recap</div>
            <h2>A weekend that brought the whole network together.</h2>
            <p>
              Under the theme &ldquo;Empowering Tomorrow: Somaliland
              Professionals in Unity,&rdquo; members from across the country
              gathered in Atlanta. The weekend opened with a vibrant cultural
              mixer, moved through a full day of panels and workshops capped by
              an elegant black tie gala, and wound down with a relaxed BBQ
              &mdash; great food, new friends, and space to reflect.
            </p>
            <p>
              The momentum didn&rsquo;t stop when the weekend ended: the ATL
              energy carried into SLPA&rsquo;s regional event series, with
              gatherings in New York City and Greater Columbus in the months
              that followed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-soft" id="gallery">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">The Gallery</div>
            <h2>Scenes from the weekend.</h2>
            <p>
              A selection from the conference photographers &mdash; tap any
              photo to view it full size.
            </p>
          </Reveal>
          <Gallery chapters={GALLERY} />
        </div>
      </section>

      <section id="media">
        <div className="wrap">
          <Reveal className="section-head">
            <div className="eyebrow">Recap &amp; Media</div>
            <h2>Take the weekend with you.</h2>
            <p>
              The full written recap and the video highlights &mdash; the
              takeaways, action items, and moments worth revisiting.
            </p>
          </Reveal>
          <Reveal className="impact-grid">
            <div className="impact-card">
              <h3>2024 Summit Recap Report</h3>
              <p>
                &ldquo;Somaliland Professionals in Unity Summit Recap&rdquo;
                &mdash; a six-page report from the May 24&ndash;26 weekend, with
                key takeaways and the action items that came out of the panels
                and workshops.
              </p>
              <div className="btn-row" style={{ marginTop: "24px" }}>
                <a
                  className="btn btn-primary"
                  href="/conference/2024-summit-recap.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download the recap (PDF)
                </a>
              </div>
            </div>
            <div className="impact-card">
              <h3>Video Highlights</h3>
              <p>
                Relive the keynotes, panels, and cultural night on video. Full
                event coverage from the Atlanta summit lives on SLPA&rsquo;s
                YouTube channel &mdash; subscribe to catch new uploads.
              </p>
              <div className="btn-row" style={{ marginTop: "24px" }}>
                <a
                  className="btn btn-ghost"
                  href="https://youtube.com/@myslpa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch the 2024 Atlanta highlights on YouTube
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
