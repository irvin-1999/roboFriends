import { useReducer } from "react";
import SearchContext from "./searchContext";

const defaultSearchState = {
  search: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};

const searchSubscriber = () => {
  const latestState = store.getState();
};
