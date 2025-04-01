const asyncHandler = require('express-async-handler');

const roleCheck = (role) => {
  return asyncHandler(async (req, res, next) => {
    if (req.user.role !== role) {
      res.status(403);
      throw new Error(`Access denied. Requires ${role} role.`);
    }
    next();
  });
};

module.exports = { roleCheck };