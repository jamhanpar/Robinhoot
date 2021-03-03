export const fetchWatchlists = () =>
  $.ajax({
    url: "/api/watchlists",
  });
