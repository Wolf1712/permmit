const connecttomongo=require('./db');
connecttomongo();
const express = require('express');
const app = express();
const port = 5000
// const cors= require('cors')

// const info =require('./routes/')
// app.use(cors())
app.use(express.json())
app.use()

app.listen(port, () => {
    console.log(`permision app listening at http://localhost:${port}`);
  }) 