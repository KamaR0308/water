import { IModalReducer } from '../types/types';
import { types } from './types';

const initialState = {
  isOpen: false,
};

const modalReducer = (state = initialState, action: IModalReducer) => {
  switch (action.type) {
    case types.UNCORRECT_INFO:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    default:
      return state;
  }
};

export default modalReducer;
