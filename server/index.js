
const express = require('express');
require('dotenv').config();
const app = express();


const port = process.env.PORT || 8081;
app.use(express.json());



app.listen(port, () => {
  console.log(`running on port ${port}`);
});