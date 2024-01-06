const {Schema, model} = require('mongoose');

const profileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mbti: {
        type: String,
        required: true
    },
    enneagram: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true
    },
    tritype: {
        type: Number,
        required: true
    },
    socionics: {
        type: String,
        required: true
    },
    sloan: {
        type: String,
        required: true
    },
    psyche: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    
    },
    // comments: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Comment'
    //     }
    // ]
});


module.exports = model('Profile', profileSchema);