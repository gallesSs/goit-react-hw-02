import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>Good:{good}</li>
      <li className={css.item}>Neutral:{neutral}</li>
      <li className={css.item}>Bad:{bad}</li>
      <li className={css.item}>Total:{total}</li>
      <li className={css.item}>Positive:{positive}%</li>
    </ul>
  );
}

export default Feedback;