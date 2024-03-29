import Image from "next/image";

import InstagramForm from "@/components/instagram/InstagramForm";

import { cn } from "@/utils";

const FEATURES_LIST = [
  {
    title: "Fast and Reliable",
    text: "Enjoy swift and dependable video downloads, ensuring minimal waiting time and uninterrupted access to your favorite content.",
  },
  {
    title: "High-Quality Downloads",
    text: "Preserve the original quality of Instagram videos with our downloader, ensuring clarity and crispness in every download.",
  },
  {
    title: "User-Friendly Interface",
    text: "Easily navigate and utilize our downloader with its intuitive design, making the downloading process simple and accessible for users of all levels.",
  },
  {
    title: "No Registration Required",
    text: "Easily navigate and utilize our downloader with its intuitive design, making the downloading process simple and accessible for users of all levels.",
  },
  {
    title: "Unlimited Downloads",
    text: "Download as many Instagram videos as you desire, without any limitations. Whether it's one video or a hundred, our downloader has you covered.",
  },
  {
    title: "Supports Multiple Platforms",
    text: "Seamlessly download videos across various devices and operating systems, including Windows, macOS, Android, and iOS, ensuring compatibility and convenience for all users.",
  },
  {
    title: "Privacy Protection",
    text: "Rest assured that your privacy is our priority. Our downloader ensures that your personal information remains secure and is not collected during the downloading process.",
  },
  {
    title: "Regular Updates",
    text: "Stay up-to-date with the latest features and improvements. We continuously update our downloader to provide you with the best downloading experience possible.",
  },
];

const BENEFITS_LIST = [
  "Download Instagram videos to back up your content.",
  "Download Instagram videos to preserve your memories",
  "Create your own video compilations using Instagram videos that you download.",
  "Download Instagram videos for research purposes, such as studying a particular trend or social phenomenon.",
  "Save your favorite Instagram videos to your device so you can watch them offline or share them with others.",
  "Use Instagram videos for your own creative projects, such as making YouTube videos or creating presentations.",
  "Download Instagram videos for educational purposes, such as learning about a new skill or watching a historical event.",
];

const FAQ_LIST = [
  {
    question: "Is this website free?",
    answer:
      "Yes, this website is free. We do not collect any personal information from our users.",
  },
  {
    question: "Can I download Instagram stories?",
    answer: "No, downloading Instagram stories is not supported.",
  },
  {
    question: "Can I download images from Instagram?",
    answer: "No, we only provide the service of downloading Instagram videos.",
  },
  {
    question: "Is this website secure?",
    answer:
      "Yes, this website is secure. We do not collect any personal information from our users.",
  },
  {
    question: "Can I use the website from my mobile?",
    answer: "Yes, you can use the website from your mobile or tablet.",
  },
  {
    question: "What if the video I want to download is not available?",
    answer:
      "If the video you want to download is not available, please try again later.",
  },
  {
    question: "Can I download Instagram videos from private accounts?",
    answer: "No, you cannot download Instagram videos from private accounts.",
  },
  {
    question: "What is the best format to download Instagram videos in?",
    answer:
      "The best format to download Instagram videos in is MP4. MP4 is a widely supported video format that can be played on most devices.",
  },
];

export default function HomePage() {
  return (
    <main id="main" className="flex w-full flex-1 flex-col">
      <section
        id="#download"
        className={cn(
          "flex w-full flex-col items-center px-4 py-24 shadow-sm",
          "bg-gradient-to-r from-blue-600 to-purple-600"
        )}
      >
        <h1
          className={cn(
            "py-2 text-center text-2xl font-extrabold text-white sm:text-4xl"
          )}
        >
          Instagram Video Downloader
        </h1>
        <InstagramForm />
        <p className="my-4 text-center text-xs text-white md:text-sm">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section>

      <div className="mx-auto mb-12 mt-8 flex w-full max-w-3xl flex-col gap-8 px-2 text-sm md:px-4 md:text-base">
        <section id="logo">
          <div className="flex w-full items-center justify-center gap-4">
            <Image
              src={"/images/logo.png"}
              width={300}
              height={300}
              alt="logo"
              className="h-32 w-32 md:h-40 md:w-40"
            />
            <div
              aria-label="Logo"
              className={cn(
                "flex select-none flex-col items-start text-2xl font-extrabold md:text-5xl",
                "animate-rgb bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
              )}
            >
              <span>Instagram Videos</span>
              <span>Downloader</span>
            </div>
          </div>
        </section>

        <hr className="w-full" />

        <section id="welcome">
          <h2 className={cn("mb-4 text-xl font-bold sm:text-3xl")}>
            Welcome to Instagram Video Downloader
          </h2>
          <p className="leading-7">
          Welcome to Instagram Video Downloader! With our tool, you can easily download your favorite videos from Instagram in just a few simple steps. Whether its a funny clip, a stunning travel moment, or an inspiring workout session, our downloader ensures you can keep and share your favorite content hassle-free. Simply paste the URL of the Instagram video you want to download, hit the download button, and enjoy your saved video offline. Its quick, easy, and free! Start saving your favorite Instagram videos today with our downloader.
          </p>
        </section>

        <hr className="w-full" />

        <section id="features">
          <h2 className={cn("mb-2 text-xl font-semibold sm:text-2xl")}>
            Instagram Video Downloader Features
          </h2>
          <ul className="ml-6 flex list-disc flex-col gap-1 leading-7">
            {FEATURES_LIST.map(({ title, text }, index) => (
              <li key={index}>
                <span className="font-medium">{title}</span>
                {": "}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="instructions">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            How to download Instagram videos
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Go to the Instagram video that you want to download.</li>
            <li>Copy the URL of the video.</li>
            <li>Paste the URL into the search bar on this website.</li>
            <li>Click the `Download` button.</li>
          </ol>
        </section>

        <hr className="w-full" />

        <section id="benefits">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Benefits of using our Downloader
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            {BENEFITS_LIST.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <hr className="w-full" />

        <section id="faq">
          <h2 className={cn("py-2 text-xl font-semibold sm:text-2xl")}>
            Frequently Asked Questions - FAQ
          </h2>
          <ul className="list-disc pl-6">
            {FAQ_LIST.map(({ question, answer }, index) => (
              <li key={index} className="mb-2">
                <p className="font-semibold">{question}</p>
                <p>{answer}</p>
              </li>
            ))}
          </ul>
        </section>
        <hr className="w-full" />
      </div>
    </main>
  );
}
