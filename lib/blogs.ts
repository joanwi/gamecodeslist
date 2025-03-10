export const blogs = [
  {
    id: 1,
    game: "Fragpunk Crosshairs",
    title: "Fragpunk Crosshairs: Enhancing Precision in Competitive Gaming",
    description:
      "Understanding how to effectively customize your crosshair in Fragpunk will help you gain a competitive edge.",
    date: "2025-03-07",
    coverImage: "/Fragpunk Crosshairs-1.jpg",
    url: "/blogs/fragpunk-crosshairs-enhancing-precision-in-gaming",
  },
  {
    id: 2,
    game: "Genshin Impact: Furina",
    title: "Furina: Ultimate Guide and Builds for Genshin Impact Players",
    description:
      "Discover Furina, the flamboyant Hydro Archon in Genshin Impact! Explore her unique abilities, best weapons, and artifacts in our comprehensive guide.",
    date: "2025-03-09",
    coverImage: "/Genshin-Impact-Furina.jpg",
    url: "/blogs/guide-and-builds-for-genshin-impact-furina",
  },
];

export const latestBlogs = blogs.sort((a, b) => b.date.localeCompare(a.date));
