const functions = require('firebase-functions');
MongoClient = require('mongodb').MongoClient;

//create function
exports.customersCreate = functions.firestore.document('/customers/{documentID}')
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
        const col = db.collection("customers");
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
exports.customersUpdate = functions.firestore.document('/customers/{documentID}')
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
        const col = db.collection("customers");
        var cursor = await col.findOne({"customerID":olddata.customerID});
        await col.update(
        {
            customerID : olddata.customerID
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
exports.customersDelete = functions.firestore.document('/customers/{documentID}')
.onDelete( async (snap, context) => {
    const data = snap.data();
    try{
        const url='mongodb+srv://oyebusy:Fd4C6eMOqYlu5S2x@cluster0.e7j93.mongodb.net/test'
        const client = new MongoClient(url);
        const dbName = "oyebusy-3";
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("customers");
        const query = { "customerID": data.customerID };
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
