const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const colors =require("colors")
const schema =require("./schema/schema")
const cors  =require("cors")
require("dotenv").config()
const  connectDB = require("./config/db")
const port= process.env.PORT

const app = express()

// CONNECT TO DB

connectDB();
app.use(cors())
app.use("/graphql",graphqlHTTP({
schema,
graphiql:process.env.NODE_ENV==="development"
}))
app.listen(port, console.log(`Server running on port ${port}`))