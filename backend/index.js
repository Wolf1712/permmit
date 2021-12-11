const connecttomongo=require('./db');
connecttomongo();
const express = require('express');
const router = require("./routes/auth");
const router1 = require("./routes/askmessage");
// const router2 = requir
const app = express();
const port = 5000
const cors= require('cors')

// const info =require('./routes/')
app.use(cors())
app.use(express.json())

app.use(router);

app.use(router1);
app.use('/getpermissions',require('./routes/getmessage'))
app.use('/own',require("./routes/self"))


app.listen(port, () => {
    console.log(`permision app listening at http://localhost:${port}`);
  }) 