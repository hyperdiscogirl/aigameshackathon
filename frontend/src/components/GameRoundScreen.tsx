const STARTING_CONCEPTS = [
    { concept: "Adventure", emoji: "🗺️" },
    { concept: "Wisdom", emoji: "🧠" },
    { concept: "Art", emoji: "🎨" },
    { concept: "Science", emoji: "🔬" },
    { concept: "History", emoji: "📜" },
    { concept: "Mystery", emoji: "🕵️" },
    { concept: "Fantasy", emoji: "🧙" },
    { concept: "Technology", emoji: "💻" },
    { concept: "Nature", emoji: "🌳" },
    { concept: "Freedom", emoji: "🕊️" },
    { concept: "Justice", emoji: "⚖️" },
    { concept: "Knowledge", emoji: "📚" },
    { concept: "Peace", emoji: "☮️" },
    { concept: "Love", emoji: "❤️" },
    { concept: "Music", emoji: "🎵" },
    { concept: "Strength", emoji: "💪" },
    { concept: "Creativity", emoji: "🎨" },
    { concept: "Courage", emoji: "🦁" },
    { concept: "Health", emoji: "🍎" },
    { concept: "Friendship", emoji: "🤝" }
  ];

let concepts = STARTING_CONCEPTS;
  

function GameRoundScreen() {

    return (
        <div>
            <h1>Game Round</h1>
            {concepts.map((concept, index) => (
                <button key={index} onClick={() => console.log(concept)}>
                    <h2>{concept.concept}</h2>
                    <p>{concept.emoji}</p>
                </button>
            ))}
            
        
        </div>
    );
}   

export default GameRoundScreen;