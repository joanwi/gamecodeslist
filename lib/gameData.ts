export interface GameData {
  id: number;
  game: string;
  url: string;
}

export const gameData: GameData[] = [
  { id: 1, game: "Jujutsu Infinite", url: "/jujutsu-infinite-codes" },
  { id: 2, game: "Genshin Impact", url: "/genshin-impact-codes" },
  { id: 3, game: "Blue Lock Rivals", url: "/blue-lock-rivals-codes" },
  { id: 4, game: "Blox Fruits", url: "/blox-fruits-codes" },
  { id: 5, game: "Monster Hunter Wilds", url: "/monster-hunter-wilds-character-codes" },
  { id: 6, game: "Anime Adventures", url: "/anime-adventures-codes" },
  { id: 7, game: "FragPunk", url: "/fragpunk-redeem-codes" },
  { id: 8, game: "SpongeBob Tower Defense", url: "/spongebob-tower-defense-codes" },
  { id: 9, game: "WWE 2K25", url: "/wwe-2k25-codes" },
];



// search function - support game name fuzzy matching, not case-sensitive
export function searchGames(query: string, limit: number = 10): GameData[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return gameData
    .filter(game => game.game.toLowerCase().includes(searchTerm))
    .slice(0, limit);
}

// get all game data
export function getAllGames(): GameData[] {
  return gameData;
} 