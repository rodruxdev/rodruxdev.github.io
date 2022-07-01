import { useState } from 'react';
import { PROJECT_LENGTH } from 'utils/projects';

const initialState = {
  carrousel: [...Array(PROJECT_LENGTH)].map((_, index) => {
    if (index < 3) return index + 1;
    return 0;
  }),
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
  return { state, setCarrousel };
};

export default useUI;
