import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

function LandingPage() {
    return (
        <>
            {/* Header Section */}
            <header className="bg-gray-800 shadow-xl fixed top-0 w-full z-50">
                <div className="container mx-auto p-4 flex items-center justify-between">
                    <h1 className="text-white text-2xl font-bold">SirNotEthan</h1>
                    <nav className="flex space-x-6">
                        <Link to="/" className="text-white hover:text-gray-300 transition">Home</Link>
                        <Link to="/projects" className="text-white hover:text-gray-300 transition">Projects</Link>
                        <Link to="/about" className="text-white hover:text-gray-300 transition">About</Link>
                        <Link to="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex items-center justify-end min-h-screen bg-gray-800 text-white relative overflow-hidden p-10">
                <motion.div 
                    className="max-w-lg text-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-gray-100 text-opacity-80">- Introduction</p>
                    <h1 className="font-extrabold text-4xl leading-tight">
                        Web Developer based in The United Kingdom
                    </h1>
                    <p className="mt-4 text-gray-300">
                        Passionate about crafting sleek, high-performance websites with modern technologies.
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-end space-x-4 mt-6">
                        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://discord.com/invite/yourserver" target="_blank" rel="noopener noreferrer">
                            <FaDiscord className="text-indigo-400 text-3xl hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-300 text-3xl hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </section>

            <section className="flex items-center justify-end min-h-screen bg-gray-900 text-white relative overflow-hidden p-10">
                {/* Additional Content Here */}
            </section>
        </>
    );
}

export default LandingPage;