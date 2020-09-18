const functions = require('firebase-functions');
MongoClient = require('mongodb').MongoClient;

//create function
exports.transactionsCreate = functions.firestore.document('/transactions/{documentID}')
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
        const col = db.collection("transactions");
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
exports.transactionsUpdate = functions.firestore.document('/transactions/{documentID}')
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
        const col = db.collection("transactions");
        var cursor = await col.findOne({"transactionID":olddata.transactionID});
        await col.update(
        {
            transactionID : olddata.transactionID
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
exports.transactionsDelete = functions.firestore.document('/transactions/{documentID}')
.onDelete( async (snap, context) => {
    const data = snap.data();
    try{
        const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
        const client = new MongoClient(url);
        const dbName = "oyebusy-3";
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("transactions");
        const query = { "transactionID": data.transactionID };
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
