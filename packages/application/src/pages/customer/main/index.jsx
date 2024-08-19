import classNames from 'classnames';
import { connect } from 'react-redux';
import { CustomWrapper, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import {
  checkStringIsNullOrWhiteSpace,
  formatDatetime,
  getTodayOfWeek,
} from 'easy-soft-utility';

import { transformSize } from 'taro-fast-common';
import {
  Card,
  // CenterBox,
  ColorText,
  FlexBox,
  HeadNavigation,
  ImageBox,
  Item,
  // Grid,
  Line,
  // Price,
} from 'taro-fast-component/es/customComponents';

import PageWrapper from '../../../customComponents/PageWrapper';
import { filePrefix } from '../../../customConfig/constants';

import './index.less';

export const classPrefix = `root-customer`;

const userBg = `${filePrefix}159012003.jpeg`;
const userDefaultImage = `${filePrefix}1170657881.png`;
const baiSeSheZhiImage = `${filePrefix}541337319.png`;
const gongGaoImage = `${filePrefix}1493599545.png`;
// const woDeWenZhengImage = `${filePrefix}787658066.png`;
// const woDeShouCangImage = `${filePrefix}833387661.png`;
// const geRenZuJiImage = `${filePrefix}1856860839.png`;
// const woDeBaoLiaoImage = `${filePrefix}1752324558.png`;
// const canYuDianChaImage = `${filePrefix}1647028716.png`;
const lianXiWoMenImage = `${filePrefix}2079953995.png`;
const xiTongSheZhiImage = `${filePrefix}1639932649.png`;
// const jiFenImage = `${filePrefix}492262618.png`;
// const shangChengImage = `${filePrefix}2127357864.png`;
// const shippingAddressImage = `${filePrefix}1754622605.png`;

// const boxStyle = {
//   padding: 'var(--tfc-6) var(--tfc-60)',
//   height: 'var(--tfc-120)',
//   color: 'var(--tfc-color-grey)',
// };

// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: '用户中心',
  navigationStyle: 'custom',
});

@connect(({ customer, session, entrance, global, schedulingControl }) => ({
  customer,
  session,
  entrance,
  global,
  schedulingControl,
}))
export default class Index extends PageWrapper {
  viewStyle = {
    backgroundColor: '#f5f5f5',
  };

  gridData = [
    // {
    //   image: woDeWenZhengImage,
    //   text: '我的问政',
    // },
    // {
    //   image: jiFenImage,
    //   text: '学习积分',
    //   onClick: () => {
    //     this.goToScoreCenter();
    //   },
    // },
    // {
    //   image: woDeShouCangImage,
    //   text: '我的收藏',
    //   onClick: () => {
    //     this.goArticleFavourite();
    //   },
    // },
    // {
    //   image: geRenZuJiImage,
    //   text: '个人足迹',
    //   onClick: () => {
    //     this.goArticleAccessHistory();
    //   },
    // },
    // {
    //   image: woDeBaoLiaoImage,
    //   text: '我的爆料',
    // },
  ];

  constructor(properties) {
    super(properties);

    this.state = {
      ...this.state,

      loadApiPath: '',
      info: `今天是${formatDatetime({
        data: new Date(),
        fmt: 'MM月DD日',
      })}, ${getTodayOfWeek()}`,
      weather: '',
      customer: null,
    };
  }

  doWorkAdjustDidMount = () => {
    this.buildCustomerData();

    this.buildWeatherData();
  };

  // eslint-disable-next-line no-unused-vars
  doWorkWhenDidUpdate = (preProperties, preState, snapshot) => {
    const that = this;

    setTimeout(() => {
      that.buildCustomerData();
    }, 800);
  };

  buildWeatherData = () => {
    const that = this;

    that.getLocationWeather({
      callback: (data) => {
        const {
          observe: { degree, weather },
        } = {
          observe: {
            degree: '',
            weather: '',
          },
          ...data,
        };

        if (
          checkStringIsNullOrWhiteSpace(weather) &&
          checkStringIsNullOrWhiteSpace(degree)
        ) {
          return;
        }

        that.setState({
          weather: `, 天气${weather}, 温度${degree}°C`,
        });
      },
    });
  };

  buildCustomerData = () => {
    const { customer } = this.state;

    if ((customer || null) == null) {
      const signInSuccess = this.checkSignInSuccess();

      if (signInSuccess) {
        const that = this;

        that.getCustomer({
          successCallback: (data) => {
            that.setState({
              customer: data,
            });
          },
        });
      }
    }
  };

  openSetting = () => {
    Taro.openSetting();
  };

