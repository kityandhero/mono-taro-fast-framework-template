import { checkWhetherDevelopmentEnvironment } from 'easy-soft-utility';

import { AppBase } from 'taro-fast-framework';

import { filePrefix } from './customConfig';
import { prepareModel } from './modelBuilders';

import './app.less';

const LogoImage = `${filePrefix}746868813.jpeg`;

const config = {
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

prepareModel();

class App extends AppBase {
  constructor(properties) {
    super(properties, config);
  }
}

export default App;
