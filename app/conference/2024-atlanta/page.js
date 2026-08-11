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

      <JoinBand />
    </>
  );
}
