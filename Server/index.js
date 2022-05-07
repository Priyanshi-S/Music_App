var http = require('http');
var express=require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');
var path=require('path');
const { title } = require('process');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project";

var app=express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',
    extended: true
}));
app.use(cors({ origin: true, credentials: true }));

var server = app.listen(5000,function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});

app.get('/get-details',(req,res)=> {
  res.send({value: 'done'});
})

app.post('/register',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("abcd")
    var dbo = db.db("project");
    var myobj = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password, 
      languages: req.body.languages, 
      artists: req.body.artists,  
      genres: req.body.genres
    };
    dbo.collection("customers").insertOne(myobj, function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(success);
    });
  });
});

app.post('/login',(req,res) => {
  var success;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
      password: req.body.password 
    };
    dbo.collection("customers").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = (result.length>0) ? true : false;
      db.close();
      res.send(success);
    });
  });
});

app.post('/downloaded',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
      song_id: req.body.song_id,
      title: req.body.title
    };
    dbo.collection("downloads").insertOne(myobj, function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(success);
    });
  });
});

app.post('/songs',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
    };
    dbo.collection("downloads").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = true;
      console.log(result);
      db.close();
      res.send(result);
    });
  });
});

app.post('/likes',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
      song_id: req.body.song_id,
      title: req.body.title
    };
    dbo.collection("likes").insertOne(myobj, function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(success);
    });
  });
});

app.post('/likedsongs',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
    };
    dbo.collection("likes").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = true;
      console.log(result);
      db.close();
      res.send(result);
    });
  });
});