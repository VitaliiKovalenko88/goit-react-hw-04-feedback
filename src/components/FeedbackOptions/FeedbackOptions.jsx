import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button
      className={`${css.btn} ${
        css[`btn${option.charAt(0).toUpperCase() + option.slice(1)}`]
      }`}
      key={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
