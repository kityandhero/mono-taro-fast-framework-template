import { request } from 'easy-soft-utility';

export const singleListTreeThreeLevelDataApiAddress =
  '/administrativeDivision/singleListTreeThreeLevel';

export async function singleListTreeThreeLevelData(parameters) {
  return request({
    api: singleListTreeThreeLevelDataApiAddress,
    params: parameters,
  });
}
