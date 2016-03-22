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
                    src: 'dev/img/*.png',
                    dest: 'prod/img/'
                },
                {
                    src: 'dev/views/images/*.png',
                    dest: 'prod/views/images/'
                }]
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
       // Combine CSS files for pizza page
        cssmin: {
            views: {
                files: {
                    'prod/views/css/stylesheet.min.css': ['dev/views/css/*.css']
                }
            }
        },
        // Minify all JS using UglifyJS
        uglify: {
            target: {
                files: [{
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
                }]
            }
        },
        // Replace all CSS and JS references with refs to minified versions
        'string-replace': {
            main: {
                files: {
                    'prod/index.html': 'prod/index.html'
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
                    'prod/views/pizza.html': 'dev/views/pizza.html'
                },
                options: {
                    replacements: [{
                        pattern: '<!-- start of dev css ref -->',
                        replacement: '<!-- start of dev css ref'
                    },
                    {
                        pattern: '<!-- end of dev css ref -->',
                        replacement: 'end of dev css ref -->'
                    },
                    {
                        pattern: '<!-- start of prod css ref',
                        replacement: '<!-- start of prod css ref -->'
                    },
                    {
                        pattern: 'end of prod css ref -->',
                        replacement: '<!-- end of prod css ref -->'
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