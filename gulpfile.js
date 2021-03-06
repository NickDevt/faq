const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create(); /*browserSync надстройка*/
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");





gulp.task('sass-compile', function(){    			 /*Название функции и её открытие*/
		return gulp.src('./project/scss/*.scss') 	/*Где будут храниться scss файлы, возможна запись типа /** /*.scss  означающая любую папку    */
		.pipe(sourcemaps.init())									/**хз, карту прописывает какую-то**/  /** **/
		.pipe(sass().on('error', sass.logError))  /**Выводите ошибки пожалуйста **/
		.pipe(sourcemaps.write('./')) 						/** Сурсмап опять этот хз**/
		.pipe(gulp.dest('./project/css/'))				/** Куда сохранять css **/
	})

	gulp.task('serve', function() {
	    browserSync.init({
	        server: {
	            baseDir: "./"
	        }
	    });
			browserSync.watch('./project/*', browserSync.reload)
	});



gulp.task('watch', function(){
	gulp.watch('./project/scss/*.scss', gulp.series('sass-compile'))   /**где смотреть, что выполнять постоянно(отсылка к предыдущему таску) **/
});


// gulp.task('default', gulp.series(
// 	gulp.parallel('watch', 'serve')
// ));
