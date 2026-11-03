import type { ExplorerPlayer } from "../types/player";

type PlayerCardProps = {
  player: ExplorerPlayer;
};

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <article className="explorer-player-card">
      <div className="top-content">
        <div className="player-photo-placeholder"></div>
        <p className="overall-content">
          <strong>{player.overall}</strong>
          <span>Overall</span>
        </p>
      </div>
      <div className="player-name-position">
        <h3>{player.identity.name}</h3>
        <p>{player.identity.position}</p>
      </div>
      <div className="content-group">
        <span className="icon-placeholder"></span>
        <span>{player.identity.nationality}</span>
      </div>
      <div className="content-group">
        <span className="icon-placeholder"></span>
        <span>{player.identity.club}</span>
      </div>
      <button className="btn">View More</button>
    </article>
  );
}
