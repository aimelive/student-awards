"use client";

import { IconPlayerPlay } from '@tabler/icons-react';
import { Badge } from 'antd';
import Image from 'next/image';
import React from 'react'

const PerformancesSection = () => {
    return (
        <div className='flex flex-col gap-8 p-2 md:p-8 justify-center max-w-[90%] mx-auto items-center'>
            <h1 className='text-xl font-bold text-center tracking-widest'>PERFORMANCES</h1>
            <div className='grid md:grid-cols-4 gap-6 gap-y-9'>
                {
                    [1, 2, 3, 4].map((_, index) => {
                        return <Badge.Ribbon key={index} text="" color='#a67c00' className='bg-primary-500 text-xs px-4 py-0.5 rounded' placement='end'>
                            <div className='bg-black border-b-[0.5px] border-b-slate-600 bg-opacity-90 hover:border-primary-400 overflow-hidden hover:border-b-2 transition-all duration-300 hover:-rotate-2'>
                                <div className='h-48 bg-gray-700  relative  group'>
                                    <Image
                                        src="https://res.cloudinary.com/dofeqwgfb/image/upload/v1694106114/MCSA-Student-Awards-Testing/q4j0b6yp9evcgoycaykr.jpg"
                                        alt='#'
                                        // width={200}
                                        // height={200}
                                        fill={true}
                                        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
                                        className="object-cover group-hover:opacity-75"
                                    />
                                    <div className='bg-primary-500 bg-opacity-70 text-white text-xs absolute bottom-3 right-4 px-1.5 font-semibold py-0.5'><span>12:34</span></div>
                                </div>
                                <div className='p-4 px-6 pb-6 text-white flex flex-col gap-3 items-start'>
                                    <h1 className='font-bold uppercase'>Aime Patrick has made the clout</h1>
                                    <p className='text-sm'>And the clout was very happy for course, big thing gonna</p>
                                    <button className="text-xs border flex items-center gap-2 border-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">
                                        <IconPlayerPlay size={16} />
                                        <span>WATCH</span>
                                    </button>
                                </div>
                            </div>
                        </Badge.Ribbon>;
                    })
                }
            </div>
            <button className="text-xs border flex items-center gap-2 border-primary-500 px-8 py-2 hover:bg-white hover:text-primary-500 hover:border-white transition-all duration-300">
                <span>VIEW ALL PERFORMANCES</span>
            </button>
        </div>
    )
}

export default PerformancesSection