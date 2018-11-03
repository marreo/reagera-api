const Relation = require('../models/Relation');

exports.get = (req, res) => {
  res.send('Hello World');
};
exports.search = (req, res) => {
  res.send('Hello World');
};
exports.create = (req, res) => {
  console.log(req.body);
  var relation = new Relation();
  relation.friend1 = req.body.f1;
  relation.friend2 = req.body.f2;  
  relation.start = new Date();
  return relation.save()
  .then(() => {
      console.log('Hello?');
      res.status(200).end();
  });
};
exports.remove = (req, res) => {
  res.send('Hello World');
};