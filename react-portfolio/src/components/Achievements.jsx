import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaAward, FaMedal, FaCertificate } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Deloitte Cyber Security Virtual Program",
      organization: "Deloitte (via Forage)",
      date: "2024",
      description: "Completed a job simulation as a cyber security analyst at Deloitte. Responded to a cybersecurity incident through security analysis and escalation. Analyzed breach scenarios and provided appropriate responses.",
      skills: ["Cyber Security", "Incident Response", "Security Analysis"],
      color: "rose-gold"
    },
    {
      icon: <FaMedal className="text-4xl" />,
      title: "Hacktoberfest 2024 - Level 4",
      organization: "DigitalOcean & GitHub",
      date: "October 2024",
      description: "Achieved Level 4 completion in Hacktoberfest by contributing to open-source projects. Made significant pull requests and collaborated with global developers on various repositories.",
      skills: ["Open Source", "Git", "GitHub", "Collaboration"],
      color: "accent-secondary"
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "GirlScript Summer of Code 2025",
      organization: "GirlScript Foundation",
      date: "2025",
      description: "Selected as a participant in India's largest open-source program for students. Contributing to real-world projects under experienced mentors and building impactful solutions.",
      skills: ["Open Source", "Python", "Mentorship", "Problem Solving"],
      color: "rose-gold"
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Access Denied Workshop",
      organization: "Learning & Development Workshop",
      date: "2024",
      description: "Participated in an intensive technical workshop focused on advanced development practices and problem-solving techniques. Gained hands-on experience with cutting-edge tools and technologies.",
      skills: ["Development", "Problem Solving", "Team Collaboration"],
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
              Achievements & <span className="text-gradient-rose">Certifications</span>
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
                className="bg-card-bg rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-rose-gold/10 transition-all duration-300 border border-border-primary relative overflow-hidden"
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
            <div className="bg-card-bg rounded-xl p-6 text-center border border-rose-gold/20">
              <div className="text-4xl font-bold text-rose-gold mb-2">4+</div>
              <div className="text-text-secondary text-sm">Certifications</div>
            </div>
            <div className="bg-card-bg rounded-xl p-6 text-center border border-rose-gold/20">
              <div className="text-4xl font-bold text-rose-gold mb-2">10+</div>
              <div className="text-text-secondary text-sm">Projects Completed</div>
            </div>
            <div className="bg-card-bg rounded-xl p-6 text-center border border-rose-gold/20">
              <div className="text-4xl font-bold text-rose-gold mb-2">50+</div>
              <div className="text-text-secondary text-sm">GitHub Contributions</div>
            </div>
            <div className="bg-card-bg rounded-xl p-6 text-center border border-rose-gold/20">
              <div className="text-4xl font-bold text-rose-gold mb-2">2+</div>
              <div className="text-text-secondary text-sm">Years Learning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
