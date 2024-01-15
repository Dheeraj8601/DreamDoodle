const mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    email : {
        type :String,
        required:true
    },
    title : {
        type :String,
        required:true
       
    },
    desc : {
        type :String,
        required:true
    }
    
},{timestamps :true})

const Note1 = mongoose.model('Note',noteSchema);

module.exports=Note1;