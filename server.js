const express = require('express');
const busRoutes = require('./routes/busRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Register routes
app.use('/buses', busRoutes);
app.use('/notifications', notificationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
