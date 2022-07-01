import { useState } from 'react';
import { PROJECT_LENGTH } from 'utils/projects';

const initialState = {
  carrousel: [...Array(PROJECT_LENGTH)].map((_, index) => {
    if (index < 3) return index + 1;
    return 0;
  }),
  modal: {
    open: false,
    index: 0,
  },
};

const useUI = () => {
  const [state, setState] = useState(initialState);
  const setCarrousel = (direction) => {
    let newCarrousel = [...state.carrousel];
    if (direction === 0) {
      const first = newCarrousel.shift();
      newCarrousel.push(first);
    }
    if (direction == 1) {
      const last = newCarrousel.pop();
      newCarrousel.unshift(last);
    }
    setState({ ...state, carrousel: newCarrousel });
  };
  const setOpenModal = (index) => {
    const newState = {
      ...state,
      modal: {
        open: true,
        index,
      },
    };
    setState(newState);
  };
  const setCloseModal = () => {
    const newState = {
      ...state,
      modal: {
        ...state.modal,
        open: false,
      },
    };
    setState(newState);
  };
  return { state, setCarrousel, setOpenModal, setCloseModal };
};

export default useUI;
