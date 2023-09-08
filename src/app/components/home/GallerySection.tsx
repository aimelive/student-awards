import React from 'react'

const GallerySection = () => {
    return (
        <div className="bg-[url('/images/mcsa.png')] bg-cover grayscale-0">
            <div className="bg-black text-white w-full bg-opacity-50 p-8 py-20 flex text-center flex-col items-center gap-4">
                <h1 className="text-3xl font-bold">MEDIA CLUB STUDENT AWARDS (MCSA) S03 PHOTO PART 1</h1>
                <p className="text-sm">AUGUST 27TH, 2023</p>
                <a href="https://mcsa.pixieset.com/mcsas03photopart1-1/" target="_blank" className="text-sm border-2 border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">VIEW GALLERY</a>
            </div>
        </div>
    );
}

export default GallerySection