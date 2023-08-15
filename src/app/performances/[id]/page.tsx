import Image from "next/image"
import { Fetcher } from "../../../lib/fetcher"
import Link from "next/link"

export default async function PerformanceDetails({ params }: { params: { id: string } }) {
    const performance = await Fetcher.get<PerformanceData>('performances/' + params.id)
    return <main className="p-8">
        <h1>Performance Details</h1>
        <div className="bg-gray-900 text-primary-500 p-4 my-4 flex flex-col items-start gap-4">
            <h1 className="text-lg">{performance.title} ({performance.seasonName})</h1>
            <p>{performance.description}</p>
            <div className="grid grid-cols-5 mt-4 gap-4">
                {performance.images.map(image => (<Image src={image} width={200} height={200} alt="#" key={image} className="w-full h-full object-cover rounded-md cursor-pointer hover:scale-125 duration-300 border-2" loading="lazy" />))}
            </div>
            <Link href='/' className='bg-primary-500 py-2 px-4 text-white rounded-md'>Back to Home</Link>
        </div>
    </main>
}