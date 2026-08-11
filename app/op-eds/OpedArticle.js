import Link from "next/link";
import Reveal from "../components/Reveal";
import JoinBand from "../components/JoinBand";

function linkify(text) {
  const parts = text.split(/(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.\w+)/g);
  return parts.map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w.-]+\.\w+$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }
    return part;
  });
}

function Block({ block }) {
  switch (block.t) {
    case "lead":
      return <p className="lead">{linkify(block.s)}</p>;
    case "p":
      return <p>{linkify(block.s)}</p>;
    case "src":
      return <p className="src">{block.s}</p>;
    case "h3":
      return <h3>{block.s}</h3>;
    case "img":
      return (
        <figure>
          <img src={block.src} alt={block.alt} loading="lazy" />
          {block.cap ? <figcaption>{block.cap}</figcaption> : null}
        </figure>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export default function OpedArticle({
  eyebrow,
  title,
  meta,
  blocks,
  author,
  publishedIn,
  disclaimer,
}) {
  return (
    <>
      <section className="page-hero dark">
        <div className="wrap">
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          {meta ? <p className="lede">{meta}</p> : null}
          <div className="btn-row">
            <Link href="/op-eds" className="btn btn-outline-light">
              All op-eds &amp; blogs
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="oped">
            {blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}

            {publishedIn ? (
              <div className="oped-published">
                <h4>{publishedIn.heading}</h4>
                <ol>
                  {publishedIn.links.map((url, i) => (
                    <li key={i}>
                      <a href={url}>{url}</a>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {author ? (
              <div className="oped-author">
                <h4>About the Author</h4>
                {author.map((line, i) => (
                  <p key={i}>{linkify(line)}</p>
                ))}
              </div>
            ) : null}

            {disclaimer ? (
              <p className="oped-disclaimer">{disclaimer}</p>
            ) : null}
          </Reveal>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
