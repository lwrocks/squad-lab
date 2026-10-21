import "./App.css";
import { parsePlayers } from "./utils/csv";
import { transformPlayer } from "./utils/player";

function App() {
  async function loadPlayers() {
    const players = await parsePlayers();

    const player = transformPlayer(players[0]);
    console.log(player);
  }

  loadPlayers();

  return (
    <>
      <section>
        <h1>Squad Lab</h1>
      </section>
    </>
  );
}

export default App;
