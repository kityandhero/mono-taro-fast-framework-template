import { request } from 'easy-soft-utility';

export const getMetaDataDataApiAddress = '/metaData/getMetaData';

export async function getMetaDataData(parameters) {
  return request({
    api: getMetaDataDataApiAddress,
    params: parameters,
  });
}
