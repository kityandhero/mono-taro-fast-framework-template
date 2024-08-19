import { isArray, isFunction, whetherNumber } from 'easy-soft-utility';

import { navigateTo, switchTab } from 'taro-fast-common/es/utils/tools';
import { getVerifySignInResult } from 'taro-fast-framework/es/utils/tools';

import { pathCollection } from '../../customConfig/pathConfig';
import PageWrapperCore from '../PageWrapperCore';

export default class PageWrapper extends PageWrapperCore {
  checkSignInSuccess = () => {
    const verifySignInResult = getVerifySignInResult();
    const v = this.getSignInResult();

    return v === verifySignInResult.success;
  };

  getSectionList = () => {
    const { sectionList } = this.getMetaData();

    return isArray(sectionList) ? sectionList : [];
  };

  getScoreRankList = () => {
    const { scoreRankList } = this.getMetaData();

    const result = isArray(scoreRankList) ? scoreRankList : [];

    result.unshift({
      galleryImageUrl: '',
      imageUrl: '',
      key: '-10000',
      name: '全部',
      platformId: '1506187494360748032',
      scoreRankId: '-10000',
      title: '全部',
    });

    return result;
  };

  goToHomeTab(callback = null) {
    switchTab({
      url: `${pathCollection.root.home.path}`,
      success: () => {
        if (isFunction(callback)) {
          callback();
        }
      },
    });
  }

  goToEmpty = ({ callback = null }) => {
    navigateTo({
      url: `${pathCollection.section.empty.path}`,
      success: () => {
        if (isFunction(callback)) {
          callback();
        }
      },
    });
  };

  goToSection = ({ sectionId, callback = null }) => {
    navigateTo({
      url: `${pathCollection.section.section.path}?sectionId=${sectionId}`,
      success: () => {
        if (isFunction(callback)) {
          callback();
        }
      },
    });
  };

  goToSignIn = () => {
    navigateTo({
      url: pathCollection.customer.signIn.path,
    });
  };

  goToSearch = () => {
    navigateTo({
      url: pathCollection.section.search.path,
    });
  };

  goToDiscuss = () => {
    navigateTo({
      url: `${pathCollection.section.discuss.path}?sectionId=1529001474770735104`,
    });
  };

  goToDiscussAdd = ({ articleId, callback = null }) => {
    navigateTo({
      url: `${pathCollection.section.discussAdd.path}?articleId=${articleId}`,
      success: () => {
        if (isFunction(callback)) {
          callback();
        }
      },
    });
  };

  goToContact = () => {
    navigateTo({
      url: pathCollection.section.contact.path,
    });
  };

  goToCheckIn = () => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.checkIn.path,
    });
  };

  goToScoreCenter = () => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.scoreCenter.path,
    });
  };

  goToScoreExchangeConfirm = (scoreProductId) => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: `${pathCollection.customer.scoreExchangeConfirm.path}?scoreProductId=${scoreProductId}`,
    });
  };

  goToScoreExchangeSuccess = (scoreOrderId) => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: `${pathCollection.customer.scoreExchangeSuccess.path}?scoreOrderId=${scoreOrderId}`,
    });
  };

  goToScoreExchangePageList = () => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.scoreExchangePageList.path,
    });
  };

  goToShippingAddressSingleList = ({ fromExchange = false }) => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: `${
        pathCollection.customer.shippingAddressSingleList.path
      }?fromExchange=${!!fromExchange ? whetherNumber.yes : whetherNumber.no}`,
    });
  };

  goToShippingAddressAdd = () => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.shippingAddressAdd.path,
    });
  };

  goToShippingAddressEdit = (shippingAddressId) => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: `${pathCollection.customer.shippingAddressEdit.path}?shippingAddressId=${shippingAddressId}`,
    });
  };

  goArticleFavourite = () => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.articleFavourite.path,
    });
  };

  goArticleAccessHistory = () => {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.articleAccessHistory.path,
    });
  };

  goToScoreMall() {
    const signInSuccess = this.checkSignInSuccess();

    if (!signInSuccess) {
      this.goToSignIn();

      return;
    }

    navigateTo({
      url: pathCollection.customer.scoreMall.path,
    });
  }
}
