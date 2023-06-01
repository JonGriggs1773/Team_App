import { useState, useEffect } from 'react'
import PlayerList from '../components/PlayerList' 
import Form from '../components/Form'
import DisplayGame from '../components/DisplayGame'
import Position from '../charts/Position'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'


const Main = () => {
    const [playerList, setPlayerList] = useState([])
    const positions = playerList.map((player) => player.preferredPosition)

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then((res) => {
            console.log("Response: ", res.data)
            setPlayerList(res.data.players)
        })
        .catch(err => console.log(err))
    }, [])




    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element = {<PlayerList playerList = {playerList} setPlayerList = {setPlayerList}/>} path = "/" />
                    <Route element = {<DisplayGame playerList = {playerList} setPlayerList = {setPlayerList} />} path = "/status/:game" />
                    <Route element = {<Form />} path = "/form" />
                    <Route element = {<Position positions = {positions} />} path = "/chart" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Main