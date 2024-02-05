const mongodb = require("mongodb")
const getDb = require("../data/database");


class User{
    constructor(name,phone,id){
        console.log("this is getDb");
        console.log(getDb)
        this.name = name;
        this.phone = phone;
        this.id = id;
    }

    async save() {
        console.log("getting getDb()")
        let db = await getDb();
        console.log("no error here");
        console.log(db);
        // console.log(await db.collection("Users"));
        // await getDb().collection("Users").insert({name : this.name , phone:  this.phone});
    }
    async exists(){
        console.log(getDb().collection)
        // let user = await getDb().collection("Users").findOne({phone: this.phone});
        // return user && user.length;
        return 1;
    }
}

module.exports = User