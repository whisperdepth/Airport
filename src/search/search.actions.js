export const SET_SEARCH_TEXT = "SEARCH/SET_SEARCH_TEXT";

export const setSearchText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  payload: {
    searchText,
  },
});
