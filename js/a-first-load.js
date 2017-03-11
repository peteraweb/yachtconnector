/************************************************************************************************************************************************************************************
 *  JAVASCRIPT LIBRARIES
 ************************************************************************************************************************************************************************************/
/*
LazyLoad.js(['https://code.jquery.com/jquery-1.12.4.min.js'], function () {
    console.log('Loaded external files!');
});
LazyLoad.js(['https://cdnjs.cloudflare.com/ajax/libs/jquery-footable/3.1.4/footable.js'], function () {
    console.log('Loaded external files!');
});
*/

// load CSS files from CDN
/*
var css_files = ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'];
LazyLoad.css(css_files, function () {
    console.log('External CSS-es have been loaded');
});
*/
var css_files = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'];
LazyLoad.css(css_files, function () {
    console.log('External CSS-es have been loaded');
});

// load JS files from CDN
/*
LazyLoad.js(['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'], function () {
    console.log('Loaded external files!');
});
*/