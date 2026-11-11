export type RawPlayer = {
  ID: string;
  Name: string;
  Photo: string;
  Nationality: string;
  Flag: string;
  Club: string;
  "Club Logo": string;
  Age: string;
  Position: string;
  "Preferred Foot": string;
  Height: string;
  Weight: string;
  Overall: string;

  Dribbling: string;
  BallControl: string;
  HeadingAccuracy: string;
  Acceleration: string;
  SprintSpeed: string;
  Agility: string;
  ShotPower: string;
  Stamina: string;
  Strength: string;
};

export type ExplorerPlayer = {
  identity: {
    id: number;
    name: string;
    photo: string;
    nationality: string;
    flag: string;
    club: string;
    clubLogo: string;
    age: number;
    position: string;
    preferredFoot: string;
  };

  physical: {
    height: string | null;
    weight: number | null;
  };

  overall: number | null;

  stats: {
    dribbling: number | null;
    ballControl: number | null;
    headingAccuracy: number | null;
    acceleration: number | null;
    sprintSpeed: number | null;
    agility: number | null;
    shotPower: number | null;
    stamina: number | null;
    strength: number | null;
  };
};
