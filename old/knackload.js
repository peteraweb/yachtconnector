// load CSS files from CDN
var css_files = ['https://rawgit.com/peteraweb/yachtconnector/master/solution.css'];
LazyLoad.css(css_files, function () {
    console.log('External CSS-es have been loaded');
});

// load JS files from CDN
KnackInitAsync = function ($, callback) {
  window.$ = $;
  LazyLoad.js(['https://rawgit.com/peteraweb/yachtconnector/master/solution.js'], function () {
    console.log('External JS file have been loaded');
    callback();
  });
}