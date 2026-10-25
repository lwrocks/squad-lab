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
        <h1>Player Explorer</h1>
        <p>This is the player explorer. Learn about your favorite players!</p>
      </section>
      <section>
        <h2>Players</h2>
        <article className="explorer-player-card">
          <div className="top-content">
            <div className="player-photo-placeholder"></div>
            <p className="overall-content">
              <strong>{explorerPlayer.overall}</strong>
              <span>Overall</span>
            </p>
          </div>
          <div className="player-name-position">
            <h3>{explorerPlayer.identity.name}</h3>
            <p>{explorerPlayer.identity.position}</p>
          </div>
          <div className="content-group">
            <span className="icon-placeholder"></span>
            <span>{explorerPlayer.identity.nationality}</span>
          </div>
          <div className="content-group">
            <span className="icon-placeholder"></span>
            <span>{explorerPlayer.identity.club}</span>
          </div>
          <button className="btn">View More</button>
        </article>
      </section>
    </>
  );
}

export default App;
