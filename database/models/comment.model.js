const {Schema, model, Types} = require('mongoose');

const mbtiTypes = {
    INFP: 'INFP',
    INFJ: 'INFJ',
    ENFP: 'ENFP',
    ENFJ: 'ENFJ',
    INTJ: 'INTJ',
    INTP: 'INTP',
    ENTJ: 'ENTJ',
    ENTP: 'ENTP',
    ISTP: 'ISTP',
    ISTP: 'ISTP',
    ISFP: 'ISFP',
    ISFJ: 'ISFJ',
    ESFP: 'ESFP',
    ESFJ: 'ESFJ',
    ESTP: 'ESTP',
    ESTJ: 'ESTJ',
    ISTJ: 'ISTJ',
  };

  const enneagramTypes = {
    '1W2': '1W2',
    '2W3': '2W3',
    '3W2': '3W2',
    '3W4': '3W4',
    '4W3': '4W3',
    '4W5': '4W5',
    '5W4': '5W4',
    '5W6': '5W6',
    '6W5': '6W5',
    '6W7': '6W7',
    '7W6': '7W6',
   '7w8': '7W8',
    '8w7': '8W7',
    '8w9': '8W9',
    '9w8': '9W8',
    '9w1': '9W1', 
  }

  const zodiacTypes = {
    'Aries': 'Aries',
    'Taurus': 'Taurus',
    'Gemini': 'Gemini',
    'Cancer': 'Cancer',
    'Leo': 'Leo',
    'Virgo': 'Virgo',
    'Libra': 'Libra',
    'Scorpio': 'Scorpio',
    'Sagittarius': 'Sagittarius',
    'Capricorn': 'Capricorn',
    'Aquarius': 'Aquarius',
    'Pisces': 'Pisces'
  }
const commentSchema = new Schema({
    comment: {
        type: Schema.Types.String,
        required: true
    },
    profileId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    mbtiVote: {
        type:  Schema.Types.String,
        enum: Object.values(mbtiTypes),
        required: true
    },
    enneagramVote: {
        type: Schema.Types.String,
        enum: Object.values(enneagramTypes),
        required: true
    },
    zodiacVote: {
        type:  Schema.Types.String,
        enum: Object.values(zodiacTypes),
        required: true
    },
});


module.exports = model('Comment', commentSchema);