
const mongoose = require('mongoose');

module.exports = function (model) {
    let Model = mongoose.model(model);
    return {
        get_all: function (req, res) {
            Model.find({}, function (err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        },
        get_a_model: function (req, res) {
            Model.findById(req.params.id, function (err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        },
        update_a_model: function (req, res) {
            Model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, task) {
                if (err)
                    res.send(err);
                res.json(task);
            });
        },
        delete_a_model: function (req, res) {
            Model.remove({
                _id: req.params.id
            }, function (err, task) {
                if (err)
                    res.send(err);
                res.json({ message: 'Task successfully deleted' });
            });
        }
    }
}

