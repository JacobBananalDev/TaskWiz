import React from 'react'
import { SiTailwindcss, SiRedux, SiFramer } from 'react-icons/si';

const TechStack = () => {
    return (
        <div className="flex justify-center mt-6 space-x-4 text-xl">
            <SiTailwindcss className="text-blue-400" />
            <SiRedux className="text-purple-500" />
            <SiFramer className="text-red-400" />
        </div>
    )
}

export default TechStack
