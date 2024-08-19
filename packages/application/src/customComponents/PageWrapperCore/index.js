import { View } from '@tarojs/components';

import {
  isNumber,
  logObject,
  toNumber,
  transformListData,
} from 'easy-soft-utility';

import { navigateBack, transformSize } from 'taro-fast-common/es/utils/tools';
import { CenterBox } from 'taro-fast-component/es/customComponents';
import { AuthorizationWrapper } from 'taro-fast-framework/es/framework';
import { getAdministrativeDivisionFullData } from 'taro-fast-framework/es/utils/globalStorageAssist';

import { getQQMapWX } from '../../utils/tools';
import BallGridBeat from '../BallGridBeat';

export default class PageWrapper extends AuthorizationWrapper {
  simulationFadeSpinDuration = 100;

  loadRemoteRequestDelay = 0;

  useFadeSpinWrapper = true;

  useSimulationFadeSpin = true;

  simulationFadeSpinDuration = 800;

  hideFadeSpinWrapperAfterLoadRemoteRequest = false;

  showRenderCountInConsole = false;

  viewStyle = {
    backgroundColor: '#fff',
  };

  // loadRemoteRequestAfterMount = false;

  verifySession = true;

  verifyTicket = false;

  verifyTicketValidity = true;

  getGlobal = () => {
    const { global } = this.props;

    return global;
  };

  adjustByScene = (scene) => {
    if (isNumber(scene)) {
      const v = toNumber(scene);

      if (v === 1154) {
        this.ignoreSessionRelatedLogic = true;
      }
    }
  };

  buildSimulationFadeSpinLoading = () => {
    return (
      <View>
        <CenterBox>
          <BallGridBeat size={78} color="#ed5565" />
        </CenterBox>

        <View
          style={{
            paddingTop: transformSize(16),
            color: '#ed5565',
            fontSize: transformSize(28),
          }}
        >
          加载中, 请稍后
        </View>
      </View>
    );
  };

  dispatchCheckTicketValidity = (data) => {
    return this.dispatchApi({
      type: 'entrance/checkTicketValidity',
      payload: data,
    });
  };

  dispatchRefreshSession = (data) => {
    return this.dispatchApi({
      type: 'session/refreshSession',
      payload: data,
    });
  };

  dispatchGetMetaData = (data) => {
    return this.dispatchApi({
      type: 'global/getMetaData',
      payload: data,
    });
  };

  dispatchSignInSilent = (data) => {
    return this.dispatchApi({
      type: 'entrance/signInSilent',
      payload: data,
    });
  };

  parseSignInResultFromRemoteApiData = (remoteData) => {
    const { signInResult } = remoteData;

    return signInResult;
  };

  dispatchRegisterWithWeChat = (data = {}) => {
    return this.dispatchApi({
      type: 'entrance/registerWithWeChat',
      payload: data,
    });
  };

  dispatchExchangePhone = (data = {}) => {
    return this.dispatchApi({
      type: 'session/exchangePhone',
      payload: data,
    });
  };

  dispatchGetCustomer = (data = {}) => {
    return this.dispatchApi({
      type: 'customer/getCustomer',
      payload: data,
    });
  };

  reloadRemoteMetaData = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'global/getMetaData',
      payload: { force: true },
    });
  };

  getRemoteMetaData = () => {
    const { global } = this.props;
    return global;
  };

  parseTokenFromRemoteApiData = (remoteData) => {
    const { token } = remoteData;

    return token || '';
  };

  parseOpenIdFromSignInApiData = (remoteData) => {
    const { openId } = remoteData;

    return openId || '';
  };

  dispatchGetFullAdministrativeDivisionData = (data = {}) => {
    return this.dispatchApi({
      type: 'administrativeDivision/singleListTreeThreeLevel',
      payload: data,
    });
  };

  transformFullAdministrativeDivisionData = () => {
    const { list } = getAdministrativeDivisionFullData();

    return (
      transformListData({
        list: list,
        convert: (data) => {
          const { name, code } = data;

          return {
            label: name,
            value: code,
          };
        },
        recursiveKey: 'children',
      }) || []
    );
  };

  /**
   * 登录校验失败时候的回调, 例如访问需要登录才能调用的接口
   * @returns
   */
  authorizeFailCallback = (remoteData) => {
    logObject(remoteData);
  };

  reverseGeocoder = ({ location, success, fail }) => {
    const map = getQQMapWX();

    map.reverseGeocoder({
      location,
      success,
      fail,
    });
  };

  // eslint-disable-next-line no-unused-vars
  doAfterRegisterWithWeChat = (data) => {
    navigateBack();
  };
}
