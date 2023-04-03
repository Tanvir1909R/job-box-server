const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const userRoute = require('./routes/user.route')
const jobRoute = require('./routes/job.route')

app.use(express.json());
app.use(cors());

//database connection
mongoose.connect(
  "mongodb+srv://jobSideUser:c6gqkiQgZOzqnrYI@cluster0.fd7nv8i.mongodb.net/jobSide?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(()=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err.message);
})

app.get("/", (req, res) => {
  res.send(`<h1>welcome to job server</h1>`);
});

app.use('/user', userRoute)
app.use('/jobs', jobRoute)

app.listen(7000, () => {
  console.log("server is running");
}); 
