let mix = require('laravel-mix');

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

mix.js([
        'resources/assets/webs/js/app.js',
    ], 'public/assets/webs/app.js');
mix.sass('resources/assets/webs/css/app.scss', 'public/assets/webs/app.css');

mix.js([
    'resources/assets/admins/js/app.js',
    'resources/assets/admins/js/item-detail.js',
], 'public/assets/admins/app.js');
mix.sass('resources/assets/admins/css/app.scss', 'public/assets/admins/app.css');
/*mix.sass([
        'resources/assets/webs/css/app.scss',
        'resources/assets/webs/css/header.scss'
    ], 'public/assets/webs/css/app.css');*/
/*mix.js([
        // 'resources/assets/js/app.js',
        'resources/assets/webs/js/app.js',
    ], 'public/webs/js/app.js')
    .styles([
        'resources/assets/webs/css/app.css',
        'resources/assets/webs/css/header.css',
    ], 'public/webs/css/app.css');*/
mix.browserSync({
    proxy: 'store.local',
    // startPath: 'resources',
    files: [
        "resources/**",
        // "resources/**/*.scss",
        // "resources/**/*.js",
        // "resources/**/*.php",
        // "**/*.css",
        // "**/*.js",
        // "**/*.php"
    ]
});
mix.sourceMaps();
