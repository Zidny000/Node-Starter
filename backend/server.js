const dotenv = require("dotenv");
const app = require("./app");

//config
dotenv.config({path:"backend/config/.env"})


const server = app.listen(process.env.PORT,()=>{
    console.log(`The server is running at http://localhost:${process.env.PORT}`)
})