const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const router = require("./routes/book-routes");
console.log('sssssssssssssssssss')
//middleware
app.use(express.json());

app.use(cors());
app.get('/',(req,res)=>{
  res.send('Welcome')
})
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://suraj:sangle@cluster0.kowim9l.mongodb.net/bookApp?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log("ERROE ", err));
