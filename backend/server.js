const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app=require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(DB);
    console.log(`Listening on port ${PORT}...`);
  });
  // Replace <PASSWORD> with the actual password from your environment variables
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// const DB = process.env.DATABASE
mongoose.connect(DB, {useNewUrlParser: true}).then((con) => {
  console.log('DB connection established');
});

