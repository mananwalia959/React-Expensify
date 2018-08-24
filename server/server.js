const path = require('path')
const express =require('express');
const compression = require('compression');
const app =express();
app.use(compression())
const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT||3000;
app.use(express.static(publicPath));

app.get('*',(req,res) => {
    res.sendFile(path.join(publicPath,'index.html'))
});

app.listen(port,()=> {
    console.log('server is up!')
});