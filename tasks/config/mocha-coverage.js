/**
 * Created by spy on 15-1-15.
 */
module.exports = function (grunt) {
    grunt.config.set('mocha-coverage', {
        coverage: {
            src: 'test',
            options: {
                coverageFolder: 'coverage',
                mask: '**/*.test.js',
                root: 'api/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-istanbul');
};