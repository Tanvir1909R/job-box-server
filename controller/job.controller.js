const Job = require("../model/Job");

module.exports.createJob = async (req, res) => {
  try {
    const res = await Job.create(req.body);
    res.send({
      status: "success",
      message: "job post successfully",
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports.getJob = async (req, res) => {
  try {
    const result = await Job.find({});
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

module.exports.getJobById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Job.findOne({ _id: id });
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

module.exports.jobApply = async (req, res) => {
  try {
    const userId = req.body.userId;
    const jobId = req.body.jobId;
    const email = req.body.email;

    const updateDoc = {
      $push: { applicant: { userId, email, jobId } },
    };
    const result = await Job.updateOne({ _id: jobId }, updateDoc);
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
module.exports.getAppliedJobsByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Job.find({applicant:{$elemMatch:{email}}},{applicant:0})
    res.send({
      status: true,
      data: result,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: error.message,
    });
  }
};
module.exports.jobQuestion = async (req, res) => {
    try {
      const userId = req.body.userId;
      const jobId = req.body.jobId;
      const email = req.body.email;
      const question = req.body.question;
  
      const updateDoc = {
        $push: { question: { userId, email, jobId,question,reply:[] } },
      };
      const result = await Job.updateOne({ _id: jobId }, updateDoc);
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
  module.exports.jobReply = async (req, res) => {
    try {
      const Id = req.body.userId;
      const reply = req.body.reply;

      const filter = { "question._id": Id };

      const updateDoc = {
        $push: {
          "question.$[user].reply": reply,
        },
      };
      const arrayFilter = {
        arrayFilters: [{ "user._id": Id }],
      };

      const result = await Job.updateOne(
        filter,
        updateDoc,
        arrayFilter
      );
       res.send({ status: true, data: result });
    } catch (error) {
      res.send({
        status: "fail",
        message: error.message,
      });
    }
  };