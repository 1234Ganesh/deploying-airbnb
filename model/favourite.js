const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtils");




module.exports = class Favourite {
  constructor(houseId){
    this.houseId =houseId;
  }

  save(){
    const db = getDB();
    return db.collection('favourite').findOne({houseId:this.houseId}).then(existingFav=>{
      if(!existingFav){
        return db.collection('favourite').insertOne(this);
      }
      return Promise.resolve() 
      
    })

  }




  static getFavouite(){
    const db = getDB();
    return db.collection('favourite').find().toArray()
    
  }

  static deleteById(delHomeId){
    const db =getDB();
    return db.collection('favourite')
    .deleteOne({houseId:delHomeId})
  }
 
}

