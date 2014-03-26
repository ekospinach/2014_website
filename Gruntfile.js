module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {   
		    dist: {
		        src: [
		            'js/libs/*.js', // All JS in the libs folder
		            'js/app.js'  // This specific file
		        ],
		        dest: 'js/app_compiled.js',
		    }
		},
		uglify: {
		    build: {
		        src: 'js/app_compiled.js',
		        dest: 'js/app.min.js'
		    }
		},
		sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'css/styles.pre.css': 'css/styles.scss'
		        }
		    } 
		},
        autoprefixer: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.pre.css'
                }
            }
        },
        shell: {
	      build_index: {
			command: 'node build.js',
			options: {
				stdout: true
			}      
	      }  
        },
		watch: {
		  options: {
		        livereload: true,
		    },
		    templates: {
			  files: ['*.hbs'],
			  tasks: ['shell:build_index'],
			  options: {
				  spawn: false,
			  }, 			    
		    },
		    scripts: {
		        files: ['js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
			css: {
			    files: ['css/*.scss','css/components/*.scss'],
			    tasks: ['sass','autoprefixer'],
			    options: {
			        spawn: false,
			    }
			}
		},
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
   
    
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['shell','concat','uglify','sass','autoprefixer']);

};