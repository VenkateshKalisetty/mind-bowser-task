const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
require("./db/connection");

const noAuthRouter = require("./routes/noAuth");
const employeeRouter = require("./routes/employee");
const subscriptionRouter = require('./routes/subscription');
const { PORT } = require("./config");

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", noAuthRouter);
app.use("/api/employee", employeeRouter);
app.use('/api/subscription', subscriptionRouter);

app.use("/*", (req, res) => {
    res.send(`<h3>Not found!</h3>`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
