module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'assets/javascripts/*.js',
        dest: 'assets/javascripts/scripts.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'assets/stylesheets',
          src: ['style.sass'],
          dest: 'assets/stylesheets/',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['assets/stylesheets/*.sass'],
        tasks: ['sass'],
      },
      scripts: {
        files: ['assets/javascripts/*.js'],
        tasks: ['uglify'],
      },
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

};