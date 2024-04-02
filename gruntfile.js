module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
        production: {
            options: {
                compress: true,
            },
            files: {
                'main.min.css': 'main.less'
            }
        },
        production: {
            options: {
                compress: true,
            },
            files: {
                'main.min.js': 'main.js'
            }
        }
    }
});

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
};
