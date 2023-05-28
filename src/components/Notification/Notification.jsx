import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className="message">{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
