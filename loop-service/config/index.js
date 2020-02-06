import dotenv from 'dotenv';

dotenv.config();

const config = {
  mongodbConnectionString: process.env.MONGODB_CONNECTION_STRING
}

export {
  config
}
