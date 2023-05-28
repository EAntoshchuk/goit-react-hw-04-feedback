import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.btn_list}>
      {options.map(option => {
        return (
          <li className={css.bnt_list_item} key={option}>
            <button name={option} className={css.btn} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onleaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
