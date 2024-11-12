'use client';
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    "name": "Ahmed Khan",
    "body": "A reliable and secure gateway! Transactions are smooth, and the support team is excellent.",
    "img": "https://avatar.vercel.sh/ahmedkhan"
  },
  {
    "name": "Priya Singh",
    "body": "This payment gateway has transformed my business! Easy to use and very secure.",
    "img": "https://avatar.vercel.sh/priyasingh"
  },
  {
    "name": "Rahul Sharma",
    "body": "I appreciate the seamless experience and quick processing times. It has made transactions so much easier for me.",
    "img": "https://avatar.vercel.sh/rahulsharma"
  },
  {
    "name": "Fatima Chowdhury",
    "body": "Fast, secure, and reliable. I couldn't ask for more from a payment gateway.",
    "img": "https://avatar.vercel.sh/fatimachowdhury"
  },
  {
    "name": "Arjun Patel",
    "body": "Super convenient and reliable. It gives me peace of mind for every transaction.",
    "img": "https://avatar.vercel.sh/arjunpatel"
  },
  {
    "name": "Mehreen Javed",
    "body": "The best payment gateway I've used so far! It has simplified my business payments.",
    "img": "https://avatar.vercel.sh/mehreenjaved"
  },
  {
    "name": "Anil Kumar",
    "body": "Very satisfied with the service. Transactions are fast, and customer support is always helpful.",
    "img": "https://avatar.vercel.sh/anilkumar"
  },
  {
    "name": "Sara Ahmed",
    "body": "I highly recommend this gateway! It's reliable, secure, and easy to navigate.",
    "img": "https://avatar.vercel.sh/saraahmed"
  },
  {
    "name": "Rajesh Gupta",
    "body": "Fantastic experience! Payments are processed quickly, and I feel secure using this gateway.",
    "img": "https://avatar.vercel.sh/rajeshgupta"
  },
  {
    "name": "Zainab Hossain",
    "body": "The security and ease of use are top-notch. It has made online transactions much simpler.",
    "img": "https://avatar.vercel.sh/zainabhossain"
  }
]


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username?: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[300px] cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="asdas" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeReviewSection() {
  return (
    <div id="testimonials" className="container section">
      <h2 className="heading-2 text-center">What Users Are Saying</h2>

      <div className="relative">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[4vw] bg-gradient-to-r from-white via-white/60 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[4vw] bg-gradient-to-l from-white via-white/60 dark:from-background"></div>
      </div>
    </div>
  );
}
