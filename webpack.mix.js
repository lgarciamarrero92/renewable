const mix = require('laravel-mix');
const webpack = require('webpack');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').version()
   .sass('resources/sass/app.scss', 'public/css').version();

/*
mix.webpackConfig({
   "plugins": [
      new webpack.IgnorePlugin(/(fs|child_process)/),
   ]
});
*/
