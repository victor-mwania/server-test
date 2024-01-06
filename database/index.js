const mongoose = require('mongoose');

const { MongoMemoryServer } = require('mongodb-memory-server');


// module.exports = async () => {
//     try {
//       const db = await mongoose.connect('mongodb+srv://victormwnza:nrwBVt1gtoreXvoe@cluster0.hreqbpm.mongodb.net/?retryWrites=true&w=majority' , { useNewUrlParser: true, useUnifiedTopology: true });
//       console.log(
//         `Connected to Mongo! Database name: "${db.connections[0].name}"`
//       );
//       return db;
//     } catch (err) {
//       console.error(`Error connecting to mongo: ${err}`);
//       return err;
//     }
//   };



exports.dbConnect = async () => {
    const mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        const db = await mongoose.connect(uri, mongooseOpts);
        console.log(`Connected to MongoDB. Database name: "${db.connections[0].name}"}`)
    } catch (error) {
        console.error(`Error connecting to mongo: ${err}`);
        return err;
    }
    await mongoose.connect(uri, mongooseOpts);
};

exports.dbDisconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
};