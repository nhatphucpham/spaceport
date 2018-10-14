'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AccountSchema = new Schema({
    user_name: {
        type: String,
        required: 'Username is required'
    },
    password: {
        type: String,
        required: 'Password is required'
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

module.exports = mongoose.model('Account', AccountSchema);