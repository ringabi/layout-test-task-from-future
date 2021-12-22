const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

const sassCompile = () => {
  console.log('Компиляция SASS и установка префиксов');
  return src('app/scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest('build/'));
};

const pugCompile = () => {
  console.log('Компиляция PUG');
  return src('app/html/index.pug')
    .pipe(pug())
    .pipe(dest('build/'));
};

const minifyCss = () => {
  console.log('Минимизация CSS');
  return src('build/style.css')
    .pipe(cleanCss())
    .pipe(dest('build/'));
};

exports.default = parallel(sassCompile, pugCompile);
exports.sassCompile = sassCompile;
exports.pugCompile = pugCompile;
exports.minifyCss = minifyCss;
