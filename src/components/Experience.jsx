import { motion } from 'framer-motion'
import { FaBriefcase, FaLaptopCode } from 'react-icons/fa'

const experiences = [
	{
		id: 1,
		role: "Software Developer",
		company: "Atamana Innovation",
		period: "Nov 2023 - Present",
		description: "Leading development of web applications and Chrome extensions.",
		achievements: [
			"Scaled BlockerX Chrome Extension to 100k+ users (35% engagement ↑, 100% Revenue ↑)",
			"Built 20+ Node.js APIs powering premium features (20% conversion ↑)",
			"Added i18n support driving 40% international growth",
			"Optimized performance (30% faster loads, 70% fewer unauthorized accesses)",
			"Led community platform development (Next.js/Tailwind, 95+ SEO score)",
			"Automated CI/CD cutting release time by 50%"
		]
	},
]

const Experience = () => {
	return (
		<section id="experience" className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
				>
					Experience
				</motion.h2>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-blue-700/50 transform -translate-x-1/2"></div>

					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
							>
								{/* Timeline dot */}
								<div className="absolute left-6 md:left-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 -translate-y-1 z-10">
									{exp.id === 1 ? (
										<FaBriefcase className="text-white text-xs absolute inset-0 m-auto" />
									) : (
										<FaLaptopCode className="text-white text-xs absolute inset-0 m-auto" />
									)}
								</div>

								{/* Experience card */}
								<div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
									<motion.div
										whileHover={{ y: -5 }}
										className="bg-gray-800/50 p-6 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
									>
										<div className="flex items-start gap-4 mb-4">
											<div className="p-3 bg-blue-900 rounded-lg text-blue-300">
												{exp.id === 1 ? (
													<FaBriefcase className="text-xl" />
												) : (
													<FaLaptopCode className="text-xl" />
												)}
											</div>
											<div>
												<h3 className="text-xl font-bold">{exp.role}</h3>
												<p className="text-blue-300">{exp.company}</p>
												<p className="text-sm text-gray-400 mt-1">{exp.period}</p>
											</div>
										</div>

										<p className="text-gray-300 mb-4">{exp.description}</p>

										<ul className="space-y-3">
											{exp.achievements.map((achievement, i) => (
												<li key={i} className="flex items-start">
													<svg className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
													</svg>
													<span className="text-gray-300">{achievement}</span>
												</li>
											))}
										</ul>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience