const mongoose = require('mongoose');
const Joi = require('joi');

const directorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    birthdate: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    }
});

const Director = mongoose.model('Director', directorSchema);

exports.Director = Director;
exports.validateDirector = (director) => {
    const schema = Joi.object({ name: Joi.string().min(2).max(50).required(), birthdate: Joi.date().required(), nationality: Joi.string().min(2).max(50).required() });
    return schema.validate(director);
}
