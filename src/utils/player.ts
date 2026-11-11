import type { RawPlayer, ExplorerPlayer } from "../types/player";

function parseNumericValue(value: string): number | null {
  if (value.trim() === "") {
    return null;
  }

  return Number.parseFloat(value);
}

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
      height: rawPlayer.Height.trim() === "" ? null : rawPlayer.Height,
      weight: parseNumericValue(rawPlayer.Weight),
    },

    overall: parseNumericValue(rawPlayer.Overall),

    stats: {
      dribbling: parseNumericValue(rawPlayer.Dribbling),
      ballControl: parseNumericValue(rawPlayer.BallControl),
      headingAccuracy: parseNumericValue(rawPlayer.HeadingAccuracy),
      acceleration: parseNumericValue(rawPlayer.Acceleration),
      sprintSpeed: parseNumericValue(rawPlayer.SprintSpeed),
      agility: parseNumericValue(rawPlayer.Agility),
      shotPower: parseNumericValue(rawPlayer.ShotPower),
      stamina: parseNumericValue(rawPlayer.Stamina),
      strength: parseNumericValue(rawPlayer.Strength),
    },
  };
}
