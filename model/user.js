const mongodb = require("mongodb")
const getDb = require("../data/database")

class User{
    constructor(name,phone,id){
        this.name = name;
        this.phone = phone;
        this.id = id;
    }

    async save() {
        await getDb().collection("Users").insert({name : this.name , phone:  this.phone});
    }
    async exists(){
        let user = await getDb().collection("Users").findOne({phone: this.phone});
        return user && user.length;
    }
}