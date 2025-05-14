import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa'
import dev from '../assets/dev.png'

const Home = () => {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">

			<div className="absolute inset-0 overflow-hidden opacity-10">
				{[...Array(8)].map((_, i) => (
					<motion.span
						key={i}
						animate={{
							y: [0, -100, -200, -300],
							x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
							opacity: [0.8, 0.6, 0.4, 0]
						}}
						transition={{
							duration: 15 + Math.random() * 10,
							repeat: Infinity,
							delay: Math.random() * 5
						}}
						className="absolute text-xl text-blue-300 font-mono"
						style={{
							left: `${10 + Math.random() * 80}%`,
							bottom: '-50px'
						}}
					>
						{['</>', '{ }', '=>', '()', 'CSS', 'HTML', 'API'][i % 7]}
					</motion.span>
				))}
			</div>

			<div className="max-w-6xl mx-auto text-center relative z-10">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="mb-8"
				>
					<img
						src={dev}
						alt="Developer"
						className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-blue-500/30 object-cover shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
					/>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
				>
					Aayush Sharma
				</motion.h1>

				<div className="min-h-[2.5rem] md:min-h-[3rem] mb-6">
					<TypeAnimation
						sequence={[
							'Full Stack Developer',
							2000,
							'React Specialist',
							2000,
							'Problem Solver',
							2000
						]}
						wrapper="span"
						speed={50}
						className="text-xl md:text-2xl text-blue-300 font-medium"
						repeat={Infinity}
					/>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed mb-10"
				>
					I build exceptional digital experiences with modern web technologies,
					focusing on performance, accessibility, and clean code.
				</motion.p>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className="flex flex-wrap justify-center gap-4 mb-12"
				>
					<a
						href="#projects"
						className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
					>
						View My Work
					</a>
					<a
						href="#contact"
						className="px-6 py-3 border-2 border-blue-400 text-blue-300 hover:bg-blue-900/30 font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
					>
						Contact Me
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 0.5 }}
					className="flex justify-center gap-6"
				>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
						aria-label="GitHub"
					>
						<FaGithub className="text-xl" />
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
						aria-label="LinkedIn"
					>
						<FaLinkedin className="text-xl" />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition-all duration-300 hover:scale-110"
						aria-label="Twitter"
					>
						<FaTwitter className="text-xl" />
					</a>
					<a
						href="/resume.pdf"
						download
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 transition-all duration-300 hover:scale-110"
						aria-label="Download Resume"
					>
						<FaFileDownload className="text-xl" />
					</a>
				</motion.div>
			</div>
		</section>
	)
}

export default Home