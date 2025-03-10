"use client"
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import Image from "next/image";

interface BlogHeaderProps {
  title: string;
  lastUpdated: string;
  commentsSum: number;
  url: string;
}

export default function BlogHeader({
  title,
  lastUpdated,
  commentsSum,
  url,
}: BlogHeaderProps) {
  const handleShare = (platform: string) => {
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      facebook: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    };

    window.open(
      shareUrls[platform as keyof typeof shareUrls],
      "share-dialog",
      "width=800,height=600"
    );
  };

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex items-center flex-wrap gap-3 mt-4">
        <Image src="/Mason-Parker.jpeg" alt="Mason Parker" width={26} height={26} className="rounded-full" />
        <span>Mason Parker</span>
        <span className="ml-2 text-yellow-700 font-bold">
          Last updated: {lastUpdated}
        </span>
        <Link href="#comments" className="ml-2 flex items-center group">
          <MessageSquare className="w-5 h-5 text-red-500" />
          <span className="ml-1 text-gray-800 font-medium">Comments</span>
          <span className="ml-1 bg-gray-200 text-gray-700 rounded-[10px] px-2 py-0.5 text-sx">
            {commentsSum}
          </span>
        </Link>
        <div className="ml-2 flex items-center gap-2">
          <button
            onClick={() => handleShare("linkedin")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
            aria-label="Share on LinkedIn">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1877f2] text-white hover:opacity-90 transition-opacity"
            aria-label="Share on Facebook">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white hover:opacity-90 transition-opacity"
            aria-label="Share on X (Twitter)">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 1200 1227">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </button>
          <button
            onClick={() => handleShare("reddit")}
            className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF4500] text-white hover:opacity-90 transition-opacity"
            aria-label="Share on Reddit">
            <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
