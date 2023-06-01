import React from 'react'
import Manager from './Manager'
import { useParams } from 'react-router-dom'
import DisplayPlayer from './DisplayPlayer'




const DisplayGame = (props) => {
    const {playerList, setPlayerList} = props
    const { game } = useParams()


    return (
        <div className = "container w-75 mt-4">
            <Manager/>
            <table className = "table table-dark table-striped mt-4">
                <thead>
                    <th>Player</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        playerList.map((player) => {
                            return(
                                <DisplayPlayer key = {player._id} playerList = {playerList} setPlayerList = {setPlayerList} player = {player} game = {game}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayGame