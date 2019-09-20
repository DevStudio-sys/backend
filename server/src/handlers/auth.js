const authHandlers = {};

// Show local sign in and local sign up forms,google sign in button
authHandlers.showAuthPage = (req, res) => {
  res.json({ message: "Please show auth page" });
};

export { authHandlers as default };
