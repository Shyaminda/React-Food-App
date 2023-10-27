import Express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import {userModel,tableModel} from "./models/UserDB.js";


const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
    credentials: true, // Allow cookies, authentication headers, etc.
  };
const app=Express();
app.use(Express.json());
app.use(cors(corsOptions));
app.options('/register', cors(corsOptions));


mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.post("/login", (req, res)=> {
    const {email,password}=req.body;
    userModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json({message: "Login successful"});
            }else{
                res.json({message: "Wrong password"});
            }
        }else{
            res.json({message: "User not registered"});
        }
    })
})


app.post("/register", (req, res)=> {
    userModel.create(req.body)
    .then(User=>res.json(User))
    .catch(err=>{
        console.error(err);
        res.status(500).json({error: "Internal server error"});
    });
});

app.post("/tableBooking", (req, res)=> {
    tableModel.create(req.body)
    .then(table=>res.json(table))
    .catch(err=>{
        console.error(err);
        res.status(500).json({error: "Internal server error"});
    });
})

app.listen(3001, ()=> {
    console.log("Server started on port 3001");});

