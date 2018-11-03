const User = require('../models/User');

exports.get = (req, res) => {
  return User.find()
    .then((users) => {
      res.json(users);
    });
};
exports.search = (req, res) => {
  res.send('Hello World');
};
exports.create = (req, res) => {
  console.log(req.body);
  var user = new User();
  user.userId = req.body.userId;
  user.email = req.body.email;
  user.name = req.body.name;
  return user.save()
  .then(() => {
      res.status(200).end();
  });
};
exports.remove = (req, res) => {
  res.send('Hello World');
};