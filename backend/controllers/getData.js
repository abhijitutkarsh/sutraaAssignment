// const addToDb = require("../services/addToDB");
const DBModel = require("../database/model")
module.exports = async function(req, res)
{
   
    const data = req.body;
  
try{
    // console.log(data)
    const val = await DBModel.find({}).limit(5);
    res.json(val);
   }
   catch(err){
    res.json("Error here")
   }
}