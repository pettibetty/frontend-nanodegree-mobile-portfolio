module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js',
        src: 'js/perfmatters.js',
        dest: 'js/perfmatters.min.js'
        
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'compressed/',
            cwd: 'views/images/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'compressed/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'compressed/',
            cwd: 'views/images/',
            src: ['**/*.jpg'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'compressed/',
            ext: '.jpg'
          }
        ]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/minify',
          ext: '.min.css'
        }]
      }
    },

    availabletasks: {
      tasks: {
        options: {
          filter: 'exclude',
          tasks: ['availabletasks', 'tasks']
        }
      }              
    },

    responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'small', width: 320
          }, {
            name: 'medium', width: 640
          },{
            name: 'large', width: 1024
          }]
        },
        files: [{
          expand: true,
          src: ['compressed/*.{jpg,gif,png}'],
          cwd: '/Users/bernadettepluempe/Documents/dev/work/nanodegree/frontend-nanodegree-mobile-portfolio/',
          dest: 'dist/'
        }]
      }
    },
    
    responsive_images_extender: {
      main: {
        options: {
          sizes: [{
            selector: 'img',
            sizeList: [{
              cond: 'min-width: 300px',
                size: '50vw'
              }, {
                cond: 'min-width: 700px',
                size: '70vw'
              }, {
                cond: 'default',
                size: '100vw'
            }]
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{html,htm,php}'],
          cwd: '/Users/bernadettepluempe/Documents/dev/work/nanodegree/frontend-nanodegree-mobile-portfolio/',
          dest: 'dist/'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  //Imagemin plugin
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);

  //css file minify
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  //resizing images
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

  grunt.loadNpmTasks('grunt-responsive-images-extender');

  //Grunt: How to list available tasks
  grunt.loadNpmTasks('grunt-available-tasks');
  grunt.registerTask('tasks', ['availabletasks']);
};
