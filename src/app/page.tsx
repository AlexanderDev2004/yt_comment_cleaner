import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[32px] font-bold">
          <span className="text-[#FF0000]">YT</span> Comment Cleaner
        </h1>
        <p className="text-[16px] text-center sm:text-left">
          Clean up your YouTube comments with this tool from annoying comments.
          This tool helps you remove unwanted comments from your YouTube videos
          such as gambling comments.{" "}
        </p>
        <div className="flex flex-col gap-[16px] sm:flex-row">
          <a
            href="https://github.com/AlexanderDev2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] text-[16px] font-semibold text-[#FF0000]"
          >
            {" "}
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/alexjynx01/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] text-[16px] font-semibold text-[#FF0000]"
          >
            {" "}
            <FaInstagram />
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm/60 text-center sm:text-left">
          @Copyright {new Date().getFullYear()}{" "}
          <span> | Alexander Agung Raya</span>
        </p>
      </footer>
    </div>
  );
}
