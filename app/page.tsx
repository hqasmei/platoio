import { Redis } from "@upstash/redis"

const redis = Redis.fromEnv()

export const revalidate = 0 // disable cache

export default async function Home() {
  const data = await redis.srandmember<string>("plato")

  return (
    <main className="grid h-screen place-items-center">
      <div className="mx-12 rounded-xl bg-slate-100 px-6 py-6 shadow-xl md:mx-48 flex-1">
        <p className="text-2xl font-bold md:text-4xl">{data}</p>
        <p className="text-md mt-4 md:text-2xl">- Plato</p>
      </div>
    </main>
  )
}
