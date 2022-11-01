import propTypes from 'prop-types';

import { Overlay } from './styles';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: propTypes.bool.isRequired,
};
