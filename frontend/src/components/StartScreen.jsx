import { useState } from "react"

export default function StartScreen({onStart}) {
    const [hostNameInput, setHostNameInput] = useState("")
    const [gameNameInput, setGameNameInput] = useState("")

    function handleClick() {
        // fetch('http://localhost:3005/create-session', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         userName: hostNameInput,
        //         gameName: gameNameInput,
        //     }),
        // })
        // .then(response => response.json())
        // .then(data => console.log('Session created:', data))
        // .catch((error) => {
        //     console.error('Error creating session:', error);
        // });
        onStart(hostNameInput, gameNameInput);
    }

    return(
        <>  
            <h1> Start Game </h1>
            <input type="text" placeholder="Enter name" value={hostNameInput} onChange={(event) => setHostNameInput(event.target.value)} />
            <input type="text" placeholder="Enter game name" value={gameNameInput} onChange={(event) => setGameNameInput(event.target.value)}/>
            <button onClick={handleClick}> Start! </button>
        </> 
    )
}