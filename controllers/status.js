const Status = require('../models/Status');

exports.create = (req, res) => {
  console.log(req.body);
  var status = new Status();
  status.user = req.body.userId;
  status.text = req.body.text;
  status.posted = new Date();
  return status.save()
  .then(() => {
      res.status(200).end();
  });
};

exports.get = (req, res) => {
  console.log(req.body);
  return Status.find({
      'user': '5bddc17e71f0280015ea90e9'
    })
    .populate("user")
    .then((statuses) => {
        res.json(statuses);
    });
  };