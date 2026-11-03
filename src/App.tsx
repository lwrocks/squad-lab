import "./App.css";
import { useState, useEffect } from "react";
import { parsePlayers } from "./utils/csv";
import { transformPlayer } from "./utils/player";
import type { ExplorerPlayer } from "./types/player";
import PlayerCard from "./components/PlayerCard";

function App() {
  const [explorerPlayer, setExplorerPlayer] = useState<ExplorerPlayer | null>(
    null,
  );

  useEffect(() => {
    async function loadPlayers() {
      const players = await parsePlayers();

      const player = transformPlayer(players[0]);
      setExplorerPlayer(player);
    }
    loadPlayers();
  }, []);

  if (!explorerPlayer) {
    return null;
  }

  return (
    <>
      <section>
        <h1>Player Explorer</h1>
        <p>This is the player explorer. Learn about your favorite players!</p>
      </section>
      <section>
        <h2>Players</h2>
        <PlayerCard player={explorerPlayer} />
      </section>
    </>
  );
}

export default App;
