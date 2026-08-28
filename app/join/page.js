import Reveal from "../components/Reveal";
import MembershipForm from "../components/MembershipForm";

export const metadata = {
  title: "Join SLPA | Membership Registration",
  description:
    "Register to join the Somaliland Professionals of America — a network of 650+ Somaliland-American professionals.",
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
              <h2 style={{ fontSize: "24px" }}>Why join</h2>
              <ul className="contact-list">
                <li>
                  <strong>Mentorship</strong>
                  Connect with professionals across industries and career stages.
                </li>
                <li>
                  <strong>Regional meet-ups</strong>
                  Local gatherings in cities where SLPA members live and work.
                </li>
                <li>
                  <strong>Annual conference</strong>
                  Join hundreds of members at the yearly SLPA summit.
                </li>
                <li>
                  <strong>Community</strong>
                  A network invested in Somaliland&#39;s future &mdash; and in
                  each other.
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