  buildHeadNavigation = () => {
    const { customer } = this.state;

    const signInSuccess = this.checkSignInSuccess();

    const {
      nickname,
      userId,
      avatar,
      //  score
    } = {
      nickname: '',
      userId: '',
      avatar: userDefaultImage,
      score: 0,
      ...customer,
    };

    return (
      <HeadNavigation
        style={{
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
        }}
        backboardStyle={{
          width: '100%',
          height: '100%',
        }}
        backboardChildren={
          <>
            <ImageBox src={userBg} aspectRatio={0.507} borderRadius={false} />
            {/* <Line color={['#f97220', '#f20201']} height={26} /> */}
          </>
        }
        bottom={
          <View
            style={{
              paddingBottom: transformSize(0),
              zIndex: '10',
              position: 'relative',
            }}
          >
            <CustomWrapper>
              <FlexBox
                style={{ width: '100%' }}
                flexAuto="left"
                left={<View />}
                rightStyle={{
                  marginRight: transformSize(24),
                }}
                right={
                  <View
                    style={{
                      width: transformSize(40),
                    }}
                    onClick={this.openSetting}
                  >
                    <ImageBox src={baiSeSheZhiImage} circle={false} />
                  </View>
                }
              />

              <FlexBox
                style={{ width: '100%' }}
                flexAuto="right"
                leftStyle={{
                  marginLeft: transformSize(24),
                  marginRight: transformSize(24),
                }}
                left={
                  <View
                    style={{
                      width: transformSize(120),
                      borderRadius: transformSize(10),
                      backgroundColor: '#fff',
                    }}
                    onClick={() => {
                      if (!signInSuccess) {
                        this.goToSignIn();
                      }
                    }}
                  >
                    <ImageBox
                      src={avatar || userDefaultImage}
                      imageBoxStyle={{
                        backgroundColor: '#fff',
                      }}
                      errorImage={userDefaultImage}
                    />
                  </View>
                }
                right={
                  <FlexBox
                    flexAuto="bottom"
                    direction="vertical"
                    style={{
                      height: '100%',
                    }}
                    top={
                      <View
                        style={{
                          height: transformSize(40),
                          paddingTop: transformSize(10),
                        }}
                        onClick={() => {
                          if (!signInSuccess) {
                            this.goToSignIn();
                          }
                        }}
                      >
                        <ColorText
                          color="#fff"
                          fontSize={30}
                          text={signInSuccess ? nickname : `点击登录`}
                        />
                      </View>
                    }
                    bottom={
                      <View
                        onClick={() => {
                          if (!signInSuccess) {
                            this.goToSignIn();
                          }
                        }}
                      >
                        <ColorText
                          color="#fff"
                          fontSize={24}
                          textPrefix="账号"
                          separatorStyle={{
                            margin: '0 var(--tfc-6)',
                          }}
                          textStyle={{
                            marginLeft: transformSize(10),
                          }}
                          text={signInSuccess ? userId : `✳✳✳✳✳✳✳`}
                        />
                      </View>
                    }
                  />
                }
              />

              <Line transparent height={30} />
            </CustomWrapper>
          </View>
        }
      >
        <ColorText
          style={{ marginLeft: transformSize(24) }}
          color="#fff"
          fontSize={32}
          text="我的"
        />
      </HeadNavigation>
    );
  };

  renderFurther() {
    const { info, weather } = this.state;

    return (
      <>
        <Line height={20} color="#f5f5f5" />

        <CustomWrapper>
          <View
            className={classNames(`${classPrefix}__info`)}
            onClick={this.buildWeatherData}
          >
            <ColorText
              icon={
                <View
                  style={{
                    width: transformSize(32),
                  }}
                >
                  <ImageBox src={gongGaoImage} />
                </View>
              }
              // color="#fff"
              fontSize={26}
              textStyle={{ paddingLeft: transformSize(6) }}
              text={`${info}${weather}`}
            />
          </View>
        </CustomWrapper>

        <Line height={20} color="#f5f5f5" />

        <Card space={false} border={false} bodyBorder={false}>
          <Item
            prefix={
              <View
                style={{
                  width: transformSize(34),
                }}
              >
                <ImageBox src={lianXiWoMenImage} />
              </View>
            }
            label="联系我们"
            arrow
            arrowColor="#d2d2d2"
            clickable
            onClick={() => {
              this.goToContact();
            }}
          />

          <Item
            prefix={
              <View
                style={{
                  width: transformSize(34),
                }}
              >
                <ImageBox src={xiTongSheZhiImage} />
              </View>
            }
            label="系统设置"
            border={false}
            arrow
            arrowColor="#d2d2d2"
            clickable
            onClick={this.openSetting}
          />
        </Card>
      </>
    );
  }
}
