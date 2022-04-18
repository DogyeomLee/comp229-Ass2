let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema(
    {
        personID: String,
        CName: String,
        email: String,
        number: Number

    },
    {
        collection: "contacts"
    }
);
module.exports = mongoose.model('Contact', contactModel);