import { historySecretKey } from "../configurations";

const checkSecureKey = (token: string): void | boolean => {
  return token === historySecretKey;
};

export { checkSecureKey };
