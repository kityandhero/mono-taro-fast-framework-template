import { request } from 'easy-soft-utility';

export const createShareUrlParametersDataApiAddress =
  '/share/createShareUrlParams';

export async function createShareUrlParametersData(parameters) {
  return request({
    api: createShareUrlParametersDataApiAddress,
    params: parameters,
  });
}

export const exchangeShareDataApiAddress = '/share/exchangeShare';

export async function exchangeShareData(parameters) {
  return request({
    api: exchangeShareDataApiAddress,
    params: parameters,
  });
}
