const path = require('path');
const DATA_FILES_BASE_DIR = 'data';

module.exports = {
    problemsBaseDir: path.resolve(__dirname, '..', DATA_FILES_BASE_DIR, 'problems'),
    submitsBaseDir: path.resolve(__dirname, '..', DATA_FILES_BASE_DIR, 'submits')
};