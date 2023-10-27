import mongoose from "mongoose";

const  userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String

});

const tableSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    numberOfPeople: String,
    message: String,
});

const tableModel = mongoose.model("Table", tableSchema);

const userModel=mongoose.model("User", userSchema);
export {userModel, tableModel};