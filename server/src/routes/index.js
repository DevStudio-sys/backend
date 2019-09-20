import apiRoutes from "./api.routes";
import authRoutes from "./auth.routes";
import mainRoutes from "./main.routes";

export default function initializeRoutes(app) {
  app.use("/", mainRoutes);
  app.use("/api/", apiRoutes);
  app.use("/auth/", authRoutes);
}

// app.get("/ping", (req, res) => res.send("pong"));
// app.get("/", (req, res) =>
//   res.json({ source: "https://github.com/amazingandyyy/mern" })
// );
// app.post("/signup", Authentication.signup);
// app.post("/signin", Authentication.signin);
// app.get("/auth-ping", Middlewares.loginRequired, (req, res) =>
//   res.send("connected")
// );
// app.use("/user", Middlewares.loginRequired, UserRouter);
