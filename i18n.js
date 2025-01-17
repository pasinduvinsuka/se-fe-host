// i18n.js
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de', 'fr'],
});

export default NextI18NextInstance;
export const { appWithTranslation, withTranslation, i18n } =
  NextI18NextInstance;
