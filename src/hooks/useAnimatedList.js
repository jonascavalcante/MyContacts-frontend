import {
  createRef, useCallback, useRef, useState,
} from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemoveItemsIds, setPendingRemoveItemsIds] = useState([]);

  const animatedRefs = useRef(new Map());

  const handleRemoveItem = useCallback((id) => {
    setPendingRemoveItemsIds((prevState) => (
      [...prevState, id]
    ));
  }, []);

  // const handleAnimationEnd = useCallback((id) => {
  //   setItems((prevState) => (
  //     prevState.filter((item) => item.id !== id)
  //   ));

  //   setPendingRemoveItemsIds((prevState) => (
  //     prevState.filter((itemId) => itemId !== id)
  //   ));
  // }, []);

  const getAnimatedRef = useCallback((itemId) => {
    let animatedRef = animatedRefs.current.get(itemId);

    if (!animatedRef) {
      animatedRef = createRef();
      animatedRefs.current.set(itemId, animatedRef);
    }

    return animatedRef;
  }, []);

  const renderList = useCallback((renderItem) => (
    items.map((item) => {
      const isLeaving = pendingRemoveItemsIds.includes(item.id);

      const animatedRef = getAnimatedRef(item.id);

      return renderItem(item, { isLeaving, animatedRef });
    })
  ), [items, pendingRemoveItemsIds, getAnimatedRef]);

  return {
    items, setItems, handleRemoveItem, renderList,
  };
}
