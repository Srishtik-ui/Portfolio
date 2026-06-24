import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaAward, FaMedal, FaCertificate } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Cognizant Technoverse Hackathon 2026",
      organization: "Cognizant",
      date: "2026",
      description: "Received a certificate of appreciation for participation in the Cognizant Technoverse Hackathon 2026.",
      skills: ["Hackathon", "Participation", "Teamwork"],
      color: "sage-green"
    },
    {
      icon: <FaMedal className="text-4xl" />,
      title: "Holopin x Hacktoberfest 1 Badge Club",
      organization: "Holopin x Hacktoberfest",
      date: "2024",
      description: "Earned the 1 badge club milestone for Hacktoberfest contributions and open-source participation.",
      skills: ["Open Source", "Git", "GitHub", "Collaboration"],
      color: "accent-secondary"
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "GSSoC 2026 Contributor",
      organization: "GS Labs by GirlScript Foundation",
      date: "2026",
      description: "Recognized as a contributor in GirlScript Summer of Code 2026 for active open-source participation.",
      skills: ["Open Source", "Contribution", "Collaboration", "Problem Solving"],
      color: "sage-green"
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Holopin x Hacktoberfest Level 1 Contributor",
      organization: "Hacktoberfest / Holopin",
      date: "2026",
      description: "Earned Level 1 contributor status for Hacktoberfest participation and open-source engagement.",
      skills: ["Open Source", "Hacktoberfest", "Contribution"],
      color: "accent-secondary"
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="achievements" ref={ref} className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
              Achievements & <span className="text-gradient-sage">Certifications</span>
            </h2>
            <p className="text-text-secondary mt-4">
              Recognition of dedication to continuous learning and professional growth
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="bg-card-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-sage-green/10 transition-all duration-300 border border-border-primary relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${achievement.color}/10 rounded-full blur-2xl`}></div>

                {/* Icon */}
                <motion.div
                  className={`text-${achievement.color} mb-6 relative z-10`}
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2 relative z-10">
                  {achievement.title}
                </h3>

                {/* Organization & Date */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <p className={`text-${achievement.color} font-semibold text-sm`}>
                    {achievement.organization}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {achievement.date}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                  {achievement.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {achievement.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 bg-bg-secondary rounded-full text-xs border border-${achievement.color}/30 text-text-primary`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="bg-card-bg rounded-xl p-6 text-center border border-sage-green/20">
              <div className="text-4xl font-bold text-sage-green mb-2">4+</div>
              <div className="text-text-secondary text-sm">Certifications</div>
            </div>
            <div className="bg-card-bg rounded-xl p-6 text-center border border-sage-green/20">
              <div className="text-4xl font-bold text-sage-green mb-2">10+</div>
              <div className="text-text-secondary text-sm">Projects Completed</div>
            </div>
            <div className="bg-card-bg rounded-xl p-6 text-center border border-sage-green/20">
              <div className="text-4xl font-bold text-sage-green mb-2">50+</div>
              <div className="text-text-secondary text-sm">GitHub Contributions</div>
            </div>
            <div className="bg-card-bg rounded-xl p-6 text-center border border-sage-green/20">
              <div className="text-4xl font-bold text-sage-green mb-2">2+</div>
              <div className="text-text-secondary text-sm">Years Learning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements




