import { config } from 'dotenv';
import {
  mongoConnect,
  mongoConnectListener,
  mongoDisconnectListener,
  mongoErrorListener,
} from './config/db.connect.js';
import app from './app.js';

// handle uncaught exceptions
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);

  process.exit(1); // 0 success, 1 uncaught exception
});

// connect to DB
config();
mongoErrorListener();
mongoConnectListener();
mongoDisconnectListener();
await mongoConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// handle unhandled rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);

  // giving time to finish all the requests
  server.close(() => {
    process.exit(1); // 0 success, 1 unhandled rejection
  });
});
