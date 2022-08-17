export const getNextUrl = (index: string) => {
  const url = {
    CARD: `/selfserv/verify/card`,
    BILLING: `/selfserv/verify/billing`,
    EMAIL: `/selfserv/verify/email`,
    DOCUMENT: `/selfserv/verify/document`,
    SELFIE: `/selfserv/verify/selfie`,
    CONFIRMATION: `/selfserv/verify/confirmation`,
  }[index];

  return url || `/`;
};
