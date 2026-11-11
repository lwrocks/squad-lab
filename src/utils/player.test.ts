import { describe, it, expect } from "vitest";
import { transformPlayer } from "./player";
import type { RawPlayer } from "../types/player";

describe("transformPlayer", () => {
  // Shared test data (fixture)
  const rawPlayer: RawPlayer = {
    Nationality: "Argentina",
    Flag: "https://cdn.sofifa.org/flags/ar.png",
    Club: "Paris Saint-Germain",
    "Club Logo": "https://cdn.sofifa.org/teams/2/light/241.png",
    Name: "Lionel Messi",
    Photo: "https://cdn.sofifa.org/players/158023.png",
    ID: "158023",
    Age: "36",
    Position: "RW",
    "Preferred Foot": "Left",
    Height: "170cm",
    Weight: "72kg",
    Overall: "93",
    Dribbling: "95",
    BallControl: "96",
    HeadingAccuracy: "70",
    Acceleration: "85",
    SprintSpeed: "80",
    Agility: "91",
    ShotPower: "85",
    Stamina: "75",
    Strength: "65",
  };

  const incompletePlayer: RawPlayer = {
    ...rawPlayer,
    ID: "17791",
    Name: "J. McNulty",
    Position: "",
    Height: "",
    Weight: "",
    Overall: "",
    Dribbling: "",
  };

  it("should correctly transform a raw player into an ExplorerPlayer", () => {
    // Act
    const transformedPlayer = transformPlayer(rawPlayer);

    // Assert
    expect(transformedPlayer).toEqual({
      identity: {
        id: 158023,
        name: "Lionel Messi",
        photo: "https://cdn.sofifa.org/players/158023.png",
        nationality: "Argentina",
        flag: "https://cdn.sofifa.org/flags/ar.png",
        club: "Paris Saint-Germain",
        clubLogo: "https://cdn.sofifa.org/teams/2/light/241.png",
        age: 36,
        position: "RW",
        preferredFoot: "Left",
      },
      physical: {
        height: "170cm",
        weight: 72,
      },
      overall: 93,
      stats: {
        dribbling: 95,
        ballControl: 96,
        headingAccuracy: 70,
        acceleration: 85,
        sprintSpeed: 80,
        agility: 91,
        shotPower: 85,
        stamina: 75,
        strength: 65,
      },
    });
  });

  it("should convert numeric strings into numbers", () => {
    // Act
    const transformedPlayer = transformPlayer(rawPlayer);

    expect(transformedPlayer.identity.id).toBe(158023);
    expect(transformedPlayer.identity.id).toBeTypeOf("number");
    expect(transformedPlayer.identity.age).toBe(36);
    expect(transformedPlayer.identity.age).toBeTypeOf("number");
    expect(transformedPlayer.physical.weight).toBe(72);
    expect(transformedPlayer.physical.weight).toBeTypeOf("number");
    expect(transformedPlayer.overall).toBe(93);
    expect(transformedPlayer.overall).toBeTypeOf("number");
  });

  it("should handle missing numeric values", () => {
    const transformedPlayer = transformPlayer(incompletePlayer);

    expect(transformedPlayer.physical.height).toBe(null);
    expect(transformedPlayer.physical.weight).toBe(null);
    expect(transformedPlayer.overall).toBe(null);
    expect(transformedPlayer.stats.dribbling).toBe(null);
  });
});
