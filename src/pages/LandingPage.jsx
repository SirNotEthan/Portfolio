import { Link } from 'react-scroll';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaReact, FaNodeJs, FaGithub, FaDocker, FaCss3 } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiJavascript, SiTypescript, SiHtml5, SiMongodb, SiDiscord } from 'react-icons/si';

function LandingPage() {
    const skills = [
        { name: 'React', icon: <FaReact className="text-blue-400 text-5xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-400 text-5xl" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300 text-5xl" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-5xl" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-300 text-5xl" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500 text-5xl" /> },
        { name: 'HTML 5', icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
        { name: 'CSS 3', icon: <FaCss3 className="text-blue-500 text-5xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-5xl" /> },
        { name: 'DiscordJS', icon: <SiDiscord className="text-indigo-400 text-5xl" /> },
    ];

    const projects = [
        {
            name: "BitLab Dashboard",
            description: "A comprehensive platform designed to streamline the management and monitoring of various systems and services within the BitLab ecosystem.",
            images: [
                "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
                "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp",
                "https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp"
            ],
            link: "#"
        }
    ];

    return (
        <>
            {/* Header Section */}
            <header className="bg-gray-800 shadow-xl fixed top-0 w-full z-50">
                <div className="container mx-auto p-4 flex items-center justify-between">
                    <h1 className="text-white text-2xl font-bold">SirNotEthan</h1>
                    <nav className="flex space-x-6">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-white hover:text-gray-300 transition-all cursor-pointer border-b-2 border-transparent hover:border-gray-300"
                        >
                            Home
                        </Link>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="text-white hover:text-gray-300 transition-all cursor-pointer border-b-2 border-transparent hover:border-gray-300"
                        >
                            Skills
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="text-white hover:text-gray-300 transition-all cursor-pointer border-b-2 border-transparent hover:border-gray-300"
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="text-white hover:text-gray-300 transition-all cursor-pointer border-b-2 border-transparent hover:border-gray-300"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="flex flex-col md:flex-row-reverse items-center justify-between min-h-screen bg-gray-800 text-white p-10">
                <motion.div
                    className="max-w-lg text-center md:text-left"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }} // Slight delay for better sequencing
                >
                    <p className="text-gray-100 text-opacity-80 text-sm sm:text-base">- Introduction</p>
                    <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                        Web Developer based in The United Kingdom
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg sm:text-xl">
                        Passionate about crafting sleek, high-performance websites with modern technologies.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-6 justify-center md:justify-start">
                        <a href="https://x.com/SirNotEthan" target="_blank" rel="noopener noreferrer" className="group">
                            <FaTwitter className="text-blue-400 text-3xl group-hover:scale-110 transition-transform" />
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded p-1 -top-8 left-1/2 transform -translate-x-1/2">Twitter</span>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="group">
                            <FaDiscord className="text-indigo-400 text-3xl group-hover:scale-110 transition-transform" />
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded p-1 -top-8 left-1/2 transform -translate-x-1/2">Discord</span>
                        </a>
                        <a href="https://github.com/SirNotEthan" target="_blank" rel="noopener noreferrer" className="group">
                            <FaGithub className="text-gray-300 text-3xl group-hover:scale-110 transition-transform" />
                            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded p-1 -top-8 left-1/2 transform -translate-x-1/2">GitHub</span>
                        </a>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="max-w-lg mt-8 md:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <img
                        src="https://pbs.twimg.com/profile_images/1692994137081950213/xEwyKITA_400x400.jpg"
                        alt="Ethan"
                        className="w-full sm:w-3/4 md:w-full h-auto rounded-full shadow-lg transform hover:scale-105 transition-transform"
                    />
                </motion.div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="bg-gray-900 text-white min-h-screen py-20 px-10">
                <motion.div
                    className="text-center mt-20 mb-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-extrabold">Skills & Technologies</h2>
                    <p className="text-gray-300 mt-3">Expertise in modern web development tools and frameworks</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col w-2/4 items-center space-y-2 p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {skill.icon}
                            <p className="text-lg font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen bg-gray-800 text-white py-20 px-10">
                <motion.div
                    className="text-center mt-20 mb-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-extrabold">Project Showcase</h2>
                    <p className="text-gray-300 mt-3">Here are some of my recent projects.</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => {
                        const [currentImage, setCurrentImage] = useState(0);
                        return (
                            <motion.div
                                key={index}
                                className="bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative w-full h-48 sm:h-64 overflow-hidden rounded-lg mb-4">
                                    <img src={project.images[currentImage]} alt={project.name} className="w-full h-full object-cover" />
                                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {project.images.map((_, i) => (
                                            <button
                                                key={i}
                                                className={`w-3 h-3 rounded-full ${i === currentImage ? 'bg-blue-400' : 'bg-gray-500'}`}
                                                onClick={() => setCurrentImage(i)}
                                            ></button>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">{project.name}</h3>
                                <p className="text-gray-300 mt-2">{project.description}</p>
                                <a href={project.link} className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all inline-block">View Project</a>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="bg-gray-900 min-h-screen text-white py-20 px-10">
                <motion.div
                    className="text-center mt-20 mb-30"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-extrabold">Contact</h2>
                    <p className="text-gray-300 mt-3">How to get in touch with me.</p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="max-w-lg mx-auto mt-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <form
                        action="#"
                        method="POST"
                        className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <div className="flex flex-col space-y-4">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message"
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </section>
        </>
    );
}

export default LandingPage;