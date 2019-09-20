import { Router } from "express";
import passport from "passport";
import token from "./../util/token";

const authRoutes = Router();

authRoutes.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"]
  })
);

authRoutes.get("/google/callback", function(req, res) {
  passport.authenticate(
    "google",
    {
      session: false,
      failureRedirect: "/auth" // redirect back to the auth page if there is an error
    },
    function(err, user) {
      if (err) {
        res.status(500).send(
          JSON.stringify({
            msg: "Internal Server Error"
          })
        );
      }
      if (user) {
        var newtoken = token.generateToken(user.email);
        console.log(newtoken);
        res.cookie("token", newtoken);
        res.redirect(process.env.FRONT_URL + "/#dashboard");
      }
    }
  )(req, res);
});

export { authRoutes as default };
