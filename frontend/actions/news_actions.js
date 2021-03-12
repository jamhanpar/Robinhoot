import * as IEXCloudAPIUtil from '../util/iex_cloud_api_util';

export const RECEIVE_NEWS = "RECEIVE_NEWS";

const receiveNews = news => {
    return {
    type: RECEIVE_NEWS,
    news
}}

export const fetchNews = apiKey => dispatch => (
    IEXCloudAPIUtil.iexFetchGeneralNews(apiKey)
        .then(
            news => dispatch(receiveNews(news))
        )
)