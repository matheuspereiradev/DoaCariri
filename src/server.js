const express = require('express');
const cors = require('cors');
const port = 8080;

const app = express();
const routes = require('./routes/index')

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(port,()=>{
    console.log(`running at port ${port}`);
});