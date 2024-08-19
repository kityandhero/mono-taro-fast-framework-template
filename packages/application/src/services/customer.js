import { request } from 'easy-soft-utility';

export const getCurrentInfoDataApiAddress =
  '/customerCenter/customer/getCurrentInfo';

export async function getCurrentInfoData(parameters) {
  return request({
    api: getCurrentInfoDataApiAddress,
    params: parameters,
  });
}
