const express = require("express")
const server = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer")
const cors = require("cors")
const express_session = require("express-session")
const mongoose = require("mongoose")


// using middleware
server.use(express.json())
server.use(cors())
server.use(bodyParser.urlencoded({extended:true}))
server.use(cookieParser())

// read through dotenv
const port = process.env.PORT || 3000

// create endpoint for an homepage
server.get("/", (req, res)=>{
    res.send("WELCOME TO MY FIRST ENPOINT HOMEPAGE")
})

server.post("/register/user", async(req, res)=>{
    const {firstname, lastname, email, password} = req.body
    if(!firstname || !lastname || !email || !password){
        res.status(301).send("field should not be empty")
    }else{
        const profile = {
            firstname,
            lastname,
            email,
            password
        }
        // save to database
        res.status(200).send(profile)
    }
})

// set up a server instance
server.listen(port, ()=>{
    console.log(`server is live on: http://localhost:${port}`);
    
})