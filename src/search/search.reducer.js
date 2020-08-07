import { SET_SEARCH_TEXT } from "./search.actions";

export default (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return action.payload.searchText;

    default:
      return state;
  }
};
