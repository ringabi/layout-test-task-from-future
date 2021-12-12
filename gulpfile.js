const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');

const sassCompile = () => {
  console.log('Компиляция SASS');
  return src('app/scss/style.scss')
    .pipe(sass())
    .pipe(dest('build/'));
}

const pugCompile = () => {
  console.log('Компиляция PUG');
  return src('app/html/index.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

exports.default = parallel(sassCompile, pugCompile);
exports.sassCompile = sassCompile;
exports.pugCompile = pugCompile;