import { request } from 'easy-soft-utility';

export const signInDataApiAddress = '/entrance/signIn';

export async function signInData(parameters) {
  return request({
    api: signInDataApiAddress,
    params: parameters,
  });
}

export const signInSilentDataApiAddress = '/entrance/signInSilent';

export async function signInSilentData(parameters) {
  return request({
    api: signInSilentDataApiAddress,
    params: parameters,
  });
}

export const registerWithWeChatDataApiAddress = '/entrance/registerWithWeChat';

export async function registerWithWeChatData(parameters) {
  return request({
    api: registerWithWeChatDataApiAddress,
    params: parameters,
  });
}

export const checkTicketValidityDataApiAddress =
  '/entrance/checkTicketValidity';

export async function checkTicketValidityData(parameters) {
  return request({
    api: checkTicketValidityDataApiAddress,
    params: parameters,
  });
}
