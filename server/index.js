const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/users')

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(
  "mongodb+srv://lokhandegauri2006:R0HXCMkakmOcKt74@cluster0.vuk1pos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/login", (req, res)=>{
    const{email, password}= req.body;
    UserModel.findOne({email: email})
    .then(user=>{
        if (user) {
          if (user.password === password) {
            res.json("Success");
          } else {
            res.json("The Password is incorrect");
          }
        } else {
          res.json("No record exist");
        }
    })
})

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3002, ()=> {
    console.log("server is running");
})