const DishModel = require("../database/model")
// const mail = require("../../utils/sendMail") 

module.exports =async function(product)
{
   const Added =  await DishModel.create(product);


// console.log(result)
   return;

}