export const fetchStocks = () => (
    $.ajax({
        url: '/api/stocks',
        method: 'GET'
    })
);

export const fetchStock = stockId => (
    $.ajax({
        url: `/api/stocks/${stockId}`,
        method: 'GET',
    })
);