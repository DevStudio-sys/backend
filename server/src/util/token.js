import jwt from "jwt-simple";
import config from "../config";

export default {
  generateToken: function(email) {
    const timeStamp = new Date().getTime();
    const payload = {
      email: email,
      iat: timeStamp
    };
    return jwt.encode(payload, config.jwt_secret);
  },
  verifyToken: function(token, cb) {
    const decode = jwt.decode(token, config.jwt_secret);
    if (!decode) return cb(new Error("Token is not verified."));
    cb(null, decode);
  }
};
