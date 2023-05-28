import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePersantage,
}) {
  return (
    <ul className={css.stats}>
      <li className={css.stats_item}>Good: {good}</li>
      <li className={css.stats_item}>Neutral: {neutral}</li>
      <li className={css.stats_item}>Bad: {bad}</li>
      <li className={css.stats_item}>Total: {total}</li>
      <li>Positive feedback: {positivePersantage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePersantage: PropTypes.number.isRequired,
};
