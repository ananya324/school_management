const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const schoolRoutes = require("./routes/schoolRoutes");
const { listSchools } = require("./controllers/schoolController");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server running");
});

app.use("/",schoolRoutes);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});