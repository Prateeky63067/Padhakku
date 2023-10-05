require('dotenv').config();

module.exports = {
  databaseURL: process.env.DATABASE_URL,
  secretKey: process.env.SECRET_KEY,
};
