import { connect } from 'react-redux';

import { WebPageBase } from 'taro-fast-framework/es/framework';

// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: '网页容器',
});

@connect(({ schedulingControl }) => ({
  schedulingControl,
}))
export default class Index extends WebPageBase {}
