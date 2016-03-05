

module.exports = function(grunt) {


    var autoprefixer = require('autoprefixer');


    grunt.initConfig({

        // Concatenate JavaScript files before deploy
        concat: {
            dist: {
                src: [
                    './js/main.js',
                    './js/maps.js'
                ],
                dest: './js/dist.js'
            }
        },

        // Minify JavaScript main file before deploy
        uglify: {
            dist: {
                files: {
                    './js/dist.min.js': ['./js/dist.js'],
                }
            }
        },

        // Parse LESS
        less: {
            // Parse to non-minified file for development
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'css/style.css.map',
                    sourceMapURL: 'css/style.css.map',
                    sourceMapBasepath: 'www',
                    sourceMapRootpath: '',
                },
                paths: [
                    '/css/'
                ],
                files: {
                    'css/dist.css': 'ccs/less/style.less'
                }
            },

            // Parse to minified file for production
            dist: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: false
                },
                files: {
                    'css/dist.min.css': 'css/style.less'
                }
            }
        },

        // Watch all less files to be parsed right after they changed
        watch: {
            css: {
                files: [
                    'css/*.less',
                    'css/!**!/!*.less'
                ],
                tasks: ['less:dev'],
                options: {
                    spawn: false
                }
            }
        },

        // Prefix CSS
        /*autoprefixer: {
            options: {
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6",
                    'last 2 versions'
                ]
            },
            style: {
                options: {
                    map: {
                        inline: false
                    }
                },
                src: './css/style.css'
            },
        },*/

        // Prefix CSS new
        postcss: {
            options: {
                processors: [
                    autoprefixer({
                        browers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
                    }).postcss
                ]
            },
            dist: {
                files: {
                    'dist/': 'css/!*.css'
                }
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    // grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('default', ['postcss']);

    grunt.registerTask('dist', [
        'copy',
        'less:dist',
        'autoprefixer',
        'postcss',
        'concat',
        'uglify'
    ]);
};
