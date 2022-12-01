// const getAllProducts = require("../../services/products/getAllProducts");
// const getCart = require("../../services/products/getCart");
// const fetchProducts = require("../../services/products/fetchProducts");
const DBModel = require("../database/model")

module.exports = async function(req, res)
{
   
    const data = req.body;


   try{
    // const data = await fetchProducts();
    // console.log(data1)
    console.log(data)
    await DBModel.findByIdAndUpdate({_id: data.id}, {dish: data.dish, ingredient: data.ingredient})
    // const data = await getAllProducts();
    // res.render("updateProduct", {products: data ,username: username, user: user});
    res.json("updated")
   }
   catch(err){
    res.json("Error on getAllProduct")
   }
}