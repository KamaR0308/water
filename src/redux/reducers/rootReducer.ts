import { IRootReducer } from '../types/types';
import { types } from './types';

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action: IRootReducer) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return {
        ...state,
        loggedStatus: action.loggedStatus,
        categories: action.categoriesList,
        tableList: action.tableList,
        tableItems: action.tableItems,
      };
    case types.USER_STATUS: {
      return {
        ...state,
        loggedStatus: action.loggedStatus,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
