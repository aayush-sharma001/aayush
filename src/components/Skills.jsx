import { motion } from 'framer-motion';
import {
	SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPostgresql,
	SiTailwindcss, SiFirebase, SiGit, SiGithub, SiHtml5, SiCss3,
	SiJavascript, SiElectron, SiJest, SiMailgun, SiTrello, SiMixpanel,
	SiCplusplus, SiOpenai, SiPython, SiTypescript, SiDocker,
	SiFigma,
	SiPostman,
} from "react-icons/si";

const skills = {
	"Core Languages": [
		{ name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 95 },
		{ name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 90 },
		{ name: "Python", icon: <SiPython className="text-blue-400" />, level: 85 },
		{ name: "C++", icon: <SiCplusplus className="text-blue-600" />, level: 80 },
	],
	"Frontend": [
		{ name: "React", icon: <SiReact className="text-cyan-500" />, level: 95 },
		{ name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 90 },
		{ name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
		{ name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90 },
		{ name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: 92 },
	],
	"Backend": [
		{ name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 90 },
		{ name: "Express", icon: <SiNodedotjs className="text-gray-400" />, level: 88 },
		{ name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 85 },
	],
	"Databases": [
		{ name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 88 },
		{ name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 85 },
	],
	"DevOps & Tools": [
		{ name: "Git", icon: <SiGit className="text-orange-500" />, level: 92 },
		{ name: "Docker", icon: <SiDocker className="text-blue-400" />, level: 80 },
		{ name: "Jest", icon: <SiJest className="text-red-400" />, level: 85 },
		{ name: "Electron", icon: <SiElectron className="text-gray-400" />, level: 70 },
		{ name: "Mailgun", icon: <SiMailgun className="text-red-500" /> },
		{ name: "Figma", icon: <SiFigma className='' /> },
		{ name: "ChatGpt", icon: <SiOpenai class =''/> },
		{ name: "Mixpanel", icon: <SiMixpanel className="text-blue-400"/>},
		{ name: "Postman", icon: <SiPostman class='text-orange-500'/>},
		{ name: "Github", icon: <SiGithub className='text-black-700'/>}
	]
};

const Skills = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	return (
		<section id="skills" className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
				>
					Technical Skills
				</motion.h2>

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="space-y-12"
				>
					{Object.entries(skills).map(([category, items]) => (
						<motion.div
							key={category}
							variants={item}
							className="group"
						>
							<h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-blue-700/50 text-blue-300 flex items-center gap-3">
								<span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
								{category}
							</h3>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
								{items.map(({ name, icon, level }) => (
									<motion.div
										key={name}
										variants={item}
										whileHover={{ y: -5 }}
										className="flex flex-col p-5 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400/50 transition-all duration-300"
									>
										<div className="flex items-center gap-3 mb-3">
											<div className="w-10 h-10 flex items-center justify-center text-2xl">
												{icon}
											</div>
											<span className="text-sm font-medium text-gray-200">{name}</span>
										</div>
										{/* <div className="w-full bg-gray-700 rounded-full h-2">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: `${level}%` }}
												transition={{ duration: 1, delay: 0.2 }}
												viewport={{ once: true }}
												className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
											/>
										</div>
										<span className="text-xs text-gray-400 mt-1 self-end">{level}%</span> */}
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-20 bg-gray-800/50 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm"
				>
					<h3 className="text-2xl font-semibold mb-6 text-blue-300">Workflow & Methodology</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							"Mobile-First Responsive Design",
							"Cross-Browser Compatibility",
							"Agile Development",
							"Test-Driven Development",
							"CI/CD Pipelines",
							"Performance Optimization",
							"Accessibility Standards",
							"Clean Code Principles",
							"RESTful API Design"
						].map((item, i) => (
							<div key={i} className="flex items-start gap-3">
								<svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
								<span className="text-gray-300">{item}</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;