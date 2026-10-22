import "./App.css";
import { useState, useEffect } from "react";
import { parsePlayers } from "./utils/csv";
import { transformPlayer } from "./utils/player";
import type { ExplorerPlayer } from "./types/player";

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
        <h1>Squad Lab</h1>
        <h2>{explorerPlayer.identity.name}</h2>
        <p>Nationality: {explorerPlayer.identity.nationality}</p>
        <p>Club: {explorerPlayer.identity.club}</p>
        <p>Position: {explorerPlayer.identity.position}</p>
        <p>Overall: {explorerPlayer.overall}</p>
      </section>
    </>
  );
}

export default App;
