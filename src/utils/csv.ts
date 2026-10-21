import Papa from "papaparse";
import type { RawPlayer } from "../types/player";

export async function parsePlayers(): Promise<RawPlayer[]> {
  const url = "src/data/fifa19_player.csv";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const csv = await response.text();

    return new Promise((resolve) => {
      Papa.parse<RawPlayer>(csv, {
        header: true,
        complete: (results) => {
          resolve(results.data);
        },
      });
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
