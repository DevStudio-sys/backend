const apiHandlers = {};

// Create
apiHandlers.apiCreate = (req, res) => {
  res.json({ version: "1.0.0", message: "This is API for Chrome Extension" });
};

apiHandlers.successAuth = (req, res) => {
  return res.status(200).send({
    message: "Authenticated!"
  });
};

apiHandlers.getUserinfo = (req, res) => {
  return res.json({ userinfo: req.user });
};

export { apiHandlers as default };
