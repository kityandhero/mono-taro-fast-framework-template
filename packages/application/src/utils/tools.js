import {
  checkStringIsNullOrWhiteSpace,
  navigateTo,
  redirectTo,
  showSimpleErrorMessage,
  toNumber,
} from 'easy-soft-utility';

import { pathCollection } from '../customConfig/pathConfig';
import QQMapWX from '../libs/qqmap-wx-jssdk.min';

/**
 * 获取本地数据
 * @export
 * @param {*} key
 * @param {*} value
 */
export function getQQMapWX() {
  const mapSdk = new QQMapWX({
    key: 'FHSBZ-INGWK-ANPJF-AJ4DG-LPTRS-HAFGY',
  });

  return mapSdk;
}

function buildArticlePath(articleId) {
  return `${pathCollection.section.article.path}?articleId=${articleId}`;
}

export function goToArticle({ articleId, renderType, title, redirect }) {
  if (toNumber(renderType) === 30) {
    goToArticleWebPage({
      articleId,
      path: pathCollection.webpage.article.path,
      title,
      url: redirect,
    });

    return;
  }

  navigateTo(buildArticlePath(articleId));
}

export function redirectToArticle({ articleId, renderType, title, redirect }) {
  if (toNumber(renderType) === 30) {
    redirectToArticleWebPage({
      articleId,
      path: pathCollection.webpage.article.path,
      title,
      url: redirect,
    });

    return;
  }

  redirectTo(buildArticlePath(articleId));
}

export function goToMediaContent({ articleId, renderType, title, redirect }) {
  if (toNumber(renderType) === 30) {
    goToArticleWebPage({
      articleId,
      path: pathCollection.webpage.article.path,
      title,
      url: redirect,
    });

    return;
  }

  navigateTo({
    url: `${pathCollection.section.mediaContent.path}?articleId=${articleId}`,
  });
}

export function redirectToMediaContent({
  articleId,
  renderType,
  title,
  redirect,
}) {
  if (toNumber(renderType) === 30) {
    redirectToArticleWebPage({
      articleId,
      path: pathCollection.webpage.article.path,
      title,
      url: redirect,
    });

    return;
  }

  redirectTo({
    url: `${pathCollection.section.mediaContent.path}?articleId=${articleId}`,
  });
}

function buildScoreProductPath(scoreProductId) {
  return `${pathCollection.customer.scoreProductDetail.path}?scoreProductId=${scoreProductId}`;
}

export function goToScoreProductDetail(scoreProductId) {
  navigateTo(buildScoreProductPath(scoreProductId));
}

export function redirectToArticleWebPage({ articleId, path, title, url }) {
  if (checkStringIsNullOrWhiteSpace(url)) {
    const text = '缺少目标页面地址, 无法跳转';

    showSimpleErrorMessage(text);

    return;
  }

  const titleEncode = encodeURIComponent(title || '');
  const urlEncode = encodeURIComponent(url);

  redirectTo(
    `${path}?articleId=${articleId}&title=${titleEncode}&url=${urlEncode}`,
  );
}

export function goToArticleWebPage({ articleId, path, title, url }) {
  if (checkStringIsNullOrWhiteSpace(url)) {
    const text = '缺少目标页面地址, 无法跳转';

    showSimpleErrorMessage(text);

    return;
  }

  const titleEncode = encodeURIComponent(title || '');
  const urlEncode = encodeURIComponent(url);

  navigateTo(
    `${path}?articleId=${articleId}&title=${titleEncode}&url=${urlEncode}`,
  );
}

export function goToGeneralWebPage({ path, title, url }) {
  if (checkStringIsNullOrWhiteSpace(url)) {
    const text = '缺少目标页面地址, 无法跳转';

    showSimpleErrorMessage(text);

    return;
  }

  const titleEncode = encodeURIComponent(title || '');
  const urlEncode = encodeURIComponent(url);

  navigateTo(`${path}?title=${titleEncode}&url=${urlEncode}`);
}

/**
 * 占位函数
 *
 * @export
 * @returns
 */
export function empty() {
  return {};
}
