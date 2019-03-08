const express = require('express');
const usersDb = require('../../database/helpers/usersHelper.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'stuff was sent'})
});

router.post('/', (req, res) => {
    usersDb.insert(req.body)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(400).json({
                message: "bad request",
                error
            })
        })
});

module.exports = router;