var gulp=require("gulp");
var less=require("less");
var $=require('gulp-load-plugins')();
   var cleancss=require("gulp-clean-css");//压缩代码
// var concat=require("gulp-concat");
//less文件编译成css文件并压缩
gulp.task('less',function () {
    return gulp.src('app/styles/*.less')
        .pipe($.less())
           .pipe(cleancss())//压缩
        .pipe(gulp.dest('dist/css'));
});
/*当改变代码的时候改变*/
gulp.task("dist",function () { 
    gulp.watch("app/styles/*.less",['less']);//编译和压缩CSS文件
});
