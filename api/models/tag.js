'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TagSchema = new Schema({
    name: {
        type: String,
        required: 'Name is required'
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

module.exports = mongoose.model('Tag', TagSchema);