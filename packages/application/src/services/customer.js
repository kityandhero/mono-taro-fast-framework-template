import { request } from 'easy-soft-utility';

export const getCurrentInfoDataApiAddress =
  '/customerCenter/customer/getCurrentInfo';

export async function getCurrentInfoData(parameters) {
  return request({
    api: getCurrentInfoDataApiAddress,
    params: parameters,
  });
}

export const getCustomerDataApiAddress = '/customerCenter/customer/getCustomer';

export async function getCustomerData(parameters) {
  return request({
    api: getCustomerDataApiAddress,
    params: parameters,
  });
}
