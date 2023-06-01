import { useState } from 'react'

const Manager = (props) => {
    return (
        <div>
            <h2 className = "mt-5 fs-3">
                <a className = "text-secondary" href = "/status/1">Game One | </a> 
                <a className = "text-secondary" href = "/status/2">Game Two | </a> 
                <a className = "text-secondary" href = "/status/3">Game Three</a> 
            </h2>
        </div>
    )
}

// Game 1,2,3 all need to be accessible through routes
// All games need to either be components themselves, or somehow encapsulated in the Manager component
// Routes may need parameter :id instead of actual number
// Try passing components in as props

export default Manager