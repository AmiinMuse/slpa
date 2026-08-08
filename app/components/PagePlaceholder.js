import styles from "./PagePlaceholder.module.css";

export default function PagePlaceholder({ title, description }) {
  return (
    <div className={styles.wrap}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
