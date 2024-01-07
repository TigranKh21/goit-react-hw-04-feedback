import css from '../Feedback.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div>
        <ul className={css.statList}>
          <li className={`${css.statItem} ${css.good}`}>Good: {good}</li>
          <li className={`${css.statItem} ${css.neutral}`}>
            Neutral: {neutral}
          </li>
          <li className={`${css.statItem} ${css.bad}`}>Bad: {bad}</li>
        </ul>
        <h2>Total: {total()}</h2>
        <h2>Positive feedback: {positivePercentage()}%</h2>
      </div>
    </>
  );
};
