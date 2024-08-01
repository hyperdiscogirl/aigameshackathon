import { useState } from "react";

export default function LobbyScreen({ players, onAddPlayer, onGameStart, currentPlayer, gameName }) {
    const [newPlayerName, setNewPlayerName] = useState('');
  
    const handleAddPlayer = () => {
      if (newPlayerName.trim()) {
        onAddPlayer(newPlayerName.trim());
        setNewPlayerName('');
      }
    };
  
    return (
      <div>
        <h2>Game Lobby: {gameName}</h2>
        <ul>
          {players.map(player => (
            <li key={player.id}>{player.name}{player.isHost ? ' (Host)' : ''}</li>
          ))}
        </ul>
        
        {currentPlayer.isHost ? (
          <div>
            <p>Share this game name with other players: {gameName}</p>
            <button onClick={onGameStart} disabled={players.length < 2}>
              Start Game
            </button>
          </div>
        ) : (
          <p>Waiting for the host to start the game...</p>
        )}
  
        {!currentPlayer.isHost && (
          <div>
            <input 
              type="text" 
              value={newPlayerName} 
              onChange={(e) => setNewPlayerName(e.target.value)}
              placeholder="Enter your name"
            />
            <button onClick={handleAddPlayer}>Join Game</button>
          </div>
        )}
      </div>
    );
  }