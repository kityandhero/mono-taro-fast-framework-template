import { checkWhetherDevelopmentEnvironment } from 'easy-soft-utility';

import { filePrefix } from './customConfig';

const LogoImage = `${filePrefix}746868813.jpeg`;

export const config = {
  appId: 'pdbpabiprlhjwg',
  showLogInConsole: checkWhetherDevelopmentEnvironment(),
  // showLogInConsole: true,
  // showRequestInfo: checkWhetherDevelopmentEnvironment(),
  // showUseVirtualRequestMessage: true,
  apiPrefix: {
    corsTargetDomain: 'https://zwfbapi.1010101.cc',
  },
  apiSuccessCode: 200,
  authenticationFailCode: 2001,
  signInPath: '/customer/pages/signIn/main/index',
  apiVersion: 'v1',
  footerImage: LogoImage,
  footerText: '',
  footerDescription: '',
  defaultMetaData: {
    rankList: [],
    sectionList: [],
  },
};
