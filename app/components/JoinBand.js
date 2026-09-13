import Link from "next/link";

export default function JoinBand() {
  return (
    <section className="join-band">
      <div className="wrap join-inner">
        <div>
          <h2>Join a network of 650+ Somaliland-American professionals.</h2>
          <p>
            Membership connects you to mentorship, regional meet-ups, the annual
            conference, and a community working toward Somaliland&#39;s future.
            Registration takes two minutes.
          </p>
        </div>
        <Link href="/join" className="btn btn-light">
          Register today
        </Link>
      </div>
    </section>
  );
}
