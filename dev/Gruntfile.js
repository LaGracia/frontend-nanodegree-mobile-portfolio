// Configuration of Grunt
module.exports = function(grunt) {

    // Configuration of project and tasks using metadata stored in package.json
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compress PNG images using pngquant
        pngmin: {
            target: {
                options: {
                    ext: '.png'
                },
                files: [
                    {
                        src: 'dev/img/*.png',
                        dest: 'prod/img/'
                    },
                    {
                        src: 'dev/views/images/*.png',
                        dest: 'prod/views/images/'
                    }
                ]
            }
        },
        // Concatenate CSS of main and pizza pages
        concat: {
            main: {
                src: ['dev/css/*.css'],
                dest: 'prod/css/styles.css'
            },
            views: {
                src: ['dev/views/css/*.css'],
                dest: 'prod/views/css/stylesheet.css'
            }
        },
        // Inline CSS of main page
        inlinestyles: {
            main: {
                files: {
                    'prod/index.html': 'dev/index.html'
                }
            }
        },
        // Minify concatenated CSS of pizza page
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'prod/views/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'prod/views/css',
                        ext: '.min.css'
                    }
                ]
            }
        },
        // Minify JS of main and pizza pages using UglifyJS
        uglify: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'dev/js/',
                        src: '**.js',
                        dest: 'prod/js/',
                        ext: '.min.js'
                    },
                    {
                        expand: true,
                        cwd: 'dev/views/js/',
                        src: '**.js',
                        dest: 'prod/views/js/',
                        ext: '.min.js'
                    }
                ]
            }
        }

    });

    // Load all plugins (project dependencies) installed via npm install
    grunt.loadNpmTasks('grunt-pngmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-inlinestyles')
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Defines default tasks that will run via Terminal command "grunt"
    grunt.registerTask('default', ['pngmin', 'concat','inlinestyles', 'cssmin', 'uglify']);

};