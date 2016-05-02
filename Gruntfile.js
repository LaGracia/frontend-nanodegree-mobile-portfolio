// Configuration of Grunt
module.exports = function(grunt) {

    // Configuration of project and tasks using metadata stored in package.json
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compress all PNG images using pngquant
        pngmin: {
            target: {
                options: {
                    ext: '.png'
                },
                files: [{
                    src: 'source/img/*.png',
                    dest: 'build/img/'
                },
                {
                    src: 'source/views/images/*.png',
                    dest: 'build/views/images/'
                }]
            }
        },
        // Inline CSS of main page
        inlinestyles: {
            main: {
                files: {
                    'build/index.html': 'source/index.html'
                }
            }
        },
       // Combine CSS files for pizza page
        cssmin: {
            views: {
                files: {
                    'build/views/css/stylesheet.min.css': ['source/views/css/*.css']
                }
            }
        },
        // Minify all JS using UglifyJS
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'source/js/',
                    src: '**.js',
                    dest: 'build/js/',
                    ext: '.min.js'
                },
                {
                    expand: true,
                    cwd: 'source/views/js/',
                    src: '**.js',
                    dest: 'build/views/js/',
                    ext: '.min.js'
                }]
            }
        },
        // Replace all CSS and JS references with refs to minified versions
        'string-replace': {
            main: {
                files: {
                    'build/index.html': 'build/index.html'
                },
                options: {
                    replacements: [{
                        pattern: 'perfmatters',
                        replacement: 'perfmatters.min'
                    }]
                }
            },
            views: {
                files: {
                    'build/views/pizza.html': 'source/views/pizza.html'
                },
                options: {
                    replacements: [{
                        pattern: '<!-- Start of source CSS ref -->',
                        replacement: '<!-- Start of source CSS ref'
                    },
                    {
                        pattern: '<!-- End of source CSS ref -->',
                        replacement: 'End of source CSS ref -->'
                    },
                    {
                        pattern: '<!-- Start of build CSS ref',
                        replacement: '<!-- Start of build CSS ref -->'
                    },
                    {
                        pattern: 'End of build CSS ref -->',
                        replacement: '<!-- End of build CSS ref -->'
                    },
                    {
                        pattern: 'main.js',
                        replacement: 'main.min.js'
                    }]
                }
            }
        }

    });

    // Load all plugins (project dependencies) installed via npm install
    grunt.loadNpmTasks('grunt-pngmin');
    grunt.loadNpmTasks('grunt-inlinestyles')
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-string-replace');

    // Defines default tasks that will run via Terminal command "grunt"
    grunt.registerTask('default', ['pngmin', 'inlinestyles', 'cssmin', 'uglify', 'string-replace']);

};