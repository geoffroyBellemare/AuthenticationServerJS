const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passeport = require("passport");
const keys = require("./config/keys.js");
const { PORT = 5000 } = process.env;
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passeport.initialize());
app.use(passeport.session());

require("./routes/authRoutes.js")(app);

app.listen(PORT);
