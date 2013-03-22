/*
 *
 */
module.exports = function(grunt) {

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-compass');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'src/simple/*.js',
        'src/simple/**/*.js'
      ]
    }
  });

  // Default task.
  grunt.registerTask('default', 'jshint');
};
