import './App.css';

import React, { useState } from 'react';
import { Game, GameProviders, Player } from "narraleaf-react";
import { story } from "./story";


function App() {
  // initialize the game manually
  const [game] = useState(new Game({
    elementStyles: {
      say: {
        // custom styles for the "say" container
        container: "rounded-lg shadow-md p-4 bg-white",
      }
    }
  }), []);

  return (
    <div className="App">
      {/* Don't forget to pass the game to providers */}
      <GameProviders game={game}>
        <Player
          story={story}
          width="100vw"
          height="100vh"
          onReady={({game}) => {
            game.getLiveGame().newGame();
          }}
        />
      </GameProviders>
    </div>
  );
}

export default App;
