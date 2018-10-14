'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CategorySchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  decription: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  is_deleted: {
    type: Boolean,
    default: false
  }
}, { collection: 'dbo' });

module.exports = mongoose.model('Category', CategorySchema);