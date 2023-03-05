import React from "react"
import Image from "next/image"

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full flex-none border-b border-slate-900/10 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-4 my-2">
          <div className="relative flex items-center justify-between">
            <div className="flex flex-row items-center justify-center space-x-3">
              <Image src="/logo.png" alt="" width={35} height={35} />
              <p className="text-xl font-bold hover:text-neutral-500">
                PlatoIO
              </p>
            </div>

            <a
              href="https://github.com/hqasmei/platoio"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full "></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full group-hover:blur group-hover:opacity-75 group-hover:transition group-hover:duration-200"></div>
                <button className="relative px-4 py-2 bg-black rounded-full leading-none flex items-center">
                  <span className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>

                    <span className="text-gray-100">Star us on Github</span>
                  </span>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
