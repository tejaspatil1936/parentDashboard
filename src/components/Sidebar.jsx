// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="hidden md:block w-1/5 bg-green-800 text-white h-full">
//       <div className="p-4 font-bold">technoCrats</div>
//       <ul className="space-y-2">
//         <li className="p-2 hover:bg-green-700">HOME</li>
//         <li className="p-2 hover:bg-green-700">ROLLCALL</li>
//         <li className="p-2 hover:bg-green-700">RESULT</li>
//         <li className="p-2 hover:bg-green-700">ADVISORY</li>
//         <li className="p-2 hover:bg-green-700">AID</li>
//         <li className="p-2 hover:bg-green-700">NGOS</li>
//         <li className="p-2 hover:bg-green-700">SETTINGS</li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
    FiMenu,
    FiHome,
    FiUser,
    FiSettings,
    FiUserCheck,
    FiGrid,
    FiClipboard,
    FiBookOpen,
    FiUserPlus,
    FiMessageCircle,
} from "react-icons/fi"; // Icons from react-icons (optional)

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex overflow-y-visible">
            <div
                className={`bg-gray-800 text-white h-auto p-5 pt-8 ${
                    isOpen ? "w-60" : "w-20"
                } duration-300 sm:duration-300 relative`}
            >
                {/* Toggle Button */}
                <div
                    className="absolute top-10 text-white hover:bg-white hover:text-black p-2 rounded-full cursor-pointer"
                    onClick={toggleSidebar}
                >
                    <FiMenu size={24} />
                </div>

                {/* Sidebar Content */}
                <div className="mt-24">
                    {isOpen && (
                        <div className="flex justify-center align-top space-x-4">
                            <div className=" p-1 rounded-lg shadow-lg">
                                <img
                                    src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                                    alt="profile pic"
                                    className="rounded-full size-20"
                                />
                                <p className="mt-1">James</p>
                            </div>
                        </div>
                    )}
                    <div
                        className={`flex items-center space-x-4 mt-10 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiHome size={24} />
                        {isOpen && <span>Home</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiBookOpen size={24} />
                        {isOpen && <span>Courses</span>}
                    </div>

                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiClipboard size={24} />
                        {isOpen && <span>Exam</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiUserCheck size={24} />
                        {isOpen && <span>Classroom</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiGrid size={24} />
                        {isOpen && <span>Games</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiUserPlus size={24} />
                        {isOpen && <span>Groups</span>}
                    </div>
                    <div
                        className={`flex items-center space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiMessageCircle size={24} />
                        {isOpen && <span>Consultants</span>}
                    </div>
                    <div
                        className={`flex items-end space-x-4 mt-6 ${
                            isOpen ? "" : "justify-center"
                        }`}
                    >
                        <FiSettings size={24} />
                        {isOpen && <span>Settings</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;