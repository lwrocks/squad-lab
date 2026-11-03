import "./App.css";
import { useState, useEffect } from "react";
import { parsePlayers } from "./utils/csv";
import { transformPlayer } from "./utils/player";
import type { ExplorerPlayer } from "./types/player";
import PlayerCard from "./components/PlayerCard";

function App() {
  const [explorerPlayers, setExplorerPlayers] = useState<ExplorerPlayer[]>([]);

  useEffect(() => {
    async function loadPlayers() {
      const players = await parsePlayers();

      const transformedPlayers = players.map((player) =>
        transformPlayer(player),
      );
      setExplorerPlayers(transformedPlayers);
    }
    loadPlayers();
  }, []);

  return (
    <>
      <section>
        <h1>Player Explorer</h1>
        <p>This is the player explorer. Learn about your favorite players!</p>
      </section>
      <section>
        <h2>Players</h2>
        {explorerPlayers.map((player) => {
          return <PlayerCard key={player.identity.id} player={player} />;
        })}
      </section>
    </>
  );
}

export default App;
