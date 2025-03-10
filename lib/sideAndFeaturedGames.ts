export const featuredGames = [
  //fixed 5 game
  {
    game: "FragPunk",
    imageUrl: "/Fragpunk Crosshairs-1.jpg",
  },
  {
    game: "Monster Hunter Wilds",
    imageUrl: "/Monster-Hunter-Wilds-1.jpg",
  },
  {
    game: "Blue Lock Rivals",
    imageUrl: "/roblox-blue-lock-rivals.jpg",
  },
  {
    game: "Jujutsu Infinite",
    imageUrl: "/Jujutsu Infinite Games.png",
  },
  {
    game: "Blox Fruits",
    imageUrl: "/Blox-Fruits-codes.jpg",
  },
];
//siderbar image === featuredGamesImage
export const sideGames = [
  {
    game: "Jujutsu Infinite",
    imageUrl: "/Jujutsu Infinite Games.png",
  },
  {
    game: "Genshin Impact",
    imageUrl: "/Genshin Impact.jpg",
  },
  {
    game: "Blue Lock Rivals",
    imageUrl: "/roblox-blue-lock-rivals.jpg",
  },
  {
    game: "Blox Fruits",
    imageUrl: "/Blox-Fruits-codes.jpg",
  },
  {
    game: "Monster Hunter Wilds",
    imageUrl: "/Monster-Hunter-Wilds-1.jpg",
  },
  {
    game: "Anime Adventures",
    imageUrl: "/Anime-Adventures.jpg",
  },
  {
    game: "FragPunk",
    imageUrl: "/Fragpunk Crosshairs-1.jpg",
  },
  {
    game: "SpongeBob Tower Defense",
    imageUrl: "/SpongeBob-Tower-Defense.jpg",
  },
];


export const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
};
