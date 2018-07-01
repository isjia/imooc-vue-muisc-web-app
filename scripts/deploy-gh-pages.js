var ghpages = require('gh-pages');

ghpages.publish('docs/.vuepress/dist', function (err) {
  if (err) {
    console.log('deploy gh-pages error: \n', err);
  }
  else {
    console.log('success: deploy docs to gh-pages');
  }
});
