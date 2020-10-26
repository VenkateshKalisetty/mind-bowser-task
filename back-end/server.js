const express = require("express");
const path = require("path");
const cors = require("cors");
require("./db/connection");

const noAuthRouter = require("./routes/noAuth");
const employeeRouter = require("./routes/employee");
const { PORT } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, "./frontend/dist/wd-m1-ui/")));

app.use("/api/auth", noAuthRouter);
app.use("/api/employee", employeeRouter);

app.use("/*", (req, res) => {
    res.send(`<h3>Not found!</h3>`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
