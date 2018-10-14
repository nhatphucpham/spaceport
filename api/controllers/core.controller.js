
var mongoose = require('mongoose');

var CoreController = function (model) {
  this.get_all = function (req, res) {
    model.find({}, function (err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  };
  this.get_a_model = function (req, res) {
    model.findById(req.params.id, function (err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  };
  this.update_a_model = function (req, res) {
    model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, response) {
      if (err)
        res.send(err);
      res.json(response);
    });
  };
  this.delete_a_model = function (req, res) {
    model.remove({
      _id: req.params.id
    }, function (err, response) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };

}

module.exports = CoreController;

