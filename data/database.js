const mongoClient = require("mongodb").MongoClient;
let client;
async function connect() {
    if(!client)
    client = await mongoClient.connect("mongodb://localhost:27017");
    return client.db("payDeFi");
}

module.exports = connect;

