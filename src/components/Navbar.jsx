import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// import { theme } from '../config/theme'

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false)
	const [activeSection, setActiveSection] = useState('home')

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)

			const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact']
			const scrollPosition = window.scrollY + 100

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const offsetTop = element.offsetTop
					const offsetHeight = element.offsetHeight

					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const navItems = [
		{ id: 'home', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'education', label: 'Education' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	]

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-gray-900/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'
				}`}
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center">
					<a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
						Aayush
					</a>

					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<a
								key={item.id}
								href={`#${item.id}`}
								className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-blue-400' : 'text-gray-300 hover:text-white'
									}`}
							>
								{item.label}
								{activeSection === item.id && (
									<motion.span
										layoutId="nav-underline"
										className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400"
										transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
									/>
								)}
							</a>
						))}
					</div>
				</div>
			</div>
		</motion.nav>
	)
}

export default Navbar