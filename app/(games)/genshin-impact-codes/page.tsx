import GameCodes from "@/components/pages/GameCodes";
import CommentsSection from "@/components/pages/CommentsSection";
import Sidebar from "@/components/pages/Sidebar";
import BlogHeader from "@/components/pages/BlogHeader";
import { fetchGameData } from "@/lib/data";
import { getCurrentDate } from "@/lib/sideAndFeaturedGames";
import { Metadata } from "next";
import Image from "next/image";

const game = "Genshin Impact";
const currentDate = getCurrentDate();

export const metadata: Metadata = {
  title: `Genshin Impact Codes (${currentDate}) - Free Primogems & Mora  | GameCodesList`,
  description:
    "Discover the latest Genshin Impact codes for March 2025! Redeem active Genshin Impact codes for free Primogems, Mora, and exclusive rewards. Updated regularly - don&apos;t miss out!",
  alternates: {
    canonical: "https://www.gamecodeslist.com/genshin-impact-codes",
  },
};

export default async function GenshinImpactPage() {
  const { activeCodes, expiredCodes, comments, commentsSum, lastUpdated } =
    await fetchGameData(game);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row pt-20">
      <main className="md:w-2/3 md:pr-8">
        <BlogHeader
          title={`Genshin Impact Codes (${currentDate})`}
          lastUpdated={lastUpdated}
          commentsSum={commentsSum}
          url="https://gamecodeslist.com/genshin-impact-codes"
        />
        <div className="article-container">
          <p>
            Welcome to your ultimate guide for Genshin Impact codes! If
            you&apos;re exploring the vast world of Teyvat and looking to score
            some free Primogems, Mora, Hero&apos;s Wit, and other in-game
            goodies, you&apos;ve come to the right place.{" "}
            <a href="https://genshin.hoyoverse.com/" target="_blank" rel="noopener noreferrer">Hoyoverse,</a> the
            developer behind this massive open-world RPG, frequently releases
            Genshin Impact codes to reward players during livestreams, updates,
            and special events. In this guide, we&apos;ll provide you with the
            latest Genshin Impact codes, show you how to redeem them, and share
            tips on maximizing your rewards.
          </p>
          <Image
            src="/Genshin Impact.jpg"
            alt="Genshin Impact"
            width={680}
            height={346}></Image>
          <span className="text-xs">Image via Genshin Impact</span>
          <GameCodes
            game={game}
            activeCodes={activeCodes}
            expiredCodes={expiredCodes}
          />
          <p>
            Keep this page bookmarked, as we update it regularly with the newest
            Genshin Impact codes to ensure you never miss out on freebies. Ready
            to power up your characters? Let&apos;s dive into the world of
            Genshin Impact codes!
          </p>
      
          <h2>How to Redeem Genshin Impact Codes</h2>
          <p>
            Redeeming Genshin Impact codes is quick and easy. You&apos;ll need
            to reach Adventure Rank 10 first—open chests and complete quests to
            level up fast. Once you&apos;re ready, follow these steps:
          </p>
          <h3>Redeem Genshin Impact codes Online</h3>
          <ul>
            <li>
              Visit the{" "}
              <a href="https://genshin.hoyoverse.com/en/gift" target="_blank" rel="noopener noreferrer">
                official Genshin Impact code redemption page.
              </a>
            </li>
            <li>Log in to your Hoyoverse account.</li>
            <li>
              Select your server region and enter your character nickname.
            </li>
            <li>Paste one of the active Genshin Impact codes from our list.</li>
            <li>Hit Redeem and check your in-game mailbox for rewards!</li>
          </ul>
          <Image
            src="/how-to-redeem-genshin-impact-codes-online.jpg"
            alt="How To Redeem Genshin Impact Codes online"
            width={660}
            height={425}></Image>
          <h3>Redeem Genshin Impact codes In-Game</h3>
          <ul>
            <li>Launch Genshin Impact and open the Paimon menu.</li>
            <li>Go to Settings (&gt;) Account (&gt;) Redeem Code.</li>
            <li>Type or paste your Genshin Impact codes into the text box.</li>
            <li>
              Press Exchange and claim your goodies from the in-game mail.
            </li>
          </ul>
          <Image
            src="/how-to-redeem-genshin-impact-codes-in-game.jpg"
            alt="How to Redeem Genshin Impact Codes In-Game"
            width={660}
            height={425}></Image>
          <p>
            With these simple steps, you&apos;ll be enjoying free loot from
            Genshin Impact codes in no time!
          </p>
          <h2>What Are Genshin Impact Codes?</h2>
          <p>
            Genshin Impact codes are special promotional gifts from Hoyoverse
            that grant players free in-game items like Primogems, Mora, and
            enhancement materials. These codes are often released during
            livestreams, game updates (like version 5.4), or to celebrate
            milestones. Whether you&apos;re saving for the next banner or
            powering up your party, Genshin Impact codes are a fantastic way to
            get ahead without the grind.
          </p>
          <h2>Where to Find More Genshin Impact Codes</h2>
          <p>
            New Genshin Impact codes don&apos;t drop every day, but you can stay
            ahead by checking these sources:
          </p>
          <ul>
            <li>
              <strong>Official Livestreams:</strong> Tune in before major
              updates (e.g., version 5.5) for exclusive Genshin Impact codes.
            </li>
            <li>
              <strong>Social Media:</strong> Follow Genshin Impact on{" "}
              <a href="https://x.com/GenshinImpact" target="_blank" rel="noopener noreferrer">Twitter</a>,{" "}
              <a href="https://www.facebook.com/Genshinimpact/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              , or join the{" "}
              <a href="https://discord.com/invite/genshinimpact" target="_blank" rel="noopener noreferrer">
                Discord
              </a>{" "}
              for announcements.
            </li>
            <li>
              <strong>This Page:</strong> We&apos;ll keep you updated with the
              latest Genshin Impact codes as soon as they&apos;re available!
            </li>
          </ul>
          <h2>Tips to Get More Primogems Without Codes</h2>
          <ul>
            <li>
              <strong>Daily Commissions:</strong> Unlock at Adventure Rank 12
              for daily Primogem rewards.
            </li>
            <li>
              <strong>Chests & Shrines:</strong> Explore Teyvat to uncover
              hidden Primogems.
            </li>
            <li>
              <strong>Events:</strong> Participate in update events for
              bountiful rewards.
            </li>
            <li>
              <strong>Achievements:</strong> Complete objectives for extra
              Primogems.
            </li>
          </ul>
          <p>
            Combining these with Genshin Impact codes will keep your stash
            stocked!
          </p>
          <h2>Why Use Genshin Impact Codes?</h2>
          <p>
            With Genshin Impact codes, you can skip some of the grind and dive
            straight into summoning new characters or upgrading your team.
            Whether you&apos;re a free-to-play adventurer or a seasoned
            Traveler, these codes give you an edge in Teyvat. Stay tuned for
            Genshin Impact codes and beyond—your next big pull is just a redeem
            away!
          </p>
          <p>
            If you need a break from Genshin Impact, why not take a look at our
            Dress to Impress codes, Infinity Nikki codes, or Blox Fruits codes?
          </p>
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
