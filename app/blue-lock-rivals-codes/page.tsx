import GameCodes from "@/components/GameCodes";
import CommentsSection from "@/components/CommentsSection";
import Sidebar from "@/components/Sidebar";
import BlogHeader from "@/components/BlogHeader";
import { fetchGameData } from "@/lib/data";
import {getCurrentDate } from "@/lib/sideAndFeaturedGames";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

const game = "Blue Lock Rivals";
const currentDate = getCurrentDate();

export const metadata: Metadata = {
  title: `Blue Lock Rivals Codes (${currentDate}) - Free Spins & Rewards | GameCodesList`,
  description:
    "Discover the latest Blue Lock Rivals codes ! Redeem active Blue Lock Rivals codes for free spins, cash boosts, and flows to dominate the Roblox soccer field. Updated regularly!",
  keywords: [
    "Blue Lock Rivals codes",
    "Blue Lock Rivals",
    "Roblox Blue Lock Rivals codes",
    "Blue Lock Rivals active codes",
    "Blue Lock Rivals free spins",
    "Blue Lock Rivals redeem codes",
    "Blue Lock Rivals rewards",
  ],
  alternates: {
    canonical: "https://gamecodeslist.com/blue-lock-rivals-codes",
  },
};

export default async function BlueLockRivalsPage() {
  const { activeCodes, expiredCodes, comments, commentsSum, lastUpdated } =
    await fetchGameData(game);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <main className="md:w-2/3 md:pr-8">
        <BlogHeader
          title={`Blue Lock Rivals Codes (${currentDate})`}
          lastUpdated={lastUpdated}
          commentsSum={commentsSum}
          url="https://gamecodeslist.com/blue-lock-rivals-codes"
        />
        <div className="article-container">
          <p>
            If you're a fan of the thrilling Blue Lock anime and love
            action-packed soccer gameplay on Roblox, Blue Lock Rivals is the
            perfect game for you. With its unique gacha mechanics, flashy flows,
            and intense 5v5 matches, Blue Lock Rivals brings the ego-driven
            soccer world to life. To help you rise above the competition, we've
            compiled the latest Blue Lock Rivals codes. These active Blue Lock
            Rivals codes will grant you free spins, cash boosts, lucky flows,
            and more to unlock your ultimate soccer style!
          </p>
          <GameCodes
            game={game}
            activeCodes={activeCodes}
            expiredCodes={expiredCodes}
          />
          <Image
            src="/roblox-blue-lock-rivals-codes.jpg"
            alt="Blue Lock Rivals codes"
            width={768}
            height={432}></Image>
          <span className="text-xs">Image via Blue Lock Rivals Unofficial Fans</span>
          <h2>How to Redeem Blue Lock Rivals Codes</h2>
          <p>
            Redeeming Blue Lock Rivals codes is simple, but there are a couple
            of steps to follow first. Here's how to claim your freebies:
          </p>
          <ul>
            <li>
              Launch{" "}
              <Link href="https://www.roblox.com/games/18668065416/UPD-Blue-Lock-Rivals">
                Blue Lock Rivals on Roblox
              </Link>{" "}
              and reach Level 5 or 10 (some codes require Level 10).
            </li>
            <li>
              In the lobby, click the Codes button at the bottom of the screen.
            </li>
            <li>
              Enter a working Blue Lock Rivals code into the text box
              (copy-paste from our list to avoid typos).
            </li>
            <li>Hit Redeem to enjoy your rewards!</li>
          </ul>
          <Image
            src="/how-to-redeem-blue-lock-rivals-codes.jpg"
            alt="how to redeem blue lock rivals odes"
            width={531}
            height={291}></Image>
          <p>
            Pro tip: Double-check for typos or extra spaces when entering Blue
            Lock Rivals codes, as they're case-sensitive. If a code still
            doesn't work, it may have expired.
          </p>
          <h2>Why Are My Blue Lock Rivals Codes Not Working?</h2>
          <p>
            Having trouble with your Blue Lock Rivals codes? Here are the common
            reasons:
          </p>
          <ul>
            <li>
              <strong>Expired Code:</strong> Blue Lock Rivals codes don't come
              with set expiration dates, so they can stop working unexpectedly.
              Check our expired list above.
            </li>
            <li>
              <strong>Typos:</strong> Even a small mistake can invalidate a
              code. Copy-paste directly from our active Blue Lock Rivals codes
              list for accuracy.
            </li>
            <li>
              <strong>Level Requirement:</strong> Some Blue Lock Rivals codes
              require you to be at least Level 10. Keep playing matches and
              completing quests to level up!
            </li>
          </ul>
          <h2>How to Get More Blue Lock Rivals Codes?</h2>
          <p>Want more Blue Lock Rivals codes? Here's where to find them:</p>
          <ul>
            <li>
              <Link href="https://discord.com/invite/bluelockrivals">
                Official Blue Lock Rivals Discord:{" "}
              </Link>
              Join the server and check the codes channel for updates.
            </li>
            <li>
              <Link href="https://trello.com/b/R9gCGamp/blue-lock-rivals">
                Blue Lock Rivals Trello Board:{" "}
              </Link>
              A great resource for codes, styles, and game info.
            </li>
            <li>
              <Link href="https://www.roblox.com/communities/34671275/Blue-Lock-Rivals-Unofficial-Fans#!/about">
                BLR Community Page:{" "}
              </Link>
              Developers often drop Blue Lock Rivals codes here.
            </li>
            <li>
              <strong>This Page:</strong> We update our Blue Lock Rivals codes
              list daily, so bookmark us and stay ahead of the game!
            </li>
          </ul>
          <h2>Other Ways to Score Free Rewards in Blue Lock Rivals</h2>
          <p>Beyond Blue Lock Rivals codes, you can grab more freebies by:</p>
          <ul>
            <li>Logging in daily for level-up rewards and quests.</li>
            <li>Completing in-game challenges to earn cash and spins.</li>
            <li>
              Watching the Blue Lock Rivals Discord for giveaways and developer
              announcements.
            </li>
          </ul>
          <h2>What Is Blue Lock Rivals?</h2>
          <p>
            Blue Lock Rivals is a Roblox soccer game inspired by the hit Blue
            Lock anime and manga. It blends RPG elements with intense football
            action, letting you unlock signature styles and flows from
            characters like Isagi, Chigiri, and Rin. Whether you're scoring
            goals with anime-inspired flair or competing in 5v5 matches, Blue
            Lock Rivals delivers a unique experience for soccer fans and Roblox
            players alike. Redeeming Blue Lock Rivals codes gives you the edge
            to customize your character and dominate the field.
          </p>
          <p className="text-sm font-bold">Final Thoughts</p>
          <p>
            With these Blue Lock Rivals codes, you're ready to channel your
            inner egoist and take your soccer skills to the next level. Don't
            miss out—redeem the latest Blue Lock Rivals codes today and start
            scoring goals in style! Have you already claimed your free spins?
            Let us know your goal count in the comments below, and check out our
            list for more freebies in other popular games.
          </p>
        </div>
        <CommentsSection game={game} initialComments={comments} />
      </main>

      {/* Sidebar */}
      <aside className="md:w-1/4 mt-8 md:mt-0">
        <Sidebar/> 
      </aside>
    </div>
  );
}
