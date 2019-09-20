import passport from "passport";
import UserModel from "../model/user";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// =========================================================================
// GOOGLE+ SIGN UP and SIGN IN =============================================
// =========================================================================
// Authorize, store user info in session, store user info in DB (if new user)
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.APP_URL}/auth/google/callback`,
      passReqToCallback: true
    },
    (request, accessToken, refreshToken, profile, done) => {
      process.nextTick(() => {
        /* store user info in DB (if new user) --*/
        return UserModel.findOne({ googleId: profile.id }, (err, user) => {
          if (user) {
            /* store user info in session --*/
            done(null, profile);
            return;
          }
          const image =
            profile.photos && profile.photos[0]
              ? profile.photos[0].value
              : null;
          const newUser = new UserModel({
            name: profile.displayName,
            email: profile.email,
            googleId: profile.id,
            image: image,
            role: 0
          });
          newUser.save().then(user => {
            done(null, profile);
          });
        });
      });
    }
  )
);
