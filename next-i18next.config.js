module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el'], // 'el' is the ISO code for Greek
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}; 