import propTypes from 'prop-types';
import { useEffect } from 'react';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef,
}) {
  const {
    id, type, text, duration,
  } = message;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(id);
    }, duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onRemoveMessage, id, duration]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
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
    duration: propTypes.number,
  }).isRequired,

  onRemoveMessage: propTypes.func.isRequired,
  isLeaving: propTypes.bool.isRequired,
  animatedRef: propTypes.shape().isRequired,
};
