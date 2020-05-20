let gulp         = require('gulp');
let browserSync  = require('browser-sync').create();
let sass         = require('gulp-sass');
let concat       = require('gulp-concat');
let autoprefixer = require('gulp-autoprefixer');
let gulpif       = require('gulp-if');
let uglify       = require('gulp-uglify-es').default;
let useref       = require('gulp-useref');
let rename       = require('gulp-rename');
let del          = require('del');
let template     = require('gulp-template-compile');

gulp.task('sass', function() {
    return gulp.src(['node_modules/node-normalize-scss/_normalize.scss', 
        'src/scss/**/*.scss'])
        .pipe(sass({outputStyle: 'compressed', 
            includePaths: require('node-normalize-scss').includePaths}))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('templates', function (done) {
    gulp.src('src/templates/**/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('src/js'));
        done();
});

gulp.task('js', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        // .pipe(concat('libs.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('serve', function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/scss/*.scss'], gulp.series('sass'));
    gulp.watch(['src/templates/**/*.html'], gulp.series('templates')).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
});

gulp.task('clean', function(done) {
    del.sync('dist');
    done();
});

// Build Production Site
gulp.task('build', gulp.series('clean', 'js', 'templates', 'img', 'sass', 'fonts', 'html'));

gulp.task('default', gulp.series('js','serve'));