import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "srishti717@gmail.com",
      link: "mailto:srishti717@gmail.com",
      color: "rose-gold"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      value: "github.com/srishti717",
      link: "https://github.com/srishti717",
      color: "accent-secondary"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/srishti-kumari",
      link: "https://www.linkedin.com/in/srishti-kumari-894982289/",
      color: "rose-gold"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-20 right-20 w-80 h-80 bg-rose-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
              Let's <span className="text-gradient-rose">Connect</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Whether you have a question, collaboration opportunity, or just want to say hi, I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                Get in Touch
              </h3>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-center gap-4 bg-card-bg p-6 rounded-xl border border-border-primary hover:border-rose-gold/50 transition-all duration-300 group"
                >
                  <div className={`text-${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">{info.title}</h4>
                    <p className={`text-${info.color} text-sm hover:underline`}>{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-rose-gold/10 to-accent-secondary/10 p-8 rounded-2xl border border-rose-gold/20 mt-8"
              >
                <h4 className="text-xl font-heading font-semibold text-rose-gold mb-4">
                  Open to Opportunities
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  Currently seeking internship opportunities in <span className="text-rose-gold font-semibold">Machine Learning</span>, 
                  <span className="text-rose-gold font-semibold"> Data Science</span>, and 
                  <span className="text-rose-gold font-semibold"> AI Engineering</span>. 
                  Available for freelance projects and open-source collaborations.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-heading font-semibold text-text-primary mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card-bg border border-border-primary rounded-xl text-text-primary focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card-bg border border-border-primary rounded-xl text-text-primary focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-card-bg border border-border-primary rounded-xl text-text-primary focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-rose-gold to-accent-secondary rounded-full text-white font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-rose-gold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
