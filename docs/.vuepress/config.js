module.exports = {
  title: 'Vue Music Web APP',
  description: 'Docs',
  base: '/vue-muisc-web-app/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/notes/' },
    ],
    sidebar: {
      '/notes/': [
        '',
        '01',
        '02',
        '03',
      ],
    }
  }
};
