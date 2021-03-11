export const iexUrl = "https://sandbox.iexapis.com/stable";

// General news
export const iexFetchGeneralNews = (apiKey) => (
    $.ajax({
        method: 'GET',
        url: iexUrl + `/stock/market/batch?types=news&range=1m&last=10&token=${apiKey}`,
        dataType: 'JSON',
    })
);