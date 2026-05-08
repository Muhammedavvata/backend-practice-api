exports.getSafeDemo = (req, res) => {
  return res.status(200).json({
    message: "No error happened. This request was handled successfully.",
  });
};

exports.getValidationErrorDemo = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      statusCode: 400,
      message: "title is required",
    });
  }

  return res.status(200).json({
    message: "Valid request body",
    receivedTitle: title,
  });
};

exports.getNotFoundErrorDemo = (req, res, next) => {
  const error = new Error("Demo resource was not found");
  error.statusCode = 404;
  next(error);
};

exports.getServerErrorDemo = (req, res, next) => {
  const error = new Error("Demo unexpected server error");
  next(error);
};

exports.getAsyncErrorDemo = async (req, res, next) => {
  try {
    throw new Error("Demo async operation failed");
  } catch (error) {
    next(error);
  }
};
