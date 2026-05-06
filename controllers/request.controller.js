// GET /api/request-demo/params/:id - Demo for req.params
exports.getParamsDemo = (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    source: "params",
    id: id,
    message: "This value came from req.params",
  });
};

// GET /api/request-demo/query - Demo for req.query
exports.getQueryDemo = (req, res) => {
  res.status(200).json({
    source: "query",
    query: req.query,
    message: "These values came from req.query",
  });
};

// POST /api/request-demo/body - Demo for req.body
exports.createBodyDemo = (req, res) => {
  const title = req.body.title;

  if (!title) {
    return res.status(400).json({
      message: "title is required in request body",
    });
  }

  res.status(201).json({
    source: "body",
    receivedTitle: title,
    message: "This value came from req.body",
  });
};

// GET /api/request-demo/headers - Demo for req.headers
exports.getHeadersDemo = (req, res) => {
  const hasAuthorizationHeader = !!req.headers.authorization;

  res.status(200).json({
    source: "headers",
    hasAuthorizationHeader: hasAuthorizationHeader,
    message: "Authorization header was checked from req.headers",
  });
};
