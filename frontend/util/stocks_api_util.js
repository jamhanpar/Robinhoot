export const receiveStock = stock => (
    $.ajax({
        url: `/api/stock/${stock.id}`,
        method: 'GET',
        data: { stock }
    })
);
