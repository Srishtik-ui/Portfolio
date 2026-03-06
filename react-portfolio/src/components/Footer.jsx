import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/srishti717",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/srishti-kumari-894982289/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:srishti717@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-bg-primary border-t border-border-primary py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient-rose mb-4">
              Srishti Kumari
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Machine Learning & Data Science Student passionate about solving real-world problems through AI and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-rose-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-card-bg border border-border-primary flex items-center justify-center text-text-secondary hover:text-rose-gold hover:border-rose-gold transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm text-center md:text-left">
              © {currentYear} Srishti Kumari. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm flex items-center gap-2">
              Made with <FaHeart className="text-rose-gold" /> using React, Vite & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
