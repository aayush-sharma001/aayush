import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUserTie, FaTools } from 'react-icons/fa'

const About = () => {
	return (
		<section id="about" className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
			<div className="max-w-6xl mx-auto relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
				>
					About Me
				</motion.h2>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<h3 className="text-3xl font-bold">
							Hi, I'm <span className="text-blue-300">Aayush Sharma</span> 👋
						</h3>

						<p className="text-lg text-gray-300 leading-relaxed">
							I'm a <span className="text-blue-300 font-medium">Full Stack Developer</span> with around 2 years of experience building web applications. My passion lies in creating solutions that are not only functional but also deliver exceptional user experiences.
						</p>

						<p className="text-lg text-gray-300 leading-relaxed">
							My journey in tech began when in 2020. Since then, I've worked with startups and established companies, helping them turn ideas into scalable digital products.
						</p>

						<div className="flex flex-wrap gap-3 pt-4">
							{['React', 'Next.js', 'Node', 'TypeScript', 'MongoDB', 'AWS', 'Tailwind'].map((tech, i) => (
								<motion.span
									key={i}
									whileHover={{ scale: 1.05 }}
									className="px-3 py-1 bg-blue-900/50 text-blue-200 text-sm rounded-full border border-blue-700/50"
								>
									{tech}
								</motion.span>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<motion.div
							whileHover={{ y: -5 }}
							className="p-6 bg-gray-800/50 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
						>
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 bg-blue-900 rounded-lg">
									<FaCode className="text-2xl text-blue-300" />
								</div>
								<h4 className="text-xl font-semibold">Development Approach</h4>
							</div>
							<p className="text-gray-300">
								Clean, maintainable code with performance optimization. I follow best practices and stay updated with the latest technologies to deliver future-proof solutions.
							</p>
						</motion.div>

						<motion.div
							whileHover={{ y: -5 }}
							className="p-6 bg-gray-800/50 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
						>
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 bg-blue-900 rounded-lg">
									<FaRocket className="text-2xl text-blue-300" />
								</div>
								<h4 className="text-xl font-semibold">Work Philosophy</h4>
							</div>
							<p className="text-gray-300">
								Agile methodology with focus on delivering value quickly. I believe in iterative development, continuous feedback, and data-driven decisions.
							</p>
						</motion.div>

						<motion.div
							whileHover={{ y: -5 }}
							className="p-6 bg-gray-800/50 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
						>
							<div className="flex items-center gap-4 mb-4">
								<div className="p-3 bg-blue-900 rounded-lg">
									<FaTools className="text-2xl text-blue-300" />
								</div>
								<h4 className="text-xl font-semibold">Beyond Coding</h4>
							</div>
							<p className="text-gray-300">
								When not coding, I read technical articles, learn new tech. I also enjoy photography and hiking.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About