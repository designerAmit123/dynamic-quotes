const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

const staticpath = path.join(__dirname + "/public");
//console.log(staticpath);

app.use(express.static(staticpath))


app.get("/", (req, res) =>{
    res.send("Welcome to my Dynamic Quotes page");
});

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`);
})