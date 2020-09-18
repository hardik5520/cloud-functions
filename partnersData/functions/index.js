const functions = require('firebase-functions');
MongoClient = require('mongodb').MongoClient;

//create function
exports.partnersDataCreate = functions.firestore.document('/partnersData/{documentID}')
.onCreate( async (snap, context) => {
    const data = snap.data();
    var client;
    try{
        const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
        client = new MongoClient(url);
        const dbName = "oyebusy-3";
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("partnersData");
        let orderDocument = data;
        const p = await col.insertOne(orderDocument);
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
   return 1;
})

//update function
exports.partnersDataUpdate = functions.firestore.document('/partnersData/{documentID}')
.onUpdate( async (change, context) => {
    const olddata = change.after.data();
    const newdata=change.before.data();
    try{
        const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
        const client = new MongoClient(url);
        const dbName = "oyebusy-3";
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("partnersData");
        //used aadharNumber as primary key
        var cursor = await col.findOne({"aadharNumber":olddata.aadharNumber});
        await col.update(
        {
            aadharNumber : olddata.aadharNumber
        },
        {
            $set :
            {
              newdata
            }
        })
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
   return 2;
})

//delete function
exports.partnersDataDelete = functions.firestore.document('/partnersData/{documentID}')
.onDelete( async (snap, context) => {
    const data = snap.data();
    try{
        const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
        const client = new MongoClient(url);
        const dbName = "oyebusy-3";
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("partnersData");
        //used aadharNumber as primary key
        const query = { "aadharNumber": data.aadharNumber };
        await col.deleteOne(query)
        .then(result => console.log(`Deleted ${result.deletedCount} item.`))
        .catch(err => console.error(`Delete failed with error: ${err}`))
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
   return 1;
})
