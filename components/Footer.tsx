import React from "react"
import { FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="mb-2 py-4 text-center">
      <div className="mx-auto max-w-6xl border-t">
        <div className="mx-4 mt-4 flex flex-row justify-between">
          <p className="text-black">
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
          </p>
          <div className="flex flex-row space-x-4">
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
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
