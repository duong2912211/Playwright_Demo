// import * as fs from 'fs-extra';
const fs = require('fs-extra');

try {
    fs.ensureDir('test-result');
    fs.emptyDir('test-result');
    fs.ensureDir('reports');
    fs.emptyDir('reports');
}
catch (e) {
    console.log('Result folder not created' + e);
}