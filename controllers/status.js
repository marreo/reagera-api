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