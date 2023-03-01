import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()

export const revalidate = 0 // disable cache

export default async function Home() {
  const quote = await redis.srandmember<string>("plato")
  return (
    <main className="grid h-screen place-items-center bg-[url('../public/jigsaw.svg')] ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="mx-12 flex-1 rounded-xl bg-neutral-800 px-6 py-6 shadow-xl md:mx-48">
          <p className="text-2xl font-bold text-neutral-100 md:text-4xl">
            {quote}
          </p>
          <p className="text-md mt-4 text-neutral-100 md:text-2xl">- Plato</p>
        </div>
        <div className="rounded-xl bg-white p-2 font-semibold shadow">
          <p>Refresh the page to get a new quote</p>
        </div>
      </div>
    </main>
  )
}
