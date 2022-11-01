import { useCallback, useState } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);

  const [pendingRemoveItemsIds, setPendingRemoveItemsIds] = useState([]);

  const handleRemoveItem = useCallback((id) => {
    setPendingRemoveItemsIds((prevState) => (
      [...prevState, id]
    ));
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => (
      prevState.filter((item) => item.id !== id)
    ));

    setPendingRemoveItemsIds((prevState) => (
      prevState.filter((itemId) => itemId !== id)
    ));
  }, []);

  return {
    items, setItems, pendingRemoveItemsIds, handleRemoveItem, handleAnimationEnd,
  };
}
