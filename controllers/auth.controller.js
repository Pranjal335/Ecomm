const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const {generateToken} = require("../utils/jwt");

const register = async(req, res) =>{
    try{
        res.send('Hi')

        console.log('Registered Successfully');
    }catch(error){
        console.log("Register Error:", error);
        return res.status(500).json({message:"Server error"});
    }
}

const login = async(req, res) =>{
    try{
        console.log('Logged in successfully');

    }catch(error){
        console.log("Login Error:",error);
        return res.status(500).json({message:"Server error"})
    }
}

module.exports = {register, login}