const mongodb = require("mongodb")
const getDb = require("../data/database");


class User{
    constructor(name,phone,id){
        this.name = name;
        this.phone = phone;
        this.id = id;
    }

    async save() {
        let db = await getDb();
        await db.collection("Users").insertOne({name : this.name , phone:  this.phone});
    }
    async exists(){
        let db = await getDb();
        console.log("phone number is: ")
        console.log(this.phone)
        let user = await db.collection("Users").findOne({phone: this.phone});
        console.log(user);
        return user;
    }
    async saveWebAddress(address){
        let db = getDb();
        await db.collection("Map").insertOne({phone: this.phone, address : address})
    }
}

module.exports = User