const express = require('express')
const app = express()
const fs = require('fs');
app.use(express.static('webapp'));

app.get('/', function (req, res) {
  res.send('Hello World')
});

// app.get('/employees', function(req,res){
// const fileContent = fs.readFileSync(__dirname+"/webapp/emp.json","utf-8");
// res.send(fileContent);
// });

// app.get('/vendors', function(req,res){
//     const fileContent = fs.readFileSync(__dirname+"/webapp/vendor.json","utf-8");
//     res.send(fileContent);
//     });

//     app.get('/myphoto', function(req,res){
//         const fileContent = fs.readFileSync(__dirname+"/webapp/siva.JPG","utf-8");
//         res.send(fileContent);
//         });

console.log("Server started at http://localhost:3000");
console.log("updated to check git hub");
// get port number at runtime from BTP or if local then 3000
app.listen(process.env.PORT || 3000)