/**
 * Created by spy on 15-1-15.
 */

module.exports = function (grunt) {
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};
