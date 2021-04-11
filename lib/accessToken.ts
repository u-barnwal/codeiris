import moment from 'moment';
import { isServer } from './apollo';
import { refresh } from '../utils/GlobalConstants';

let accessToken = undefined;
let refreshToken = undefined;
let expiry = null;

export const setAccessToken = (s: string) => (accessToken = s);
export const getAccessToken = () => accessToken;
export const setRefreshToken = (s: string) => (refreshToken = s);

export const isExpired = () => {
  if (accessToken === '' || accessToken === undefined || expiry === null) {
    return false;
  }
  return !moment().isAfter(moment(expiry).add(1, 'minute'));
};

export const setExpiry = () => (expiry = new Date());
export const setCustomExpiry = (d) => (expiry = d);
export const getExpiry = () => expiry;

export const getRefreshToken = () => {
  if (refreshToken === '' || refreshToken === undefined) {
    if (!isServer()) {
      const token = sessionStorage.getItem(refresh);
      if (token) {
        refreshToken = token;
      }
    }
  }
  return refreshToken;
};
