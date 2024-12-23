import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {Link} from "react-router-dom";


export const Footer = () => {
    return <footer className="bg-black border-t border-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative group">
                            <div className="text-xl font-bold relative z-10 overflow-hidden">
                            <span className="relative inline-block px-4 py-2">
                                <span className="font-mono text-gray-100">C</span>
                                <span className="font-mono text-blue-400 tracking-wider">0</span>
                                <span className="font-mono text-gray-100">de</span>
                                <span
                                    className="ml-1 font-sans bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                                    Kombat
                                </span>

                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg -z-10"/>
                            </span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Challenge yourself and others in real-time coding battles.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Features</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Challenge Categories
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Programming Languages
                            </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                                Live Battles
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Rankings
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Resources</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                API Access
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                Community
                            </a>
                        </li>
                        <li>
                            <Link to="/terms-and-conditions" className="hover:text-blue-400 transition-colors">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Connect</h4>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <FaTwitter className="w-5 h-5"/>
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <FaGithub className="w-5 h-5"/>
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <FaLinkedin className="w-5 h-5"/>
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <MdEmail className="w-5 h-5"/>
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Stay updated with our latest features and challenges.
                    </p>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-800">
            <div className="container mx-auto px-6 py-8">
                <p className="text-center text-gray-400 text-sm">
                    © 2024 CodeKombat. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
}