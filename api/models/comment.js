'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId, ref: 'User'
  },
  content: {
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

module.exports = mongoose.model('Comment', CommentSchema);