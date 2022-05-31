var http = require('http');
var express=require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var cors = require('cors');
var path=require('path');
const { title } = require('process');
var MongoClient = require('mongodb').MongoClient;
const { spawn } = require('child_process');
const { json } = require('express');
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
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    dbo.collection("songs").find({_id: {$in: ["1","3","5"]}}).toArray(function(err, result) {
      if (err) throw err;
      success = true;
      console.log(result);
      db.close();
      res.send(result);
    });
  });
  // var success = false;
  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("project");
  //   var myobj = 
  //     {
  //       title: "Without Me",
  //     artist: "Halsey",
  //     artwork: "../images/pic5.jpg",
  //     url: "https://samplesongs.netlify.app/Without%20Me.mp3",
  //     _id: "6"
  //     };
  //   dbo.collection("songs").insertOne(myobj, function(err, result) {
  //     if (err) throw err;
  //     success = true;
  //     db.close();
  //     res.send(success);
  //   });
  // });
})

app.post('/register',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
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
    dbo.collection("downloads").updateOne(myobj, {$set: myobj}, {upsert: true}, function(err, result) {
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
    dbo.collection("likes").updateOne(myobj, {$set: myobj}, {upsert: true}, function(err, result) {
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
      db.close();
      res.send(result);
    });
  });
});

app.post('/playlist',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
      playlist: req.body.playlist,
    };
    var index = req.body.index;
    dbo.collection("playlists").updateOne(myobj, {$push: {index: index}}, {upsert: true}, function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(success);
    });
  });
});

app.post('/playlistSongs',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
    };
    dbo.collection("playlists").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(result);
    });
  });
});

app.post('/playlistData',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
      playlist: req.body.playlist
    };
    dbo.collection("playlists").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(result);
    });
  });
});

app.post('/details',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
    };
    dbo.collection("customers").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(result);
    });
  });
});

app.post('/history',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
      song_id: parseInt(req.body.song_id),
      title: req.body.title
    };
    dbo.collection("history").updateOne(myobj, {$inc: {"listen_count": 1}}, {upsert: true}, function(err, result) {
      if (err) throw err;
      success = true;
      db.close();
      res.send(success);
    });
  });
});

app.post('/homePlaylist',(req,res)=> {
  let email = req.body.email;
  const pyProg = spawn('python', ['./Playlist.py',req.body.type,email,req.body.languages]);
  pyProg.stdout.on('data', (data) => {
    // Do something with the data returned from python script
    data = data.toString();
    JSON.parse(data);
    res.send(data);
  });
  pyProg.stderr.on('data', (data) => {
    console.log(data.toString());
  });
})

app.post('/users',(req,res) => {
  var success;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
    };
    dbo.collection("customers").find({email: {$nin: [req.body.email]}}).toArray(function(err, result) {
      if (err) throw err;
      success = (result.length>0) ? true : false;
      db.close();
      res.send(result);
    });
  });
});

app.post('/check',(req,res) => {
  var success = false;
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj = {
      email: req.body.email,
    };
    dbo.collection("history").find(myobj).toArray(function(err, result) {
      if (err) throw err;
      success = (result.length>0) ? true : false;
      db.close();
      res.send(success);
    });
  });
});