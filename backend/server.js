const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello, From the back end Ladies!");
});

// Gentlemen! Start your engines!
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`)
});