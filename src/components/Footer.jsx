import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="bg-gray-900/80 text-white py-12 backdrop-blur-md border-t border-gray-800">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-6 md:mb-0">
						<h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
							Aayush Sharma
						</h3>
						<p className="mt-2 text-gray-400">Full Stack Developer</p>
					</div>

					<div className="flex space-x-6">
						<a
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
							aria-label="GitHub"
						>
							<FaGithub className="text-xl" />
						</a>
						<a
							href="https://linkedin.com/in/yourprofile"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="text-xl" />
						</a>
						<a
							href="https://twitter.com/yourprofile"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition-colors"
							aria-label="Twitter"
						>
							<FaTwitter className="text-xl" />
						</a>
						<a
							href="mailto:your@email.com"
							className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-500 transition-colors"
							aria-label="Email"
						>
							<FaEnvelope className="text-xl" />
						</a>
					</div>
				</div>

				<div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
					<p>© {new Date().getFullYear()} Aayush Sharma. All rights reserved.</p>
					<p className="mt-2">Built with React, Next.js, and Tailwind CSS</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer