
const app = require("./index");

const connect  = require("./config/db");

const port = 5000;


app.listen(port,async function () {
  
    try{
        await connect();
        console.log(`listening on port ${port}`);
    }
    catch(err){
        console.log("err" , err.message);
    }

});