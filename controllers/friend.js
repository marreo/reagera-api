const Relation = require('../models/Relation');

exports.get = (req, res) => {
  console.log(req.body);
  return Relation.find({
      'users': req.body.userid
    })
    .populate("users")
    .then((relations) => {
      var relationUsers = relations.map(a => a.users);
      var relationFlatten = [].concat.apply([], relationUsers);
      var friends = relationFlatten.filter(b => b._id != req.body.userid);
      res.json(friends);
    });
};
exports.search = (req, res) => {
  res.send('Hello World');
};
exports.create = (req, res) => {
  console.log(req.body);
  var relation = new Relation();
  relation.users = [req.body.f1, req.body.f2];
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