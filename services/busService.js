const fs = require('fs-extra');
const path = require('path');
const dataQueue = require('../utils/dataQueue');
const fileLogger = require('../utils/fileLogger');

// Path to the local JSON data file
const dataFilePath = path.join(__dirname, '../data/busData.json');

exports.getBusLocation = async (busId) => {
  try {
    // Read the local JSON file to get bus data
    const data = await fs.readJSON(dataFilePath);
    
    // Find the location of the bus by its ID
    const busData = data.find(bus => bus.busId === busId);
    if (!busData) {
      throw new Error(`Bus with ID ${busId} not found`);
    }
    
    const location = busData.location;

    // Use a Queue to manage data efficiently
    dataQueue.enqueue({ busId, location });
    fileLogger.log(`Fetched location for bus ${busId}: ${location}`);

    return location;
  } catch (error) {
    fileLogger.log(`Error fetching location for bus ${busId}: ${error.message}`);
    throw error;
  }
};
