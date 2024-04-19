export default () => ({
  port: parseInt(process.env.PORT),
  cookie_secret: process.env.COOKIE_SECRET,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT),
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_DATABASE,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
});
