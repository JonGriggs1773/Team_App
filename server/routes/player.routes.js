const PlayerController = require("../controllers/player.controller")



module.exports = app => {
    app.get("/api/players", PlayerController.findAllPlayers)
    app.get("/api/players/:id", PlayerController.findPlayerById)
    app.post("/api/players", PlayerController.createPlayer)
    app.patch("/api/players/:id", PlayerController.editPlayer)
    app.delete("/api/players/:id", PlayerController.deletePlayer)
}