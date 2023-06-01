import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useState, useEffect } from 'react'



ChartJS.register(ArcElement, Tooltip, Legend);
const Position = (props) => {
    const {positions} = props
    const [stats, setStats] = useState({
        striker: 0,
        midfielder: 0,
        goalie: 0,
        forward: 0
    })
    console.log(positions)

    useEffect(() => {
        console.log("Getting called!!!!!!!!!!!!!!!!!!!!!!!")
        positions.map((item) => {
            if(item === "Forward") {
                stats['forward'] = stats['forward'] + 1
            }
            if(item === "Striker") {
                stats['striker'] = stats['striker'] + 1
            }
            if(item === "Midfielder") {
                stats['midfielder'] = stats['midfielder'] + 1
            }
            if(item === "Goalie") {
                stats['goalie'] = stats['goalie'] + 1
            }
        })})

    const data = {
        labels: ["Striker", "Midfielder", "Goalie", "Forward"],
        datasets: [{
            label: "# of Players",
            data: [stats['striker'], stats['midfielder'], stats['goalie'], stats['forward']],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)'
            ]
        }]
    }


    return (
        <div style = {{width: 500, height: 500, margin: "0 auto"}}>
            <Doughnut data = {data}/>
        </div>
    )
}

export default Position