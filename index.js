const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 8080;
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/", (req, res) => {
    res.send("Working");
});

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});