require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/upload", require("./routes/upload"));
app.use("/api/payment", require("./routes/payment"));

// DB Connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running"));