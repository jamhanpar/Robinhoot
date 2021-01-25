export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
    })
);

export const fetchStock = stockId => (
    $.ajax({
        url: `/api/stocks/${stockId}`
    })
);