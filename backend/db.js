
// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://adityarevankar03:aditya@mernapp.4h8royk.mongodb.net/paytm?retryWrites=true&w=majority")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Account
};
// // backend/db.js
// const mongoose = require("mongoose");

// const connectionString = "mongodb+srv://adityarevankar03:aditya@mernapp.4h8royk.mongodb.net/paytm?retryWrites=true&w=majority";

// async function connectToMongoDB() {
//   try {
//     await mongoose.connect(connectionString);

//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }
// connectToMongoDB();

// // Create a Schema for Users
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//     minLength: 3,
//     maxLength: 30,
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 6,
//   },
//   firstName: {
//     type: String,
//     required: true,
//     trim: true,
//     maxLength: 50,
//   },
//   lastName: {
//     type: String,
//     required: true,
//     trim: true,
//     maxLength: 50,
//   },
// });
// //account schema is refrencing the User model , so no registered user can have an balance.
// const accountSchema = new mongoose.Schema({
//   userId: {
//       type: mongoose.Schema.Types.ObjectId, // Reference to User model
//       ref: 'User',
//       required: true
//   },
//   balance: {
//       type: Number,
//       required: true
//   }
// });

// // mdoel for saccoutn schema
// const Account = mongoose.model('Account', accountSchema);

// // Create a model from the schema
// const User = mongoose.model("User", userSchema);

// module.exports = {
//   User,
//   Account
// };



