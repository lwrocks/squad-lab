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
  "Ball Control": string;
  "Heading Accuracy": string;
  Acceleration: string;
  "Sprint Speed": string;
  Agility: string;
  "Shot Power": string;
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
    height: string;
    weight: number;
  };

  overall: number;

  stats: {
    dribbling: number;
    ballControl: number;
    headingAccuracy: number;
    acceleration: number;
    sprintSpeed: number;
    agility: number;
    shotPower: number;
    stamina: number;
    strength: number;
  };
};
