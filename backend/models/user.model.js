
import mongoose from 'mongoose';
const { Schema } = mongoose;



const userSchema = new Schema({


    username:{

        type:String,
        require:true,
        unique:true,
        toLowercase:true
    },

    email:{

        type:email,
        require:true,
        unique: true,
    },

    password:{
        type:String,
        require:true,

    },

    role:{
        type:String,
        enum:["student","professor"]
    }
  
});