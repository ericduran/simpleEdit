/*
 *
 */
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-compass');

  // Project configuration.
  grunt.initConfig({
    test: {
      all: ['test/**/*.js']
    },
    lint: {
      all: [
        'grunt.js',
        'src/simple/*.js',
        'src/simple/*/*.js'
      ]
    },
    watch: {
      scripts: {
        files: '<config:lint.all>',
        tasks: 'lint'
      }
    },
    compass: {
        dev: {
            src: 'assets/scss',
            dest: 'assets/dev/css',
            linecomments: true,
            forcecompile: true,
            require: [
              'animate-sass',
              'mylib'
            ],
            debugsass: true,
            images: '/path/to/images',
            relativeassets: true
        },
        prod: {
            src: 'assets/scss',
            dest: 'assets/prod/css',
            outputstyle: 'compressed',
            linecomments: false,
            forcecompile: true,
            require: [
              'animate-sass',
              'mylib'
            ],
            debugsass: false,
            images: '/path/to/images',
            relativeassets: true
        }
    },
    jshint: {
      options: {
        boss: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        eqnull: true,
        browser: true,
        node: true,
        jquery: true,
        es5: true,
        strict: false
      },
      globals: {}
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

};
