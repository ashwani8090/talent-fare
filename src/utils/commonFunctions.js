import { NativeModules, Platform } from 'react-native';

import messages_en from '@locale/en.json';

export const getMessages = () => ({
  en: messages_en,
});

export const getLocale = () => {
  let locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager?.settings?.AppleLocale?.split(/[_|-]/)[0]
      : NativeModules.I18nManager?.localeIdentifier?.split(/[_|-]/)[0];

  const messages = getMessages();

  if (!messages[locale]) {
    locale = 'en';
  }
  return locale;
};

export const isJSONParsable = (string) => {
  try {
    JSON.parse(string);
    return true;
  } catch {
    return false;
  }
};

export const getNameInitials = (input) => {
  const initials =
    input && typeof input === 'string'
      ? input
        ?.replace(/[^a-zA-Z- ]/g, '')
        ?.match(/\b\w/g)
        ?.join('')
      : '';

  return initials?.toUpperCase() ?? '';
};

export const getNameFormat = (input) => {
  const names = input.split(' ');
  return `${names?.[0]?.slice(0, 1)?.toUpperCase()}${names?.[0]?.slice(
    1,
  )} ${names?.[1]?.slice(0, 1)?.toUpperCase()}${names?.[1]?.slice(1)}`;
};
