import axios from 'axios'
import { useEffect, useState } from 'react'



const DisplayPlayer = (props) => {
    const {playerList, setPlayerList, player, game} = props
    const [playerStatus, setPlayerStatus] = useState("")
    
    

    useEffect(() => {
        console.log(game)
        switch (game) {
            case "1":
                setPlayerStatus(player.gameOne)
                break;
            case "2":
                setPlayerStatus(player.gameTwo)
                break;
            case "3":
                setPlayerStatus(player.gameThree)
                break;
        }

    }, [])

    const changePlayerStatus = (e) => {
        console.log(e.target.value)
        setPlayerStatus(e.target.value)
        switch (game) {
            case "1":
                player.gameOne = e.target.value
                break;
            case "2":
                player.gameTwo = e.target.value
                break;
            case "3":
                player.gameThree = e.target.value
                break;
        }
        axios.patch(`http://localhost:8000/api/players/${player._id}`, player)
        .then(player => {
            setPlayerList(playerList.map((onePlayer => {
                if (onePlayer._id === player._id) {
                    return player
                }
                else {
                    return onePlayer
                }
            })))
        })
    }

    return (
        <tr key = {player._id}>
            <td>{player._name}</td>
            <td><label className = "btn btn-outline-info"><input type = "radio" value = "Playing" onChange = {changePlayerStatus} name = {`status_${player._id}`} className = "form-check-input" checked = {playerStatus === "Playing"}/>Playing</label></td>
            <td><label className = "btn btn-outline-danger"><input type = "radio" value = "Not Playing" onChange = {changePlayerStatus} name = {`status_${player._id}`} className = "form-check-input" checked = {playerStatus === "Not Playing"}/>Not Playing</label></td>
            <td><label className = "btn btn-outline-warning"><input type = "radio" value = "Undecided" onChange = {changePlayerStatus} name = {`status_${player._id}`} className = "form-check-input" checked = {playerStatus === "Undecided"}/>Undecided</label></td>
        </tr>
    )
}

export default DisplayPlayer