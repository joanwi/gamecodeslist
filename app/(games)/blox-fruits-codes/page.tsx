import GameCodes from "@/components/GameCodes";
import CommentsSection from "@/components/CommentsSection";
import Sidebar from "@/components/Sidebar";
import BlogHeader from "@/components/BlogHeader";
import { fetchGameData } from "@/lib/data";
import { getCurrentDate } from "@/lib/sideAndFeaturedGames";
import { Metadata } from "next";
import Image from "next/image";


const game = "Blox Fruits";
const currentDate = getCurrentDate();

export const metadata: Metadata = {
  title: `Blox Fruits Codes (${currentDate}) - Free Rewards | GameCodesList`,
  description:
    "Get all the latest Blox Fruits codes for free XP boosts, stat resets, and rewards. Updated with new active codes and expired ones. Redeem now before they expire!",
  keywords: [
    "Blox Fruits codes",
    "Roblox Blox Fruits codes",
    "working Blox Fruits codes",
    "free XP Blox Fruits",
    "Blox Fruits 2x experience",
    "redeem Blox Fruits codes",
    "Blox Fruits rewards",
  ],
  alternates: {
    canonical: "https://www.gamecodeslist.com/blox-fruits-codes",
  },
};

export default async function BloxFruitsPage() {
  const { activeCodes, expiredCodes, comments, commentsSum, lastUpdated } =
    await fetchGameData(game);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <main className="md:w-2/3 md:pr-8">
        <BlogHeader
          title={`Blox Fruits Codes (${currentDate})`}
          lastUpdated={lastUpdated}
          commentsSum={commentsSum}
          url="https://gamecodeslist.com/blox-fruits-codes"
        />
        <div className="article-container">
          <p>
            Looking for the latest Blox Fruits codes to boost your gameplay?
            You&apos;ve come to the right place! Our regularly updated list features
            all active Blox Fruits codes that provide valuable rewards like 2x
            experience boosts, stat resets, and in-game currency. Redeem these
            Blox Fruits codes quickly as they expire without warning!
          </p>
          <Image
            src="/Blox Fruits codes.jpg"
            alt="Blox Fruits codes"
            width={768}
            height={432}></Image>
          <span className="text-xs">Image via Gamer Robot Inc</span>
          <GameCodes
            game={game}
            activeCodes={activeCodes}
            expiredCodes={expiredCodes}
          />
      
          <h2>How to Redeem Blox Fruits Codes?</h2>
          <p>
            Redeeming Blox Fruits codes is simple. Follow these steps to claim
            your rewards:
          </p>
          <ul>
            <li>
              Launch{" "}
              <a href="https://www.roblox.com/games/2753915549/Blox-Fruits" target="_blank" rel="noopener noreferrer">
                Blox Fruits in Roblox
              </a>{" "}
            </li>
            <li>Choose a side (Marine or Pirate)</li>
            <li>
              Once loaded into the game, locate the gift icon on the left side
              of your screen (above the compass)
            </li>
            <li>Click on the icon to open the code redemption window</li>
            <li>Copy a Blox Fruits code from our list</li>
            <li>Paste or type the code into the text field</li>
            <li>Click {"Redeem"} to claim your reward</li>
            <li>Enjoy your free Blox Fruits rewards!</li>
          </ul>
          <Image
            src="/how-to-redeem-blox-fruits-codes.jpg"
            alt="how to redeem blox fruits codes"
            width={861}
            height={524}></Image>
          <p>
            Remember that Blox Fruits codes are case-sensitive, so enter them
            exactly as shown. The 2x experience boosts from codes stack with
            each other and will save even if you leave the game, making them
            extremely valuable for leveling up quickly.
          </p>
          <h2>What Are Blox Fruits Codes?</h2>
          <p>
            Blox Fruits codes are special promotional codes released by the game
            developers that provide various free rewards to players. These Blox
            Fruits codes typically offer:
          </p>
          <ul>
            <li>
              <strong>2x Experience Boosts:</strong> The most common reward,
              giving double XP for a limited time
            </li>
            <li>
              <strong>Stat Resets:</strong> Allow you to reallocate your
              character&apos;s stat points
            </li>
            <li>
              <strong>Beli:</strong> In-game currency to purchase items
            </li>
            <li>
              <strong>Special Titles:</strong> Unique titles to display in-game
            </li>
          </ul>
          <p>
            The developers of Blox Fruits regularly release new codes to
            celebrate game updates, holidays, or reaching social media
            milestones. Using Blox Fruits codes is one of the most efficient
            ways to progress faster in the game without spending Robux.
          </p>
          <h2>Where to Find New Blox Fruits Codes?</h2>
          <p>
            For the most up-to-date Blox Fruits codes, bookmark this page as we
            update it regularly with new codes. Alternatively, you can follow
            these official sources:
          </p>
          <ul>
            <li>
              <a href="https://x.com/BloxFruits" target="_blank" rel="noopener noreferrer">Twitter/X</a>: Follow the
              official Blox Fruits Twitter account
            </li>
            <li>
              <a href="https://discord.com/invite/bloxfruits" target="_blank" rel="noopener noreferrer">Discord</a>:
              Join the official Blox Fruits Discord server
            </li>
            <li>
              <a href="https://www.youtube.com/@GamerRobot/videos" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
              : Subscribe to developer channels that announce new Blox Fruits
              codes
            </li>
          </ul>
          <p>
            Stay tuned for more Blox Fruits codes as they&apos;re released. We&apos;ll
            continue updating this list to ensure you have access to all the
            latest free rewards!
          </p>
          <h2>FAQ About Blox Fruits Codes</h2>
          <p className="text-sm font-bold">Do Blox Fruits codes expire?</p>
          <p>
            Yes, most Blox Fruits codes eventually expire. We recommend
            redeeming codes as soon as possible.
          </p>
          <p className="text-sm font-bold">
            How often are new Blox Fruits codes released?
          </p>
          <p>
            New Blox Fruits codes are typically released during major game
            updates, special events, or when the game reaches certain
            milestones.
          </p>
          <p className="text-sm font-bold">
            My Blox Fruits code isn&apos;t working. What should I do?
          </p>
          <p>
            Double-check that you&apos;ve entered the code exactly as shown,
            including correct capitalization. If it still doesn&apos;t work, the code
            may have expired.
          </p>
          <p className="text-sm font-bold">
            Do experience boosts from Blox Fruits codes stack?
          </p>
          <p>
            Yes! The 2x experience boosts from different codes will stack
            together, and they persist even if you leave the game.
          </p>
          <p className="text-sm font-bold">
            Can I use Blox Fruits codes on mobile?
          </p>
          <p>
            Absolutely! Blox Fruits codes work on all platforms, including
            mobile, PC, and tablet devices.
          </p>
          <p>Keep checking back for more Blox Fruits codes and happy gaming!</p>
        </div>
        <CommentsSection game={game} initialComments={comments} />
      </main>

      {/* Sidebar */}
      <aside className="md:w-1/4 mt-8 md:mt-0">
        <Sidebar />
      </aside>
    </div>
  );
}
