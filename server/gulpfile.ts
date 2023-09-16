import gulp from "gulp";
import gulpTS from "gulp-typescript";
import uglify from "gulp-uglify";

const transferJSON = () =>
  gulp
    .src("src/**/*.json", {
      base: "./src",
      allowEmpty: true,
    })
    .pipe(gulp.dest("dist"));

const compileTS = () => {
  const ts_project = gulpTS.createProject("tsconfig.json");

  return gulp
    .src("./src/**/*")
    .pipe(ts_project())
    .on("error", () =>
      console.error("Despite TsProject errors found, proceeding with gulp")
    )
    .js.pipe(uglify())
    .pipe(gulp.dest("dist"));
};

const tasks = gulp.series(transferJSON, compileTS);
export default tasks;
