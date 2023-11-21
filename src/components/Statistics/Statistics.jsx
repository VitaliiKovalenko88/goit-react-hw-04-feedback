import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePersentage }) => (
  <div className={css.statsBlock}>
    <ul className={css.list}>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
      <li className={css.listItem}>Total: {total}</li>
      <li className={css.listItem}>Positive feedback: {positivePersentage}%</li>
    </ul>
  </div>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersentage: PropTypes.number.isRequired,
};
