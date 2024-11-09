const busService = require('../services/busService');

exports.getBusLocation = async (req, res) => {
  try {
    const busId = req.params.id;
    const location = await busService.getBusLocation(busId);
    res.status(200).json({ busId, location });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bus location' });
  }
};
