const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/assets/js')
    .js('resources/js/bootstrap.js', 'public/assets/js')
    .js('resources/js/stringee.js', 'public/assets/js')
    .js('resources/js/livewire-turbolinks.js', 'public/assets/js')
    .sass('resources/css/app.scss', 'public/assets/css')
    .copyDirectory('resources/metronic/src/assets/media', 'public/assets/media')
    // .purgeCss({enabled: true})
    .extract();
if (mix.inProduction()) {
    mix.version();
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    });
}
