const Model = require("../database/model")

module.exports = async function(i)
{
    var limit = 5;
  
    var startFrom = parseInt(i);
    
       return await Model.find({}).skip(startFrom)
       .limit(limit)
       
  
}