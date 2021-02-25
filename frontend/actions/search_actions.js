import * as IEXCloudAPIUtil from "../util/iex_cloud_stock_api_util";

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

const receiveSearch = (searchResults) => {
  return {
    type: RECEIVE_SEARCH,
    searchResults,
  };
};

export const fetchSearch = (fragment, apiKey) => (dispatch) => {
  return IEXCloudAPIUtil.fetchSearch(fragment, apiKey)
    .then((searchResults) => dispatch(receiveSearch(searchResults))
  );
};