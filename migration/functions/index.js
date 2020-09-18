// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
MongoClient = require('mongodb').MongoClient;
// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.migrateOrders = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('orders').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            console.log("in this");
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("orders");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "orders done"});
  });

exports.migratependingPartners = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('pendingPartners').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("pendingPartners");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "pendingPartners done"});
  });

exports.migratecustomers = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('customers').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("customers");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "customers done"});
  });

exports.migratepartners = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('partners').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("partners");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "partners done"});
  });

exports.migratepartnersData = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('partnersData').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("partnersData");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "partnersData done"});
  });

exports.migraterejectedPartners = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('rejectedPartners').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("rejectedPartners");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "rejectedPartners done"});
  });

exports.migrateservices = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('services').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("services");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "services done"});
  });

exports.migratetransactions = functions.https.onRequest(async (req, res) => {
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    var data;
    const writeResult = await admin.firestore().collection('transactions').get()
    .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        // console.log("complete data==",data);
        return (1);
        })
        .catch(err => {
            console.log('Error getting document', err);
          });
          var client;
          try{
            const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
            client = await new MongoClient(url);
            const dbName = "oyebusy-3";
            await client.connect();
            console.log("Connected correctly to server");
            const db = client.db(dbName);
            const col = db.collection("transactions");
            for(var i=0;i<data.length;i++)
            {
                var p=col.insertOne(data[i]);
            }
            } catch (err) {
                console.log(err.stack);
            }
            finally {
              
                client.close();
            }
            res.json({result: "transactions done"});
  });

  