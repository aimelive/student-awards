import Link from "next/link"
import { Fetcher } from "../lib/fetcher"

export default async function Home() {
  const performances = await Fetcher.get<PerformanceData[]>('performances')
  return (
    <main className="text-primary-500 p-4">
      <div>
        {performances.map((data) => {
          return <div key={data.id} className="bg-slate-900 p-10 flex flex-col items-start gap-2 my-4">
            <h1>{data.seasonName}</h1>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <Link href={`performances/${data.id}`} className="bg-white px-6 py-2 font-semibold">Details</Link>
          </div>
        })}
      </div>
    </main>
  )
}
