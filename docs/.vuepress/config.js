module.exports = {
  title: 'Vue Music Web APP',
  description: 'Docs',
  // base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' },
    ],
    sidebar: {
      '/notes/': [
        '',
        '01',      /* /bar/ */
      ],
    }
  }
};
