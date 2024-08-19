import { request } from 'easy-soft-utility';

export const signInDataApiAddress = '/share/signIn';

export async function signInData(parameters) {
  return request({
    api: signInDataApiAddress,
    params: parameters,
  });
}

export const signInSilentDataApiAddress = '/metaData/signInSilent';

export async function signInSilentData(parameters) {
  return request({
    api: signInSilentDataApiAddress,
    params: parameters,
  });
}

export const registerWithWeChatDataApiAddress = '/metaData/registerWithWeChat';

export async function registerWithWeChatData(parameters) {
  return request({
    api: registerWithWeChatDataApiAddress,
    params: parameters,
  });
}

export const checkTicketValidityDataApiAddress =
  '/metaData/checkTicketValidity';

export async function checkTicketValidityData(parameters) {
  return request({
    api: checkTicketValidityDataApiAddress,
    params: parameters,
  });
}
