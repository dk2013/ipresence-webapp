var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 
        'node_modules/node-normalize-scss/_normalize.scss', 'src/scss/*.scss'])
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 
        'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], 
        gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('js','serve'));