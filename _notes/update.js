// changedetection-data/url-watches.json

const fs = require('fs');
const path = require('path');
const now = new Date().toISOString().replace(/[:.]/g, '');

const PROJ_HOME = path.resolve(__dirname, '..');
console.log(PROJ_HOME);

const backupPath = path.resolve(PROJ_HOME + '/changedetection-data/url-watches.json.' + now + '.bak');

try {
  fs.copyFileSync(PROJ_HOME + '/changedetection-data/url-watches.json', backupPath);
  console.log('Backup created:', backupPath);
} catch (error) {
  console.error('Error creating backup:', error);
}

let generatedJson = {};
let currentJson = {};

const scheduleFilePath = path.resolve(PROJ_HOME + '/_notes/Schedule.json');
const currentJsonPath = path.resolve(PROJ_HOME + '/changedetection-data/url-watches.json');

(async () => {
  try {
    const generatedJsonRaw = await fs.promises.readFile(scheduleFilePath, 'utf8');
    const currentJsonRaw = await fs.promises.readFile(currentJsonPath, 'utf8');

    generatedJson = JSON.parse(generatedJsonRaw);
    currentJson = JSON.parse(currentJsonRaw);
    updatedJson = currentJson;

    updatedJson['watching'] = generatedJson['watching'];
    console.log(updatedJson);

    await fs.promises.writeFile(currentJsonPath, JSON.stringify(updatedJson, null, 1));
    console.log('Updated JSON file written successfully!');
  } catch (err) {
    console.error('Error parsing JSON file:', err);
  }
})();
