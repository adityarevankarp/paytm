const express = require("express");

const app = express();


const { MongoClient } = require('mongodb');
const connectionString = 'mongodb+srv://adityarevankar03:aditya@mernapp.4h8royk.mongodb.net/?retryWrites=true&w=majority/paytm';

async function connectToMongoDB() {
    try {
      // Create a new MongoClient instance
      const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  
      // Connect to the MongoDB server
      await client.connect();
  
      console.log('Connected to MongoDB');
  
      // Access a specific database
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  // Call the function to connect to MongoDB
  connectToMongoDB();