import { useEffect } from 'react';

import { Container } from './styles';

import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../utils/toast';

import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemoveItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={pendingRemoveItemsIds.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
}
