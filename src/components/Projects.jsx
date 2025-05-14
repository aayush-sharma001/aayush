import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import gridGame from '../assets/project/gridGame.png';
import qrGenerator from '../assets/project/qrGenerator.png';
import typingApp from '../assets/project/typingApp.png';
import blackAndWhite from '../assets/project/blackAndWhite.png';

const projects = [
	{
		id: 1,
		title: "Quick Keys: Typing App",
		description: "Quick Keys is a responsive typing practice app built with ReactJS. It offers difficulty levels and timer options, while tracking WPM, accuracy, and errors to help users improve speed and precision by up to 20%.",
		technologies: ["React", "JSX", "CSS"],
		github: "#",
		live: "https://aayush-sharma001.github.io/quick-keys/",
		image: typingApp
	},
	// {
	// 	id: 2,
	// 	title: "ExamineHive: Exam Platform",
	// 	description: "A full-featured exam portal built using Next.js. It includes a student portal for taking tests and a teacher portal for creating tests and monitoring performance.",
	// 	technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
	// 	github: "#",
	// 	live: "#",
	// 	image: "/project2.jpg"
	// },
	{
		id: 3,
		title: "Gift Hunt: Grid Game",
		description: "It is a fun browser-based game built with HTML, CSS, and JavaScript. Players try to find a hidden gift on a grid in as few moves as possible. It includes three difficulty levels, making it a simple yet engaging way to enjoy",
		technologies: ["HTML", "CSS", "JavaScript"],
		github: "#",
		live: "https://aayush-sharma001.github.io/Grid-Gift-Finding-Game/HTML/index.html",
		image: gridGame
	},
	{
		id: 4,
		title: "QR-Code Generator",
		description: "It allows users to generate QR codes for any website URL, which can be scanned using any standard QR scanner to quickly access the linked site. The application also provides features to easily share and download the generated QR codes.",
		technologies: ["Node.js", "JavaScript", "EJS", "Express,js"],
		github: "#",
		live: "https://qr-code-pop4.onrender.com/",
		image: qrGenerator
	},
	{
		id: 5,
		title: "Black and White",
		description: "A browser extension that instantly transforms webpages into monochromatic views to reduce visual distractions and improve focus. Designed for users with attention difficulties, designers seeking inspiration, and anyone wanting a cleaner browsing experience.",
		technologies: ["HTML", "CSS", "JavaScript", "Extension APIs"],
		github: "#",
		live: "https://microsoftedge.microsoft.com/addons/detail/black-and-white/pjkofkhnbnijdpldebconghoapbhcdfd",
		image: blackAndWhite
	}
]

const Projects = () => {
	return (
		<section id="projects" className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
				>
					Projects
				</motion.h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5 }}
							className="bg-gray-800/50 rounded-xl overflow-hidden border border-blue-700/30 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
						>
							<div className="h-48 bg-gray-700/50 relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-300 mb-4">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.map((tech, i) => (
										<span key={i} className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded-full">
											{tech}
										</span>
									))}
								</div>

								<div className="flex gap-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
									>
										<FiGithub /> Code
									</a>
									<a
										href={project.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors"
									>
										<FiExternalLink /> Live Demo
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects