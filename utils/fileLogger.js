const fs = require('fs-extra');
const path = require('path');

const logFilePath = path.join(__dirname, '../data/logs.txt');

exports.log = async (message) => {
  try {
    await fs.appendFile(logFilePath, `${new Date().toISOString()} - ${message}\n`);
  } catch (error) {
    console.error('Error writing to log file', error);
  }
};
