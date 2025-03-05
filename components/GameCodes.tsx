import CopyButton from "./CopyButton";
import { Codes } from "@/lib/types";

interface GameCodesProps {
  game: string;
  activeCodes: Codes[];
  expiredCodes: Codes[];
}

export default function GameCodes({
  game,
  activeCodes,
  expiredCodes,
}: GameCodesProps) {
  return (
    <>
      <section className="my-3">
        <h2>
          All{" "}
          <span
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 
            bg-clip-text text-transparent 
            font-extrabold 
            animate-pulse hover:animate-bounce">
            New
          </span>{" "}
          {game} Codes
        </h2>
        <ul className="space-y-2">
          {activeCodes.map((code, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>
                <strong>{code.code}</strong> - {code.reward}
              </span>
              <CopyButton text={code.code} />
            </li>
          ))}
        </ul>
        <p>
          Note: {game} codes can expire unexpectedly, so redeem them as soon as
          possible. Bookmark this page and check back regularly—we update it
          with the newest {game} codes as they drop!
        </p>
      </section>

      <section className="mb-3">
        <h2>Expired {game} Codes</h2>
        <ul className="flex flex-wrap">
          {expiredCodes.map((code, index) => (
            <li key={index} className=" list-none mr-3">
              {code.code}&nbsp;&nbsp;&nbsp;|
            </li>
          ))}
        </ul>
        <p>
          These {game} codes no longer work, but you can still try them if
          you’re feeling lucky.
        </p>
      </section>
    </>
  );
}
