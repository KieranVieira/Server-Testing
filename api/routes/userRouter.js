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

router.delete('/:id', (req, res) => {
    usersDb.remove(req.params.id)
        .then(count => {
            if(count){
                res.status(204).end();
            }else{
                res.status(404).json({
                    message: "User not found with given id"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not remove user",
                error
            })
        })
});

module.exports = router;