const Player = require("../models/player.model")


module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
    .then(player => {
        res.json({player: player})
    })
    .catch(err => console.log(err))
}

module.exports.findAllPlayers = (req, res) => {
    Player.find()
    .then((allPlayers) => {
        console.log(allPlayers)
        res.json({players: allPlayers})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.findPlayerById = (req, res) => {
    Player.findOne({_id: req.params.id})
    .then(onePlayer => {
        res.json({player: onePlayer})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.editPlayer = (req, res) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
    .then(updatedPlayer => {
        res.json({player: updatedPlayer})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}