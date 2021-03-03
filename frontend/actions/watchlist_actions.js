import * as WatchlistAPIUtil from "../util/watchlist_api_util";

export const RECEIVE_WATCHLISTS = "RECEIVE_WATCHLISTS";

const receiveWatchlists = (watchlists) => ({
  type: RECEIVE_WATCHLISTS,
  watchlists,
});

export const fetchWatchlists = () => (dispatch) =>
  WatchlistAPIUtil.fetchWatchlists()
    .then(
        (watchlists) => dispatch(receiveWatchlists(watchlists)),
        (error) => dispatch(receiveErrors(error.responseJSON))
    );