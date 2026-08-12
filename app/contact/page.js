import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";
import SocialRow from "../components/SocialRow";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | SLPA",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Questions, ideas, partnerships &mdash; we&#39;re listening.</h1>
          <p className="lede">
            Whether you want to join, mentor, sponsor, contribute an op-ed, or
            bring SLPA to your city &mdash; reach out and we&#39;ll get back to
            you.
          </p>
        </div>
      </section>

      <section className="section-olive">
        <div className="wrap">
          <Reveal className="contact-grid">
            <div>
              <h2 style={{ fontSize: "24px" }}>Reach us directly</h2>
              <ul className="contact-list">
                <li>
                  <strong>Email</strong>
                  <a href="mailto:myslpa.info@gmail.com">
                    myslpa.info@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Membership</strong>
                  <a href="https://forms.gle/je2pJbUCcXUVd5FQA">
                    Register to become an SLPA member
                  </a>
                </li>
                <li>
                  <strong>Mentorship</strong>
                  <a href="https://www.surveymonkey.com/r/C65NVND">
                    Sign up as a mentor or mentee
                  </a>
                </li>
                <li>
                  <strong>Social</strong>
                  <SocialRow />
                </li>
              </ul>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
