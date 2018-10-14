'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  first_name: {
    type: String,
    required: 'First Name is required'
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: 'Email is required'
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: 'This user need has link to an account'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  is_deleted: {
    type: [{
      type: Boolean
    }],
    default: false
  }
}, { collection: 'dbo' });

module.exports = mongoose.model('User', UserSchema);