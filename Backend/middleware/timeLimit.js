const startTime = Date.now();

export const checkTimeLimit = (req, res, next) => {
  const now = Date.now();
  const diff = (now - startTime) / 1000 / 60;

  if (diff > 20) {
    return res.status(403).json({
      message: "Resume submission time has expired."
    });
  }

  next();
};