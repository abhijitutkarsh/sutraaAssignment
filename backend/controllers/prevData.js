// const moreData = require("../services/moreData");

module.exports = async function(req, res)
{
  
    var startFrom = req.body.text;
 

   try{
    // const data = await moreData(startFrom);

        res.json(data);


   }
   catch(err){
    res.json("Error here")
   }
}