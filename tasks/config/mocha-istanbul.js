/**
 * Created by spy on 15-1-15.
 */
module.exports = function (grunt) {
    grunt.config.set('mocha-istanbul', {
        coverage: {
            src: 'test',
            options: {
                mask: '*.test.js'
            }
        },



    })
}