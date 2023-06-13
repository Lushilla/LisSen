const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Lissenvote:Lucius1405@lissenvote.5wm7jij.mongodb.net/Quiz", { useNewUrlParser: true,  useUnifiedTopology: true, bufferCommands: false }) 


const notesSchema = {
  Wallet: String,
  categorySelect: String,
  questionCategorySelect: String,
  YesN: String,


}



  const Note = mongoose.model("Wallet", notesSchema);


  app.get("/", function(req, res){
      res.sendFile(__dirname + "/test3.html")
  })

//app.post

app.post("/", function(req,res) {
  let newNote = new Note({
    Wallet: req.body.Wallet,
    YesN: req.body.YesN,
    categorySelect: req.body.categorySelect,
    questionCategorySelect:req.body.questionCategorySelect


  });
  newNote.save();
  res. redirect("/")
})

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server is running on port " + port);
})


