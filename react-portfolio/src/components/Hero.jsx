import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaGlobe, FaChartLine, FaBrain, FaCode, FaHackerrank } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sage-green-light/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-sage-green text-sm tracking-wider-3 uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-heading font-bold tracking-wide text-gradient-sage"
            >
              Srishti Kumari
            </motion.h1>

            <motion.div variants={itemVariants} className="h-12">
              <TypeAnimation
                sequence={[
                  'Data Science Student', 2000,
                  'ML Engineer', 2000,
                  'Python Developer', 2000,
                  'Problem Solver', 2000,
                  'Basketball Player', 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl text-sage-green"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-lg leading-relaxed max-w-xl"
            >
              A third-year undergraduate student in Computer Science and Engineering (Data Science) 
              at Haldia Institute of Technology, India, passionate about turning raw data into meaningful insights.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-sage-green to-sage-light text-bg-primary font-semibold rounded-full hover:shadow-lg hover:shadow-sage-green/30 transition-all duration-300 hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1lcG91oOWKbP3Goolu4d1v3KzxaHQrFst/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-sage-green text-sage-green font-semibold rounded-full hover:bg-sage-green/10 transition-all duration-300 hover:-translate-y-1"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              <a
                href="https://github.com/Srishtik-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-sage-green rounded-full text-sage-green hover:bg-sage-green hover:text-bg-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/srishti-kumari-60a8502a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-sage-green rounded-full text-sage-green hover:bg-sage-green hover:text-bg-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://srishtik.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-sage-green rounded-full text-sage-green hover:bg-sage-green hover:text-bg-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaGlobe size={20} />
              </a>
              <a
                href="https://www.hackerrank.com/profile/srishtik2709"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border-2 border-sage-green rounded-full text-sage-green hover:bg-sage-green hover:text-bg-primary transition-all duration-300 hover:-translate-y-1"
              >
                <FaHackerrank size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-sage-green animate-profile-glow">
                <img
                  src="/pfp.jpeg"
                  alt="Srishti Kumari"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-card-bg border-2 border-sage-green rounded-full flex items-center justify-center"
              >
                <FaChartLine className="text-sage-green text-2xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-card-bg border-2 border-sage-green rounded-full flex items-center justify-center"
              >
                <FaBrain className="text-sage-green text-2xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -25, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute top-20 -left-12 w-16 h-16 bg-card-bg border-2 border-sage-green rounded-full flex items-center justify-center"
              >
                <FaCode className="text-sage-green text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-sage-green rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-sage-green rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero




