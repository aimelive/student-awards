import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Page Not Found - MCSA Student Awards',
    description: 'Media Club Student Awards',
    icons: 'logo.png',
}

const Page404 = () => {
    return (
        <div className='shadow w-1/2 mx-auto p-12 text-center my-12 rounded-md flex flex-col items-center gap-4'>
            <h1>Page you are looking for does not exist, please try another chance to see.</h1>
            <Link href='/' className='bg-primary-500 py-2 px-4 text-white rounded-md'>Back to Home</Link>
        </div>
    )
}

export default Page404