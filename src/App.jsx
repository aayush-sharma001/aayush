import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

const SectionWrapper = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: '-100px' }}
    className="snap-start snap-always"
  >
    {children}
  </motion.section>
)

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      
      <Suspense fallback={<div className="h-screen bg-gray-900" />}>
        <SectionWrapper id="home"><Home /></SectionWrapper>
        <SectionWrapper id="about"><About /></SectionWrapper>
        <SectionWrapper id="experience"><Experience /></SectionWrapper>
        <SectionWrapper id="education"><Education /></SectionWrapper>
        <SectionWrapper id="skills"><Skills /></SectionWrapper>
        <SectionWrapper id="projects"><Projects /></SectionWrapper>
        <SectionWrapper id="contact"><Contact /></SectionWrapper>
      </Suspense>
      
      <Footer />
    </div>
  )
}

export default App