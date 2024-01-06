'use strict';

const express = require('express');
const router = express.Router();

const profileSchema = require('./../database/models/profile.model');

const profiles = [
  {
    "id": 1,
    "name": "A Martinez",
    "description": "Adolph Larrue Martinez III.",
    "mbti": "ISFJ",
    "enneagram": "9w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://soulverse.boo.world/images/1.png",
  }
];

module.exports = function () {

  router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    let profile
    try {
      profile = await profileSchema.findById(id);
    } catch (error) {
      console.log(error)
      return res.status(504);
    }

    if (!profile) {
      return res.status(404).send('Profile not found')
    } else {
      return res.render('profile_template', {
        profile
      });
    }
  });

  router.post('/', async function (req, res, next) {

    const { name, description, mbti, enneagram, variant, tritype, socionics, sloan, psyche, image } = req.body;
    try {
      await profileSchema.create({ name, description, mbti, enneagram, variant, tritype, socionics, sloan, psyche, image }).then(data => {
        res.json({
          message: 'Profile created successfully',
          data: data
        })
      })
    } catch (error) {
      if(error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(val => val.message);
        return res.status(400).json({
          message: 'Bad user input',
          error: messages
        });
      } else {
        res.status(500).send({
          message: "Error occurred while creating the Profile.",
          error: error
        });
      }
    }
  });


  return router;
}

