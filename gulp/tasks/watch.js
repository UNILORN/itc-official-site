const gulp = require('gulp')
const config = require('../config')
const $ = config.plugins

const watch = () => {
  $.watch(config.copy.src.globs, () => {
    gulp.start('copy')
  })

  $.watch(config.html.src.globs, () => {
    gulp.start('html')
  })

  $.watch(config.images.src.globs, () => {
    gulp.start('images')
  })

  gulp.start('scripts')

  $.watch(config.styles.src.globs, () => {
    gulp.start('styles')
  })
}

gulp.task('watch', watch)
