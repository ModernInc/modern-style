module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'www/css/style-pre.css': 'sass/style.sass'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        map: true,
      },
      your_target: {
        src: 'www/css/style-pre.css',
        dest: 'www/css/style.css'
      },
    },

    watch: {
      sass: {
        files: [
          'sass/*.sass',
          'sass/**/*.sass',
          'sass/**/**/*.sass',
          'sass/**/**/**/*.sass',
          'sass/**/**/**/**/*.sass',
          'sass/*.scss',
          'sass/**/*.scss',
          'sass/**/**/*.scss',
          'sass/**/**/**/*.scss',
          'sass/**/**/**/**/*.scss',
        ],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['watch']);

};
