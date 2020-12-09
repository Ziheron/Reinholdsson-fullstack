import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  try {
    const DB_URL = process.env.DATABASE_URL;
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Successfully connected to the database!');
  } catch (error) {
    console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error);
    process.exit();
  }
};

const connectToPort = (app) => {
  const port = process.env.PORT;
  app.listen(3001, () => {
    console.log(`Server is running on port: ${3001}`);
  });
};

export default {
  connectToDatabase,
  connectToPort,
};
