const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

//example
gulp.task('build', function() {
  let stream = gulp.src('app/**')
    .pipe(gulp.dest('build'));
  return stream;
});

//example
gulp.task("ts", function () {
  let stream = tsProject.src()
    .pipe(tsProject())
    .js //do something with the .js output
    .pipe(gulp.dest('dist'));
});

//for more, see typescript documentation