import propTypes from 'prop-types';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export default function ToastMessage({ type, text }) {
  return (
    <Container type={type}>
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
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
