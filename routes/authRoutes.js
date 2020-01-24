const passport = require("passport");
module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hi: "there" });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );
};
// http://localhost:5000/auth/google/callback?code=4%2FvwFLxdHpfuhFzQ12nHMmD016PK_x6Ijffq5TLAKwfrzQN5Svbf5Ni9M1d7PTYvO9rM-yYt1UHS_EuCtN73Gd92U&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent&session_state=66bdb5af52c8c0d2fed9c908a5d6cb79e21c133f..414f#
