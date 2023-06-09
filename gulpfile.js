'use strict'; //should make variables global
//This provides a great tutorial: https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js#h-using-the-first-plugin

// require("dotenv").config(); //should call the dotenv package for security

// console.log(process.env);
const gulp = require('gulp'); //calls gulp

/*
npm install --save-dev gulp-concat  //compiles js files
npm install --save-dev gulp-replace //should be used to clear browser cache
npm install --save-dev gulp-babel  //used to make js files backwards compatible on browsers
npm install --save-dev gulp-uglify //minifies js files
npm install --save-dev gulp-rename
npm install --save-dev gulp-eslint //searches js files for errors
npm install --save-dev gulp-sass
npm install --save-dev sass //you need both the gulp and the node sass


if using eslint, in the project root (not themes), run
npx install-peerdeps --dev eslint-config-airbnb-base
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint eslint-plugin-yml

run npm ls and check if everything's installed, but need to try to install prettier and postcss

*/
const { series, parallel, watch, src, dest } = require('gulp'); //sets the helpers
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));


//newest way to write gulp function as of 2022
// function taskName(cb) {
//     cb(new Error('Something bad has happened'));
// }

// function generateCSS(cb) {
//     src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('public/stylesheets'));
//     cb();
// }

// exports.css = generateCSS;


function compileJs() {
    return src(['js/custom/*.js', '!node_modules/**', 'js/vendor/*.js'], { sourcemaps: true })
        .pipe(babel())
        .pipe(concat('main-unuglified.js'))
        .pipe(dest('js/'))
        .pipe(rename('main.js'))
        .pipe(uglify())
        .pipe(dest('js/', { sourcemaps: '.' }));
}

function compileScss() {
    return src('assets/scss/components/**/*.scss', { sourcemaps: true })
        .pipe(concat('styles-unminified.scss'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(dest('assets/dist/css/'))
        .pipe(rename('styles.css'))
        .pipe(dest('assets/dist/css/'))
}

function watchScss() {
    watch('assets/scss/modules/**/*.scss', compileScss);
}

function watchJS() {
    watch('js/custom/*.js', compileJs);
    watch('js/vendor/*.js', compileJs);
}

exports.compileSass = compileScss;
exports.compileJavascript = compileJs;
exports.watchJavascript = watchJS;
exports.watchSass = watchScss;

exports.default = series(compileScss,compileJs,parallel(watchScss,watchJS));
