import { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import LobbyScreen from './components/LobbyScreen';
import GameRoundScreen from './components/GameRoundScreen';
// import ResultScreen from './components/ResultScreen';
// import GameOverScreen from './components/GameOverScreen';

function App() {
  const [gameState, setGameState] = useState('start');
  const [players, setPlayers] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [wordCloud, setWordCloud] = useState([]);
  const [gameName, setGameName] = useState('');

  // // Function to fetch game state from server
  // const fetchGameState = async () => {
  //   try {
  //     const response = await fetch('/api/game-state');
  //     const data = await response.json();
  //     setPlayers(data.players);
  //     setCurrentRound(data.currentRound);
  //     setWordCloud(data.wordCloud);
  //   } catch (error) {
  //     console.error('Failed to fetch game state:', error);
  //   }
  // };

  // // Fetch game state every 5 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(fetchGameState, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  const handleStartGame = (hostName, gameName) => {
    const hostPlayer = { 
      id: players.length + 1, 
      name: hostName,
      score: 0,
      isHost: true
    };
    setPlayers([hostPlayer]);
    setCurrentPlayer(hostPlayer);
    setGameName(gameName);
    setGameState('lobby');

    // log for now, api call to create session with username and game name
    console.log(`Game "${gameName}" created by host "${hostName}"`);
  };

  const handleAddPlayer = (newPlayerName) => {
    const newPlayer = {
      id: players.length + 1,
      name: newPlayerName,
      isHost: false
    };
    setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
  };

  return (
    <div className="App">
      {gameState === 'start' && (
        <StartScreen onStart={handleStartGame} />
      )}
      {gameState === 'lobby' && (
        <LobbyScreen 
          players={players}
          onAddPlayer={handleAddPlayer}
          onGameStart={() => setGameState('game')}
          currentPlayer={currentPlayer}
          gameName={gameName}
        />
      )}
      {gameState === 'game' && (
        <GameRoundScreen 
          players={players}
          currentRound={currentRound}
          wordCloud={wordCloud}
          onSubmitWord={(player, word) => {
            // Update player's word choice
            // This is a simplification; you'd likely want to send this to the server
            const updatedPlayers = players.map(p => 
              p.id === player.id ? {...p, chosenWord: word} : p
            );
            setPlayers(updatedPlayers);
          }}
          onRoundEnd={() => setGameState('result')}
        />
      )}
      {/* {gameState === 'result' && (
        <ResultScreen 
          players={players}
          currentRound={currentRound}
          onNextRound={() => {
            setCurrentRound(currentRound + 1);
            setGameState('game');
          }}
          onGameEnd={() => setGameState('gameover')}
        />
      )}
      {gameState === 'gameover' && (
        <GameOverScreen 
          players={players}
          onRestart={() => {
            setPlayers([]);
            setCurrentRound(0);
            setWordCloud([]);
            setGameState('start');
          }}
        />
      )} */}
    </div>
  );
}

export default App;