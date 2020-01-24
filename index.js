const express = require("express");
const passeport = require("passport");
require("./services/passport");
const app = express();

const { PORT = 5000 } = process.env;

require("./routes/authRoutes.js")(app);

app.listen(PORT);
