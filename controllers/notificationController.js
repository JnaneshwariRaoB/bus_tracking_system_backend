const notificationService = require('../services/notificationService');

exports.sendNotification = (req, res) => {
  try {
    const { userId, message } = req.body;
    notificationService.sendNotification(userId, message);
    res.status(200).json({ success: true, message: 'Notification sent' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending notification' });
  }
};
