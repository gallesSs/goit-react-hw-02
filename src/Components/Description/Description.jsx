import css from "./Description.module.css";

function Description() {
  return (
    <div className={css.description}>
      <h1 className={css.name}>Sip Happens Café</h1>
      <p className={css.action}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
export default Description;