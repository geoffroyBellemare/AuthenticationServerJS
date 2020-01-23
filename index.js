const express = require("express");
const app = express();
const { PORT = 5000 } = process.env;

require("./routes/authRoutes.js")(app);

app.listen(PORT);
