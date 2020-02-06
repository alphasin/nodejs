import dotenv from 'dotenv';

dotenv.config();

const config = {
  mongodbConnectionString: process.env.MONGODB_CONNECTION_STRING
}

const normalizeConfig = function() {
  console.log('====== Normalizing config =======');
}

export {
  config,
  normalizeConfig
}
