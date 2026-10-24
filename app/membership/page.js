import Reveal from "../components/Reveal";
import MembershipForm from "../components/MembershipForm";

export const metadata = {
  title: "Become a Member | SLPA",
};

const BENEFITS = [
  {
    title: "Mentorship",
    text: "Connect with experienced Somaliland-American professionals, or mentor the next generation yourself.",
  },
  {
    title: "Regional meet-ups",
    text: "Network with members in your city through our regional events across the U.S.",
  },
  {
    title: "The annual conference",
    text: "Panels, networking, and community at SLPA's yearly gathering.",
  },
  {
    title: "A community with purpose",
    text: "Work alongside 650+ members toward Somaliland's future, here and back home.",
  },
];

export default function Membership() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Membership</div>
          <h1>Join a network of 650+ Somaliland-American professionals.</h1>
          <p className="lede">
            Tell us a little about yourself and we&#39;ll add you to the SLPA
            network. Registration takes about two minutes.
          </p>
        </div>
      </section>

      <section className="section-olive">
        <div className="wrap">
          <Reveal className="contact-grid">
            <div>
              <h2 style={{ fontSize: "24px" }}>What membership offers</h2>
              <ul className="contact-list">
                {BENEFITS.map((b) => (
                  <li key={b.title}>
                    <strong>{b.title}</strong>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>
            <MembershipForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
