const express=require("express");
const app=express()
const {connect,disconnect}=require("./database/databaseConfig")
const router=require("./routeConnect");
connect()
// const routes = require("./routes");
app.use(express.json())
app.use("/",router)
app.listen(4000,()=>console.log("server running on 4000"))
