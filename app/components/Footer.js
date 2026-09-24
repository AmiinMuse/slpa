import Link from "next/link";
import SocialRow from "./SocialRow";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="foot-brand">
              <img src="/logo-mark.png" alt="SLPA logo" className="logo-mark" />
              <span>
                Somaliland Professionals
                <br />
                Association of America
              </span>
            </div>
            <p className="mission">
              A space for Somaliland-American professionals to collaborate,
              mentor, and exchange ideas &mdash; moving the next generation
              forward since 2018.
            </p>
            <SocialRow />
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="foot-links">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/conference">Annual Conference</Link>
              </li>
              <li>
                <Link href="/programs">Programs</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Get Involved</h4>
            <ul className="foot-links">
              <li>
                <a href="https://forms.gle/je2pJbUCcXUVd5FQA">Become a Member</a>
              </li>
              <li>
                <a href="https://www.surveymonkey.com/r/C65NVND">
                  Mentorship Sign-Up
                </a>
              </li>
              <li>
                <Link href="/fundraisers">Fundraisers</Link>
              </li>
              <li>
                <a href="https://myslpa.org/donate">Donate</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="foot-links">
              <li>
                <a href="mailto:myslpa.info@gmail.com">myslpa.info@gmail.com</a>
              </li>
              <li>
                <Link href="/contact">Contact form</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            SLPA is a 501(c)(3) organization. Donations are deductible to the
            full extent allowable under IRS regulations.
          </span>
          <span>
            &copy; 2018&ndash;2026 Somaliland Professionals Association of
            America
          </span>
        </div>
      </div>
    </footer>
  );
}
