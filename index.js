var path = require('path');
var process = require('process');
var resolve = require('resolve');

module.exports = function (file, data) {
    if (file === 'metal-soy-bundle' || file === 'metal-incremental-dom' || file === 'incremental-dom') {
        const relativeDir = path.relative(path.resolve(process.cwd(), 'packages'), data.basedir);
        data.basedir = path.resolve(process.cwd(), 'packages', relativeDir.split(path.sep)[0], 'node_modules', 'metal-soy');
    }

    return resolve.sync(file, data);
};