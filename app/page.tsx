import SearchBar from "@/components/SearchBar";
import FeaturedGames from "@/components/FeaturedGames";
import LatestUpdates from "@/components/LatestUpdates";
import LatestBlogs from "@/components/LatestBlogs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Redeem Codes for Top Games | GameCodesList",
  description:
    "Get free game codes for Roblox, Fortnite, and more! Redeem the latest codes from our updated list of top games.",
  alternates: {
    canonical: "https://www.gamecodeslist.com/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <SearchBar />
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Featured Games Codes</h2>
          <FeaturedGames />
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Latest Updates Redeem Codes</h2>
          <LatestUpdates />
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Latest Blogs</h2>
          <LatestBlogs />
        </section>
        <section className="article-container md:px-24">
          <h2 className="text-center py-6">What Is GameCodesList.com?</h2>
          <p>
            Welcome to GameCodesList.com, your ultimate resource for the latest
            game codes! We specialize in aggregating and sharing up-to-date,
            official game codes from trusted sources like game X accounts,
            websites, and publishers. Whether you&apos;re looking for discount
            codes, free item codes, or special event codes for your favorite PC,
            console, or mobile games, we&apos;ve got you covered. Our mission is
            to help gamers save money and enhance their gaming experience with
            reliable, official game codes. Explore our extensive list today and
            unlock incredible rewards!
          </p>
          <h2 className="text-center py-6">Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Official Sources:</strong> Codes sourced directly from
              game developers and publishers.
            </li>
            <li>
              <strong>Regular Updates:</strong> Always stay ahead with the
              newest game codes in 2025.
            </li>
            <li>
              <strong>User-Friendly:</strong> Easy navigation to find codes for
              any game.
            </li>
            <li>
              <strong>Trusted Reviews:</strong> See what gamers like you are
              saying in our verified user reviews.
            </li>
          </ul>
          <h2 className="text-center py-6">
            How to Find Game Codes on GameCodesList.com
          </h2>
          <p>
            Finding the perfect game code is simple and fast with
            GameCodesList.com. Follow these steps to get started:
          </p>
          <ul>
            <li>
              <strong>Search for Your Game:</strong> Use the search bar on our
              homepage—enter the game name, and click “Go” to quickly find the
              latest official game codes.
            </li>
            <li>
              <strong>Browse Our List:</strong> Explore our curated collection
              of discount codes, free codes, and more, organized by game and
              category.
            </li>
            <li>
              <strong>Engage with the Community:</strong> Leave a comment or
              share a review (subject to moderation) to connect with other
              gamers, share tips, or rate your experience—our team reviews and
              approves content to ensure quality.
            </li>
            <li>
              <strong>Redeem Your Code:</strong> Follow the instructions from
              the official source to redeem your code in-game and enjoy your
              rewards!
            </li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center py-8">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Are the game codes on your site official?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all game codes listed on GameCodesList.com are sourced from
                official channels, such as game X accounts, websites, and
                publishers. We do not create or modify the codes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How often are the game codes updated?
              </AccordionTrigger>
              <AccordionContent>
                We update our list regularly to ensure you have access to the
                latest official game codes, including discount codes and free
                item codes for 2025.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I submit comments or reviews?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can submit comments or reviews, but they are subject to
                moderation and will only be published after approval to maintain
                quality and relevance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What if a game code doesn&apos;t work?
              </AccordionTrigger>
              <AccordionContent>
                Game codes are subject to the terms of the game publishers, and
                we cannot guarantee their availability or validity. If a code
                doesn&apos;t work, check the official source or contact the
                publisher for assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
