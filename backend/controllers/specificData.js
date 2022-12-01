// const addToDb = require("../services/addToDB");
const DBModel = require("../database/model")
module.exports = async function(req, res)
{
   
    const data = req.body;
  
// try{
    // console.log(data)
    const val = await DBModel.findOne({dish: data.text});
// console.log(data)
    res.json(val);
//    }
//    catch(err){
//     res.json("Error here")
//    }
}