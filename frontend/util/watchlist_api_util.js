export const fetchWatchlists = () => 
  $.ajax({
    url: "/api/watchlists",
  });


export const addToWatchlist = (watched_stock) => {
  debugger
  $.ajax({
    method: 'POST',
    url: '/api/watched_stocks',
    data: { watched_stock }
  });
}