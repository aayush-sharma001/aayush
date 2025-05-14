import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <section id="contact" className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Let's collaborate!</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Have a project in mind or want to discuss potential opportunities?
                            Feel free to reach out - I'm always open to interesting conversations
                            and new challenges.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-900 rounded-lg text-blue-300 mt-1">
                                    <FiMail className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <a href="mailto:your@email.com" className="text-gray-300 hover:text-blue-300 transition-colors">
                                        aayush001sharma@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-900 rounded-lg text-blue-300 mt-1">
                                    <FiMapPin className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Location</h4>
                                    <p className="text-gray-300">Chandigarh, India</p>
                                </div>
                            </div>

                            {/* <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900 rounded-lg text-blue-300 mt-1">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-300 transition-colors">
                    +91 
                  </a>
                </div>
              </div> */}
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-gray-800/50 p-8 rounded-xl border border-blue-700/30 backdrop-blur-sm"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                required
                            ></textarea>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                        >
                            <FiSend /> Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact