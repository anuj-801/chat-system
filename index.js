const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 8080;
const Chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chat1 = new Chat({
    from: "anuj",
    to: "ram",
    msg: "send me your code",
    created_at: new Date()
});

chat1.save()
.then((res) => {
    console.log(res);
});

app.get("/", (req, res) => {
    res.send("Working");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});