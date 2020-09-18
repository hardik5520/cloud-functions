const functions = require('firebase-functions');
MongoClient = require('mongodb').MongoClient;
const firebase =require('firebase');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const firebaseConfig = {
    apiKey: "AIzaSyClF-LjE7ph9L-2P3HZqMOFZbrQji7UCgU",
    authDomain: "testing-6690e.firebaseapp.com",
    databaseURL: "https://testing-6690e.firebaseio.com",
    projectId: "testing-6690e",
    storageBucket: "testing-6690e.appspot.com",
    messagingSenderId: "367923280273",
    appId: "1:367923280273:web:33625fe8773cd858958230",
    measurementId: "G-DXMJCTK9TE"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var data;

db.collection("contest2").get()
.then((querySnapshot) => {
    data = querySnapshot.docs.map((doc) => doc.data());
    // console.log("complete data==",data);
    return (1);
    })
    .catch(err => {
        console.log('Error getting document', err);
      });
//data has been received in variable data, now push to mongodb
const myapi=async(req,res,next)=>{
    var client;
      try{
        console.log("in this");
        const url='mongodb+srv://hardikuser:hardikpassword@cluster0.eli69.mongodb.net/demo?retryWrites=true&w=majority'
        client = await new MongoClient(url);
        const dbName = "demo";
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("check");
        for(var i=0;i<data.length;i++)
        {
            //console.log("checking-",data[i]);
            var p=col.insertOne(data[i]);
        }
        } catch (err) {
            console.log(err.stack);
        }
        finally {
          
            client.close();
        }
        res.status(200);
}
exports.myapi=myapi;