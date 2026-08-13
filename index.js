const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 8080;
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Working");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});