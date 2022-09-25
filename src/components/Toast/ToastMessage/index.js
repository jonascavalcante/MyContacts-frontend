import propTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ message, onRemoveMessage }) {
  const { id, type, text } = message;

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {type === 'danger' && (
        <img src={xCircleIcon} alt="danger" />
      )}
      {type === 'success' && (
        <img src={checkCircleIcon} alt="success" />
      )}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: propTypes.shape({
    id: propTypes.number.isRequired,
    text: propTypes.string.isRequired,
    type: propTypes.oneOf(['default', 'success', 'danger']),
  }).isRequired,

  onRemoveMessage: propTypes.func.isRequired,
};