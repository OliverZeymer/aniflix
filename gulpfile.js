import gulp from "gulp"
import uglifyjs from "gulp-uglify"
import imagemin from "gulp-imagemin"
import connect from "gulp-connect"
import htmlmin from "gulp-html-minifier"
import tempSass from "sass"
import gulpSass from "gulp-sass"

const sass = gulpSass(tempSass)

function html() {
    return gulp.src("src/*.html")
    .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
    .pipe(gulp.dest("build"))
    .pipe(connect.reload())
}
function css() {
    return gulp.src("src/assets/styles/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
        .pipe(gulp.dest("build/assets/styles"))
        .pipe(connect.reload())
}

function js() {
    return gulp.src("src/assets/js/*.js")
        .pipe(uglifyjs())
        .pipe(gulp.dest("build/assets/js"))
        .pipe(connect.reload())
}

function images() {
    return gulp.src("src/assets/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/assets/img"))
        .pipe(connect.reload())
}

function watchCss() {
    gulp.watch("src/assets/styles/**/*.scss", { events: "all", ignoreInitial:false}, async function(cb) {
        css()
    })
}

function watchJs() {
    gulp.watch("src/assets/js/*.js", { events: "all", ignoreInitial:false}, async function(cb) {
        js()
    })
}

function watchHtml() {
    gulp.watch("src/*.html", { events: "all", ignoreInitial:false}, async function(cb) {
        html()
    })
}

function watchImages() {
    gulp.watch("src/assets/img/*", { events: "all", ignoreInitial:false}, async function(cb) {
        images()
    })
}

function server() {
    connect.server({
        root: "build",
        livereload: true
    })

}

export const watcher = gulp.parallel([watchCss, watchJs, watchHtml, watchImages])
export { css, js, images, html }
export default gulp.parallel(watcher, server)
