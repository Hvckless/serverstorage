const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send("It was changedaaa"));
app.listen(port, ()=> console.log("HI ${port}"));