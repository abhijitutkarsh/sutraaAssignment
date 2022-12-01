// const server = require('')
const express = require("express");
const Model = require("./database/model");
var cors = require("cors");
const bodyParser = require("body-parser"); 
// const bodyParser = require("body-parser");

const app = express();
const startDb = require("./database/init");
startDb();
app.use(
    cors({
      // origin: ["https://ecommerce370001.herokuapp.com"],
      origin:["http://localhost:3000"], 
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const cookieParser = require("cookie-parser");
app.use(bodyParser.json());
const addToDBControllers = require("./controllers/addToDB");
const getDataControllers = require("./controllers/getData");
const moreDataControllers = require("./controllers/moreData");
const prevDataControllers = require("./controllers/prevData")
const specificDataControllers = require("./controllers/specificData")
const updateDataControllers = require("./controllers/updateData")

app.route('/').get((req,res)=>{
    res.json("hello")
})
app.route('/send').post(addToDBControllers)
app.route('/seeAll').get(getDataControllers)
app.route('/moreData').post(moreDataControllers)
app.route('/prevData').post(prevDataControllers)

app.post('/search', async (req, res)=>{
	let payload = req.body.payload.trim()
	let search = await Model.find({dish: {$regex: new RegExp('^'+payload+'.*','i')}}).exec()
	//Limit Search results
	search = search.slice(0,5);
	res.json({payload: search});
})

app.route('/specificData').post(specificDataControllers)
app.route('/updateData').post(updateDataControllers)
app.listen(process.env.PORT || 3001, function () {
    console.log("server is live");
  });
  