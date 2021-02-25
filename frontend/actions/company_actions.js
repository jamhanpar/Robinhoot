import * as IEXCloudAPIUtil from "../util/iex_cloud_stock_api_util";

export const RECEIVE_COMPANY = "RECEIVE_COMPANY";

const receiveCompany = (companyResults) => {
  return {
    type: RECEIVE_COMPANY,
    companyResults,
  };
};

export const fetchCompany = (stockSymbol, apiKey) => (dispatch) => {
  return IEXCloudAPIUtil.fetchCompany(stockSymbol, apiKey).then((companyResults) =>
    dispatch(receiveCompany(companyResults))
  );
};