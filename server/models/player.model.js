const mongoose = require('mongoose')



const PlayerSchema = new mongoose.Schema({
    _name: {
        type: String,
        required: [true, "Name is a required field"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    preferredPosition: {
        type: String,
    },
    gameOne: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        required: [true, "Game One is a required field"],
        default: "Undecided"
    },
    gameTwo: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        required: [true, "Game One is a required field"],
        default: "Undecided"
    },
    gameThree: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        required: [true, "Game One is a required field"],
        default: "Undecided"
    }
}, {timestamps: true})

const Player = mongoose.model("Player", PlayerSchema)
module.exports = Player