var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')

const mysql = require('mysql');

var greetRouter = require('./routes/greet');
var userRouter = require('./routes/user');





var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


// app.get('/user/id',(req,res)=>{

//   var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '11111111',
//     database : 'sql_store'
//   });

//   connection.connect();
 
// connection.query('SELECT * FROM sql_store.customers;', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();
// })

var app = express();


app.use('/greet', greetRouter);
app.use('/user',userRouter);










module.exports = app;
