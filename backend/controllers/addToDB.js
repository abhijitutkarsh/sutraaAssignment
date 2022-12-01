const addToDb = require("../services/addToDB");
// const DBModel = require("../../database/model")
module.exports = async function(req, res)
{
   
    const data = req.body;
  
try{
    
    // console.log(data)
    const val = await addToDb(data);
    res.json("done");
   }
   catch(err){
    res.json("Error here")
   }
}