import Reveal from "../components/Reveal";
import MembershipForm from "../components/MembershipForm";

export const metadata = {
  title: "Become a Member | SLPA",
  description:
    "Register to join the Somaliland Professionals Association of America — a network of 650+ Somaliland-American professionals. Registration takes about two minutes.",
};

export default function Join() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Membership</div>
          <h1>Join a network of 650+ Somaliland-American professionals.</h1>
          <p className="lede">
            Membership connects you to mentorship, regional meet-ups, the annual
            conference, and a community working toward Somaliland&#39;s future.
            Registration takes about two minutes.
          </p>
        </div>
      </section>

      <section className="section-olive">
        <div className="wrap">
          <Reveal className="contact-grid">
            <div>
              <h2 style={{ fontSize: "24px" }}>What membership gives you</h2>
              <ul className="contact-list">
                <li>
                  <strong>Mentorship</strong>
                  Pairings with professionals across industries and career
                  stages &mdash; as a mentor, a mentee, or both.
                </li>
                <li>
                  <strong>Regional meet-ups</strong>
                  Local gatherings in the cities where members already live and
                  work, from Seattle to Columbus to the DMV.
                </li>
                <li>
                  <strong>The annual conference</strong>
                  Hundreds of members together each year &mdash; panels,
                  keynotes, a gala, and the people you keep in touch with after.
                </li>
                <li>
                  <strong>A network invested in Somaliland</strong>
                  Advocacy, fundraising, and professional exchange with the
                  people building Somaliland today.
                </li>
                <li>
                  <strong>Questions first?</strong>
                  <a href="mailto:myslpa.info@gmail.com">
                    myslpa.info@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <MembershipForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
