import { useNavigate, useParams } from "react-router-dom"
import axios  from "axios"



const PlayerList = (props) => {
    const {playerList, setPlayerList} = props
    const navigate = useNavigate()

    const deletePlayer = (id) => {
        axios.delete("http://localhost:8000/api/players/" + id)
        .then(res => {
            console.log("Results from Delete", res.data)
            setPlayerList(playerList.filter(player => player._id !== id))
        })
        .catch(err => console.log(err))
        navigate("/")
    }

    const sortAlphabeticallyAZ = () => {
        setPlayerList(playerList.sort((a, b) => a._name.localeCompare(b._name)))
        console.log("Check altered state!!!!!!")
        navigate("/")
    }

    const sortAlphabeticallyZA = () => {
        setPlayerList(playerList.sort((a, b) => b._name.localeCompare(a._name)))
        console.log("Check altered state!!!!!!")
        navigate("/")
    }

    return (
        <div className = "container w-75 mt-4">
            <div id = "navigation">
                <button onClick = {sortAlphabeticallyAZ} className = "btn btn-outline-primary">Sort A-Z</button>
                <a href = "/form" className = "btn btn-outline-warning">Add Player</a>
                <button onClick = {sortAlphabeticallyZA} className = "btn btn-outline-primary">Sort Z-A</button>
            </div>
            <table className = "table table-dark table-striped mt-4">
                <thead>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        playerList.map((player) => {
                            return(
                                <tr key = {player._id}>
                                    <td>{player._name}</td>
                                    <td>{player.preferredPosition}</td>
                                    <td><button onClick = {() => deletePlayer(player._id)} className = "btn btn-outline-danger">Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList