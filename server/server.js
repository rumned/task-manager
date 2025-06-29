const express = require("express");
const app = express();
const port = 8888;
const connectDB = require("./connection");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello From Task Manager API"));
app.use("/users", require("./controllers/users"));
app.use("/tasks", require("./controllers/tasks"));

connectDB();
app.listen(port, () => console.log(`Server is running on PORT:${port}`));
