import React from 'react'

interface iTwoColWrapper {
    child1: React.ReactNode
    child2: React.ReactNode
}
export default function TwoColWrapper({ child1, child2 }: iTwoColWrapper) {
    return (
        <div className="h-full min-h-screen py-8 md:py-1 grid grid-cols-1 md:grid-cols-12 place-content-center">
            <div className='col-span-7 flex flex-col justify-center items-center order-last md:order-none'>
                {child1}
            </div>
            <div className='md:col-span-5 md:shadow-xl rounded-xl max-w-sm px-4 md:p-8 my-auto h-screen md:h-auto'>
                {child2}
            </div>
        </div>
    )
}
