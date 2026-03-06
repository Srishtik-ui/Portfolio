import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBrain, FaBasketballBall, FaDatabase, FaUsers } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const funFacts = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "ML Developer",
      description: "Model Builder & Optimizer"
    },
    {
      icon: <FaBasketballBall className="text-3xl" />,
      title: "Basketball Player",
      description: "Team Spirit & Leadership"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      title: "Data Enthusiast",
      description: "Real World Datasets"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Public Relations",
      description: "DSCH Club Leader"
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
              About <span className="text-gradient-rose">Me</span>
            </h2>
            <p className="text-rose-gold italic text-lg mt-4 tracking-wide">
              "In a world full of data, I choose to find the story."
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-rose-gold shadow-lg shadow-rose-gold/20">
                <img
                  src="https://via.placeholder.com/500x500/1A1A25/C9747A?text=About"
                  alt="About Srishti"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold text-text-primary">
                Turning Data into Insights
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                I am a third-year undergraduate student in Computer Science and Engineering (Data Science) 
                at Haldia Institute of Technology, India.
              </p>

              <p className="text-text-secondary leading-relaxed">
                From exploring datasets to building ML models and deploying real-world applications, 
                I have always been driven by one thing — turning raw data into meaningful insights. 
                My journey spans end-to-end machine learning projects, from data collection and preprocessing 
                to model training, evaluation, and deployment.
              </p>

              <p className="text-text-secondary leading-relaxed">
                When I am not training models, you will find me on the basketball court, giving my best shot. 
                I bring the same teamwork and consistency into everything I do.
              </p>
            </motion.div>
          </div>

          {/* Fun Facts Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card-bg p-6 rounded-xl border-t-4 border-rose-gold hover:shadow-lg hover:shadow-rose-gold/20 transition-all duration-300"
              >
                <div className="text-rose-gold mb-4">{fact.icon}</div>
                <h4 className="text-rose-gold font-semibold mb-2 tracking-wide">{fact.title}</h4>
                <p className="text-text-secondary text-sm">{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
