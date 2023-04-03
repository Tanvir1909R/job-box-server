const User = require("../model/User");

module.exports.createEmployer = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.send({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user?.email) {
      res.send({
        status: "success",
        data: user,
      });
    } else {
      res.send({
        status: false,
        message: "user not found",
      });
    }
  } catch (error) {
    res.send({
      status: "fail",
      message: error.message,
    });
  }
};
