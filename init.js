const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chats = [
    {
        from: "anuj",
        to: "ram",
        msg: "send me your code.",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to: "shyam",
        msg: "Hi nice to meet you.",
        created_at: new Date(),
    },
    {
        from: "amar",
        to: "parth",
        msg: "hello bro.",
        created_at: new Date(),
    },
    {
        from: "kumar",
        to: "om",
        msg: "we will meet tomorrow.",
        created_at: new Date(),
    },
    {
        from: "eve",
        to: "yash",
        msg: "i dont know what to say.",
        created_at: new Date(),
    },
];

Chat.insertMany(chats);
