const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const Note = require("./models/Note.js");
const User = require("./models/User.js");
const app = express();
app.use(express.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
const port = 3000;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "add connection string here"
    );

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
connectDB();


app.get("/", (req, res) => {
  res.sendFile("pages/index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
  res.sendFile("pages/login.html", { root: __dirname });
});

app.get("/signup", (req, res) => {
  res.sendFile("pages/signup.html", { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: __dirname + '/pages' });
});



app.post("/getnotes",async (req, res) => {
  let notes = await Note.find({email :req.body.email})
  res.status(200).json({success : true,notes})

});

app.post("/login",async (req, res) => {

  let user = await User.findOne(req.body);
  if(!user){
    res.status(200).json({success : false,
    message : "No user found"})
  }else{
    res.status(200).json({success : true,user:{email : user.email},message : "User found"})
  }
  res.sendFile("pages/signup.html", { root: __dirname });
});

app.post("/signup", async(req, res) => {
    try {
  const { userToken } = req.body;
  console.log(req.body);
  let user =await User.create(req.body);
  res.status(200).json({ success: true, user: user });

}catch (error) {
    if (error.code === 11000 && error.keyPattern && error.keyValue) {
        res.status(400).json({ success: false, error: 'Duplicate email address.' });
    } else {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal server error.' });
    }
}
});

app.post("/addnote", async (req, res) => {
  const { userToken } = req.body;
  let note = await Note.create(req.body)
  res.status(200).json({success :true,note})
});

app.post("/deletenote", async (req, res) => {
  try {
    const { email, noteId } = req.body;
    const existingNote = await Note.findOne({ _id: noteId, email: email });

    if (!existingNote) {
      return res.status(404).json({ success: false, error: "Note not found" });
    }

    const confirmation = confirm("Are you sure you want to delete this note?");
    if (!confirmation) {
      return res.status(200).json({ success: false, message: "Deletion canceled by user" });
    }

    const deletedNote = await Note.findOneAndDelete({ _id: noteId, email: email });

    if (!deletedNote) {
      return res.status(404).json({ success: false, error: "Note not found" });
    }

    res.status(200).json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
