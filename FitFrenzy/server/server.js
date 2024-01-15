import mongoose from 'mongoose';
import { config } from 'dotenv';
import app from './index.js';

config();

// connect to DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    dbName: 'fitfrenzy',
  })
  .then(() => console.log('Connected to MongoDB'));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});

// handle unhandled rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);

  // giving time to finish all the requests
  server.close(() => {
    process.exit(1); // 0 success, 1 unhandled rejection
  });

  //todo: ideally we should reconnect to the DB
});
