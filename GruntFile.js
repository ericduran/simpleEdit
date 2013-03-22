/*
 *
 */
module.exports = function(grunt) {

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    bower: {
      target: {
        rjsConfig: './src/simple/main.js'
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/simple/*.js',
        'src/simple/**/*.js'
      ]
    }
  });

  // Default task.
  grunt.registerTask('default', ['bower', 'jshint']);
};
