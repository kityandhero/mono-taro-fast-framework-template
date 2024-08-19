import { buildModel as buildCustomerModel } from './customer';
import { buildModel as buildEntranceModel } from './entrance';
import { buildModel as buildGlobalModel } from './global';
import { buildModel as buildShareModel } from './share';

export function listModelBuilder() {
  const list = [];

  list.push(
    buildGlobalModel,
    buildEntranceModel,
    buildShareModel,
    buildCustomerModel,
  );

  return list;
}
