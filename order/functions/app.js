const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const route=require('./apirout');
const app = express();
app.use(
    cors({
      origin: "http://localhost:3000", // restrict calls to those this address
      credentials: true,
    })
  );  
 
app.use('/set', route ); 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server running at port", PORT);
});