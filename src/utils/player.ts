import type { RawPlayer, ExplorerPlayer } from "../types/player";

export function transformPlayer(rawPlayer: RawPlayer): ExplorerPlayer {
  return {
    identity: {
      id: Number(rawPlayer.ID),
      name: rawPlayer.Name,
      photo: rawPlayer.Photo,
      nationality: rawPlayer.Nationality,
      flag: rawPlayer.Flag,
      club: rawPlayer.Club,
      clubLogo: rawPlayer["Club Logo"],
      age: Number(rawPlayer.Age),
      position: rawPlayer.Position,
      preferredFoot: rawPlayer["Preferred Foot"],
    },

    physical: {
      height: rawPlayer.Height,
      weight: parseInt(rawPlayer.Weight),
    },

    overall: Number(rawPlayer.Overall),

    stats: {
      dribbling: Number(rawPlayer.Dribbling),
      ballControl: Number(rawPlayer.BallControl),
      headingAccuracy: Number(rawPlayer.HeadingAccuracy),
      acceleration: Number(rawPlayer.Acceleration),
      sprintSpeed: Number(rawPlayer.SprintSpeed),
      agility: Number(rawPlayer.Agility),
      shotPower: Number(rawPlayer.ShotPower),
      stamina: Number(rawPlayer.Stamina),
      strength: Number(rawPlayer.Strength),
    },
  };
}
