export default () => ({
  port: parseInt(process.env.PORT),
  cookie_secret: process.env.COOKIE_SECRET,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_DATABASE,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
});
