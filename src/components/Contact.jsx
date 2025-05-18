import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const form = useRef()

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_email: 'devamsh2006@gmail.com'
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">I'd love to hear from you!</p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg min-w-[300px] hover:bg-[#2a2a2a]/80 transition-colors">
              <FaPhoneAlt className="text-2xl text-[#00ffff]" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#00ffff] transition-colors">+91 8106993581</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg min-w-[300px] hover:bg-[#2a2a2a]/80 transition-colors">
              <FaEnvelope className="text-2xl text-[#00ffff]" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:devamsh2006@gmail.com" className="text-gray-300 hover:text-[#00ffff] transition-colors">devamsh2006@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#2a2a2a] p-4 rounded-lg min-w-[300px] hover:bg-[#2a2a2a]/80 transition-colors">
              <FaMapMarkerAlt className="text-2xl text-[#00ffff]" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-300">Hyderabad, India</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:border-[#00ffff] focus:outline-none focus:ring-1 focus:ring-[#00ffff] transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:border-[#00ffff] focus:outline-none focus:ring-1 focus:ring-[#00ffff] transition-colors"
                    placeholder="Your Email ID"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 focus:border-[#00ffff] focus:outline-none focus:ring-1 focus:ring-[#00ffff] transition-colors resize-none"
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-[#00ffff] text-[#1a1a1a] hover:bg-[#00ffff]/90'}`}
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center p-3 rounded-lg ${submitStatus === 'success' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-red-500/20 text-red-300'}`}
                  >
                    {submitStatus === 'success' 
                      ? 'Message sent successfully!' 
                      : 'Failed to send message. Please try again.'}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <img
                src="/Mentalking.svg"
                alt="Contact Illustration"
                className="w-full max-w-md mx-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact