'use strict';

const express = require('express');
const router = express.Router();

const profileSchema = require('./../database/models/profile.model');
const commentSchema = require('./../database/models/comment.model');

module.exports = function () {
    router.post('/:id', async function (req, res, next) {
        const { comment, mbti, enneagram, zodiac } = req.body;

        try {
            const profile = await profileSchema.findOne({ _id: req.params.id });

            if (!profile) {
                return res.status(404).send('Profile not found')
            }

            const newComment = new commentSchema({
                comment,
                mbtiVote: mbti,
                enneagramVote: enneagram,
                zodiacVote: zodiac,
                profileId: profile._id
            });

            const createComment = await newComment.save();
            
            res.json({
                message: 'Comment added successfully',
                data: createComment
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
                  message: "Error occurred while adding comment.",
                  error: error
                });
              }
        }
    });

    return router;
}

