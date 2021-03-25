export const fetchWatchlists = () => 
  $.ajax({
    url: '/api/watchlists',
  });

export const addToWatchlist = (watched_stock) => {
  $.ajax({
    method: 'POST',
    url: '/api/watched_stocks',
    data: { watched_stock }
  });
}

export const removeFromWatchlist = (watched_stock) => {
  $.ajax({
    method: 'DELETE',
    url: '/api/watched_stocks/:id',
    data: { watched_stock },
  });
};

export const createWatchlist = (watchlist) => {
  $.ajax({
    method: 'POST',
    url: '/api/watchlists',
    data: { watchlist }
  });
}