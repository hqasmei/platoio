import React from "react"
import { FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="mb-2 text-center">
      <div className="mx-auto max-w-6xl border-t">
        <div className="mx-4 mt-2 flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
          <div className=" text-black md:mb-0">
            Built with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-neutral-600"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://upstash.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-neutral-600"
            >
              Upstash Redis
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-neutral-600"
            >
              Tailwind CSS
            </a>{" "}
            and{" "}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-neutral-600"
            >
              Vercel
            </a>
          </div>
          <div className="mb-2 flex flex-row justify-center space-x-4 md:mb-0">
            <a
              href="https://twitter.com/hqasmei"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                size={25}
                className="text-neutral-800 hover:text-neutral-500"
              />
            </a>
            <a
              href="https://github.com/hqasmei/platoio"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={25}
                className="text-neutral-800 hover:text-neutral-500"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
