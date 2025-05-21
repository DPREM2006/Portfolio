import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <>
        {/* from-indigo-500 via-purple-600 to-rose-500  */}
            <nav className="w-full h max bg-gradient-to-r  from-indigo-500 via-purple-700 to-teal-500 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center justify-center">
                            <div className="flex-shrink-0">
                                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">DP</span>
                            </div>
                            <div className="md:block hidden ml-4">
                                <span className="text-white font-semibold text-lg">D. Prem</span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <a href="#About" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
                                </li>
                                <li>
                                    <a href="#Skills" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                                </li>
                                <li>
                                    <a href="#Project" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                </li>
                                <li>
                                    <a href="#Contact" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200">
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#About" className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                                About</a>
                            <a href="#Skills" className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                                Skill
                            </a>
                            <a href="#Project" className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                                Projects
                            </a>
                            <a href="#Contact" className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200">
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}