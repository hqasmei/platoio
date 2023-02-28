import React from "react"
import { FaGithub, FaTwitter } from "react-icons/fa"

const Navbar = () => {
  return (
    <header className="absolute top-0 mb-2 w-full flex-none  bg-white lg:border-b lg:border-slate-900/10">
      <div className="mx-auto max-w-6xl ">
        <div className="mx-4 border-b border-slate-900/10 py-4  lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a className="text-lg font-bold" href="/">
              PlatoIO
            </a>
            <div className="flex flex-row items-center justify-center space-x-4">
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
      </div>
    </header>
  )
}

export default Navbar
