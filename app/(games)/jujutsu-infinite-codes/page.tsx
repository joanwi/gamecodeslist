import GameCodes from "@/components/GameCodes";
import CommentsSection from "@/components/CommentsSection";
import Sidebar from "@/components/Sidebar";
import BlogHeader from "@/components/BlogHeader";
import { fetchGameData } from "@/lib/data";
import { getCurrentDate } from "@/lib/sideAndFeaturedGames";
import { Metadata } from "next";
import Image from "next/image";

const game = "Jujutsu Infinite";
const currentDate = getCurrentDate();

export const metadata: Metadata = {
  title: `Jujutsu Infinite Codes (${currentDate}) - Free Spins | GameCodesList`,
  description:
    "Unlock free spins with the latest Jujutsu Infinite codes for March 2025! Redeem now and master rare Innate Techniques in this Jujutsu Kaisen Roblox RPG.",
  alternates: {
    canonical: "https://www.gamecodeslist.com/jujutsu-infinite-codes",
  },
};

export default async function JujutsuInfinitePage() {
  const { activeCodes, expiredCodes, comments, commentsSum, lastUpdated } =
    await fetchGameData(game);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      <main className="md:w-2/3 md:pr-8">
        <BlogHeader
          title={`Jujutsu Infinite Codes (${currentDate})`}
          lastUpdated={lastUpdated}
          commentsSum={commentsSum}
          url="https://gamecodeslist.com/jujutsu-infinite-codes"
        />
        <div className="article-container">
          <p>
            Welcome to your ultimate guide for Jujutsu Infinite codes! If you&apos;re
            a fan of the hit anime Jujutsu Kaisen and love immersive Roblox
            RPGs, Jujutsu Infinite by Awesome Ninja Games is the perfect game
            for you. This open-world adventure lets you craft your own sorcerer,
            battle cursed spirits, and unlock powerful Innate Techniques—all
            while diving into an epic story mode. To help you level up faster
            and roll for rare abilities, we&apos;ve compiled the latest Jujutsu
            Infinite codes for March 2025. Redeem these codes for free spins and
            become the ultimate sorcerer today!
          </p>
          <p>
            Here&apos;s the list of currently active Jujutsu Infinite codes you can
            redeem right now. These codes provide free spins to help you unlock
            Legendary and Special Grade Innate Techniques:
          </p>
          <Image
            src="/Jujutsu Infinite-Games.png"
            alt="Jujutsu Infinite-Games"
            width={768}
            height={428}></Image>
          <span className="text-xs">Image via Jujutsu Infinite Games</span>
          <GameCodes
            game={game}
            activeCodes={activeCodes}
            expiredCodes={expiredCodes}
          />
         
          <h2>How to Redeem Jujutsu Infinite Codes</h2>
          <p>
            Redeeming Jujutsu Infinite codes is quick and easy. Follow these
            simple steps to claim your free spins.
          </p>
          <h3>Redeem Jujutsu Infinite Codes via Roblox Main Menu</h3>
          <ul>
            <li>Launch Jujutsu Infinite on Roblox.</li>
            <li>From the main menu, click the Customize tab.</li>
            <li>Locate the “Redeem Code Here” text box on the right side.</li>
            <li>
              Enter one of the active Jujutsu Infinite codes from our list.
            </li>
            <li>
              Click the blue arrow (&gt;)next to the text box to claim your
              rewards.
            </li>
          </ul>
          <h3>Redeem Jujutsu Infinite Codes In-Game via Shop</h3>
          <ul>
            <li>
              In-game, click the Shop icon (shopping cart) at the bottom left of
              your screen.
            </li>
            <li>
              Type an active Jujutsu Infinite code into the “Redeem Code Here”
              box.
            </li>
            <li>Hit the blue arrow to enjoy your freebies!</li>
          </ul>
          <Image
            src="/how-to-redeem-jujutsu-infinite-codes-in-game.jpg"
            alt="How to Redeem Jujutsu Infinite Codes In-Game"
            width={1000}
            height={494}></Image>
          <p>
            Having trouble? Ensure you&apos;re entering valid Jujutsu Infinite
            codes,they&apos;re case-sensitive and that they haven&apos;t expired.
          </p>
          <p>
            We&apos;ll keep this section updated as more Jujutsu Infinite codes
            expire, so you always know what&apos;s active.
          </p>
          <h2>What Are Jujutsu Infinite Codes?</h2>
          <p>
            Jujutsu Infinite codes are special promo codes released by Awesome
            Ninja Games, the developers of Jujutsu Infinite. These codes reward
            players with free spins, which you can use to roll for rare Innate
            Techniques, cursed tools, and other customization options. In a game
            where powerful abilities can make or break your sorcerer journey,
            Jujutsu Infinite codes are a fantastic way to get ahead without
            spending Robux.
          </p>
          <h2>How to Get More Jujutsu Infinite Codes?</h2>
          <p>Want more Jujutsu Infinite codes? Here&apos;s where to find them:</p>
          <ul>
            <li>
              <strong>Official Discord Server: </strong>Join the{" "}
              <a href="https://discord.com/invite/jjkinf/" target="_blank" rel="noopener noreferrer">
                Jujutsu Infinite Discord
              </a>{" "}
              for the latest code drops and announcements. It&apos;s tough to get in,
              but worth it!
            </li>
            <li>
              <strong>X Account: </strong>Follow{" "}
              <a href="https://x.com/awsninjagames/" target="_blank" rel="noopener noreferrer">@awsninjagames</a> on
              X for real-time updates and potential Jujutsu Infinite codes.
            </li>
            <li>
              <strong>YouTube: </strong>Subscribe to the{" "}
              <a href="https://www.youtube.com/@awesomeninjagames" target="_blank" rel="noopener noreferrer">
                Awesome Ninja Games YouTube
              </a>{" "}
              channel for tutorials and code reveals.
            </li>
            <li>
              <strong>Trello Board: </strong>Check the official{" "}
              <a href="https://trello.com/b/mV6sSwXY/jujutsu-infinite/" target="_blank" rel="noopener noreferrer">
                Jujutsu Infinite Trello
              </a>{" "}
              for game info and occasional code mentions.
            </li>
          </ul>
          <p>
            Don&apos;t want the hassle? Bookmark this page! We scour all official
            sources to bring you the freshest Jujutsu Infinite codes as soon as
            they&apos;re released.
          </p>
          <h2>Jujutsu Infinite Trello Link</h2>
          <p>
            The{" "}
            <a href="https://trello.com/b/mV6sSwXY/jujutsu-infinite/" target="_blank" rel="noopener noreferrer">
              Jujutsu Infinite Trello board
            </a>{" "}
            is a goldmine of information. From Innate Techniques tier lists to
            cursed tool details, it&apos;s your one-stop resource for mastering the
            game. Visit the official Jujutsu Infinite Trello to optimize your
            build and make the most of your Jujutsu Infinite codes.
          </p>
          <h2>More Ways to Earn Free Rewards in Jujutsu Infinite</h2>
          <p>
            Beyond Jujutsu Infinite codes, you can score additional freebies
            with these methods:
          </p>
          <ul>
            <li>
              <strong>Daily Quests: </strong>Complete all daily tasks for up to
              60 free spins.
            </li>
            <li>
              <strong>AFK Room: </strong>Leave your character in the AFK room to
              farm spins passively.
            </li>
            <li>
              <strong>Storyline Rewards: </strong>Progress through the story to
              earn a Maximum Scroll and Incomplete Domain for free.
            </li>
            <li>
              <strong>Giveaways: </strong>Stay active on the Discord server for
              potential giveaways featuring Jujutsu Infinite codes.
            </li>
          </ul>
          <h2>What Is Jujutsu Infinite?</h2>
          <p>
            Jujutsu Infinite is a Roblox RPG inspired by the wildly popular
            Jujutsu Kaisen anime and manga. Start as a fledgling sorcerer at
            Jujutsu High, customize your character with unique Innate Techniques
            and cursed skills, and take on cursed spirits, epic bosses, and
            other players in PvP mode. With stunning visuals, immersive
            cutscenes, and a gripping storyline, it&apos;s no wonder fans adore this
            game. Use Jujutsu Infinite codes to spin for rare abilities and
            dominate the competition!
          </p>
          <h2>Why Use Jujutsu Infinite Codes?</h2>
          <p>
            In Jujutsu Infinite, your success depends heavily on your Innate
            Techniques. The rarest ones unlock the most powerful abilities, but
            they&apos;re locked behind a gacha system. Jujutsu Infinite codes give
            you free spins to roll for these game-changing traits without
            spending extra time or money. Whether you&apos;re slaying bosses or
            dueling in PvP, these codes are your ticket to becoming the
            strongest sorcerer.
          </p>
          <p className="text-sm font-bold">Final Thoughts</p>
          <p>
            Ready to jump into Jujutsu Infinite? With our updated list of
            Jujutsu Infinite codes, you&apos;ve got everything you need to kickstart
            your journey. Redeem them now, spin for your favorite techniques,
            and let us know in the comments which Innate Technique you&apos;re
            rocking! For more Roblox fun, check out our guides on Type Soul codes and Blox Fruits codes.
          </p>
          <p>Happy gaming, sorcerers!</p>
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
