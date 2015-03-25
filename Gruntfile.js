module.exports = function (grunt) {
	var gamePath = "game/fruitguess/";

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					baseUrl: "src/js/",
					name: 'app/app',
					optimize: 'none',
					out: gamePath + 'src/app.js'
				}
			}
		},
    uglify: {
      target: {
        files: {
          'game/fruitguess/src/app.min.js': ['game/fruitguess/src/app.js']
        }
      }
    },
		copy: {
			res: {
				files: [
					{
						expand: true,
						cwd: 'src/res/',
						src: ['**'],
						dest: gamePath + 'res/'
					}
				]
			},
			web: {
				files: [
					{
						expand: true,
						cwd: 'src/web/',
						src: ['**'],
						dest: gamePath
					}
				]
			},
			android: {
				files: [
					{
						src: gamePath + "src/app.js",
						dest: gamePath + "frameworks/runtime-src/proj.android/assets/src/app.js"
					},
					{
						expand: true,
						cwd: 'src/web/',
						src: ['**'],
						dest: gamePath + "frameworks/runtime-src/proj.android/assets/"
					}, {
						expand: true,
						cwd: 'src/res/',
						src: ['**'],
						dest: gamePath + 'frameworks/runtime-src/proj.android/assets/res/'
					}
				]
			}
		},
		watch: {
			dev: {
				files: ['src/js/**/*.js'],
				tasks: ['requirejs', 'uglify']
			},
			web: {
				files: ['src/web/*.*'],
				tasks: ['copy:web']
			},
			res: {
				files: ['src/res/**/*.*'],
				tasks: ['copy:res']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);

	grunt.registerTask('init', ['requirejs', 'uglify', 'copy']);
	
};
