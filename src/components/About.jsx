// // import React from "react";

// // const About = () => {
// // 	return (
// // 		<section
// // 			id="about"
// // 			className="min-h-screen px-6 py-20 bg-blue-900 backdrop-blur-md border border-white/10 text-white"
// // 		>
// // 			<div className="max-w-5xl mx-auto">
// // 				<h2 className="text-4xl md:text-5xl font-bold text-accent text-center mb-10">About Me</h2>
// // 				<div className="grid md:grid-cols-2 gap-10 items-center">
// // 					<div>
// // 						<h3 className="text-2xl font-semibold mb-4">Hi, I'm Aayush Sharma 👋</h3>
// // 						<p className="text-lg text-gray-200 leading-relaxed">
// // 							A Full Stack Developer with a focus on building scalable and meaningful products. I specialize in React,
// // 							Next.js, Node.js, and MongoDB, and enjoy shipping features in fast-paced environments.
// // 						</p>
// // 						<p className="text-lg text-gray-200 mt-4 leading-relaxed">
// // 							I’ve worked on Chrome extensions, dashboards, and full-stack web apps — always striving for performance,
// // 							usability, and impact.
// // 						</p>
// // 					</div>

// // 					<div className="space-y-4">
// // 						<div className="p-4 bg-white/10 rounded-lg border border-white/20">
// // 							<h4 className="font-semibold text-accent">💻 Tech Stack</h4>
// // 							<p className="text-gray-200">React.js, Next.js, Node.js, MongoDB, PostgreSQL</p>
// // 						</div>
// // 						<div className="p-4 bg-white/10 rounded-lg border border-white/20">
// // 							<h4 className="font-semibold text-accent">🚀 Projects</h4>
// // 							<p className="text-gray-200">BlockerX Chrome Extension, Service App, Community Website</p>
// // 						</div>
// // 						<div className="p-4 bg-white/10 rounded-lg border border-white/20">
// // 							<h4 className="font-semibold text-accent">🎯 Goal</h4>
// // 							<p className="text-gray-200">To deliver clean, user-centric solutions and constantly grow as a developer.</p>
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</section>
// // 	);
// // };


// // export default About;


// import React from "react";
// import { motion } from "framer-motion";
// import { FaCode, FaRocket, FaBullseye } from "react-icons/fa";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden"
//     >
//       {/* Floating tech bubbles */}
//       <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
//         {['</>', '{ }', '=>', '()', 'CSS', 'HTML', 'API'].map((tech, i) => (
//           <motion.span
//             key={i}
//             initial={{ y: 0, x: Math.random() * 100 - 50 }}
//             animate={{ 
//               y: [0, -100, -200, -300],
//               x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
//               opacity: [0.8, 0.6, 0.4, 0]
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               delay: Math.random() * 5
//             }}
//             className="absolute text-xl text-blue-300 font-mono"
//             style={{
//               left: `${10 + Math.random() * 80}%`,
//               bottom: '-50px'
//             }}
//           >
//             {tech}
//           </motion.span>
//         ))}
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Animated title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
//         >
//           About Me
//         </motion.h2>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left column - Bio */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h3 className="text-3xl font-bold">
//               Hi, I'm <span className="text-blue-300">Aayush Sharma</span> 👋
//             </h3>

//             <p className="text-lg text-gray-300 leading-relaxed">
//               I'm a <span className="text-blue-300 font-medium">Full Stack Developer</span> with a passion for crafting digital experiences that are both beautiful and functional. With expertise across the entire stack, I bridge the gap between design and technology.
//             </p>

//             <p className="text-lg text-gray-300 leading-relaxed">
//               My approach combines <span className="text-blue-300 font-medium">technical precision</span> with <span className="text-blue-300 font-medium">creative problem-solving</span>. I thrive in fast-paced environments where I can ship impactful features and continuously refine my craft.
//             </p>

//             <div className="flex flex-wrap gap-3 pt-4">
//               {['React', 'Next.js', 'Node', 'MongoDB', 'TypeScript', 'Tailwind', 'AWS'].map((tech, i) => (
//                 <motion.span
//                   key={i}
//                   whileHover={{ scale: 1.05 }}
//                   className="px-3 py-1 bg-blue-900/50 text-blue-200 text-sm rounded-full border border-blue-700/50"
//                 >
//                   {tech}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right column - Info cards */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <motion.div 
//               whileHover={{ y: -5 }}
//               className="p-6 bg-gradient-to-br from-gray-800/50 to-blue-900/50 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-blue-900 rounded-lg">
//                   <FaCode className="text-2xl text-blue-300" />
//                 </div>
//                 <h4 className="text-xl font-semibold">Tech Stack</h4>
//               </div>
//               <p className="text-gray-300 pl-16">
//                 React.js · Next.js · Node.js · MongoDB · PostgreSQL · TypeScript · Tailwind CSS · AWS
//               </p>
//             </motion.div>

//             <motion.div 
//               whileHover={{ y: -5 }}
//               className="p-6 bg-gradient-to-br from-gray-800/50 to-blue-900/50 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-blue-900 rounded-lg">
//                   <FaRocket className="text-2xl text-blue-300" />
//                 </div>
//                 <h4 className="text-xl font-semibold">Notable Projects</h4>
//               </div>
//               <p className="text-gray-300 pl-16">
//                 BlockerX Chrome Extension (100k+ users) · Service App · Community Website · Multiple production dashboards
//               </p>
//             </motion.div>

//             <motion.div 
//               whileHover={{ y: -5 }}
//               className="p-6 bg-gradient-to-br from-gray-800/50 to-blue-900/50 rounded-xl border border-blue-700/30 backdrop-blur-sm shadow-lg"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-blue-900 rounded-lg">
//                   <FaBullseye className="text-2xl text-blue-300" />
//                 </div>
//                 <h4 className="text-xl font-semibold">Development Philosophy</h4>
//               </div>
//               <p className="text-gray-300 pl-16">
//                 Clean code · User-centric design · Performance optimization · Continuous learning · Collaborative problem-solving
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating elements */}
//       <motion.div
//         animate={{
//           y: [0, -15, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-blue-600/30 blur-xl"
//       />
//       <motion.div
//         animate={{
//           y: [0, 15, 0],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 1
//         }}
//         className="absolute top-1/3 right-20 w-10 h-10 rounded-full bg-blue-400/20 blur-xl"
//       />
//     </section>
//   );
// };

// export default About;

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