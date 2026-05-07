const getOkDemo = (req, res) => {
  return res.status(200).json({
    statusCode: 200,
    status: "OK",
    message: "The request was successful",
  });
};

const createDemo = (req, res) => {
  return res.status(201).json({
    statusCode: 201,
    status: "Created",
    message: "A new resource was created successfully",
  });
};

const getBadRequestDemo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      statusCode: 400,
      status: "Bad Request",
      message: "title is required",
    });
  }

  return res.status(200).json({
    statusCode: 200,
    status: "OK",
    message: "Valid request body",
    receivedTitle: title,
  });
};

const getUnauthorizedDemo = (req, res) => {
  return res.status(401).json({
    statusCode: 401,
    status: "Unauthorized",
    message: "Authentication is required",
  });
};

const getForbiddenDemo = (req, res) => {
  return res.status(403).json({
    statusCode: 403,
    status: "Forbidden",
    message: "You are authenticated but not allowed to access this resource",
  });
};

const getNotFoundDemo = (req, res) => {
  return res.status(404).json({
    statusCode: 404,
    status: "Not Found",
    message: "The requested resource was not found",
  });
};

const getServerErrorDemo = (req, res) => {
  return res.status(500).json({
    statusCode: 500,
    status: "Internal Server Error",
    message: "Something went wrong on the server",
  });
};

module.exports = {
  getOkDemo,
  createDemo,
  getBadRequestDemo,
  getUnauthorizedDemo,
  getForbiddenDemo,
  getNotFoundDemo,
  getServerErrorDemo,
};
