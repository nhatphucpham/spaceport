'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    category: [
        { type: Schema.Types.ObjectId, ref: 'Category' }
    ],
    title: {
        type: String,
        required: 'Title is required'
    },
    author: {
        type: String
    },
    cover: {
        type: String,
        default: ''
    },
    rate: {
        type: Number,
        default: 0
    },
    view_number: {
        type: Number,
        default: 0
    },
    content: {
        type: String,
        required: 'Content is required'
    },
    tag: [
        { type: Schema.Types.ObjectId, ref: 'Tag' }
    ],
    comments: [
        { type: Schema.Types.ObjectId, ref: 'Commment' }
    ],
    ext: {
        type: Schema.Types.ObjectId
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

module.exports = mongoose.model('Post', PostSchema);