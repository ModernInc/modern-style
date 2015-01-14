'use strict';

// Basic template description.
exports.description = 'Scaffolds a new Modern Style project.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm install_.'+
                'Next run _bower install_ to install Modern Map API.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version')
  ], function(err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: props.name,
      description: props.description,
      version: props.version,
      devDependencies: {
        "grunt": "^v0.4.5",
        "grunt-contrib-sass": "^v0.8.1",
        "grunt-contrib-watch": "^v0.6.1",
        "grunt-autoprefixer": "^2.0.0"
      }
    });

    // Generate bower.json file, used to install bower dependancs.
    init.writePackageJSON('bower.json', {
      name: props.name,
      description: props.description,
      version: props.version,
      devDependencies: {
        "modern-map": ""
      }
    });


    // All done!
    done();
  });
};