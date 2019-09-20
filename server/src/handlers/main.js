const mainHandlers = {};

// Example get
mainHandlers.mainAction = (req, res) => {
  res.json({ message: "This is the backend for Palawan Chrome Extension" });
};

export { mainHandlers as default };
