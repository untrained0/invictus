// components/User_Dashboard/SideBarNav.js

import React, { useState } from 'react';

import { Files, Shield, Upload } from 'lucide-react';

function SideBarNav() {
    const [activeIndex, setActiveIndex] = useState(0);

    const menulist = [
        {
            id: 1,
            name: 'Upload',
            icon: Upload,
            path: '/upload'
        },
        {
            id: 2,
            name: 'Files',
            icon: Files,
            path: '/files'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: Shield,
            path: '/upgrade'
        }
    ];

    return (
        <div className='border-r shadow-sm h-full'>
            <div className='p-5 border-b'>
                {/* Use a standard img tag for non-Next.js projects */}
                <img src='/student.jpeg' alt='Profile' width={40.8} height={150} />
            </div>
            <div className='flex flex-col float-left w-full'>
                {menulist.map((item, index) => (
                    <button
                        className={`flex gap-2 p-4 px-6 hover:bg-gray-100 
                        w-full text-gray-500 
                        ${activeIndex === index ? 'bg-blue-50 text-blue-600 ' : null}`}
                        onClick={() => setActiveIndex(index)}
                        key={item.id} // Add a key prop
                    >
                        {<item.icon />}
                        <h1>{item.name}</h1>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SideBarNav;
