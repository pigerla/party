/**
 * Get coverage with mocha_istanbul
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/pocesar/grunt-mocha-istanbul
 * Created by spy on 15-1-16.
 */
module.exports = function(grunt) {
    grunt.config.set('mocha_istanbul', {
        coverage: {
            src: 'test', // the folder, not the files
            options: {
                coverageFolder: 'coverage',
                mask: '**/*.test.js',
                root: 'api/'
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-istanbul');
};
