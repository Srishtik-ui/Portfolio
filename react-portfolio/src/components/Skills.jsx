import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPython, FaJava, FaDatabase, FaHtml5, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiStreamlit } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95, icon: <FaPython /> },
        { name: "SQL", level: 90, icon: <FaDatabase /> },
        { name: "Java (Basics)", level: 65, icon: <FaJava /> },
        { name: "HTML & CSS", level: 80, icon: <FaHtml5 /> },
      ]
    },
    {
      title: "Data Science & ML",
      icon: "🤖",
      skills: [
        { name: "Data Cleaning", level: 92 },
        { name: "EDA", level: 90 },
        { name: "Feature Engineering", level: 88 },
        { name: "Supervised Learning", level: 85 },
        { name: "Model Evaluation", level: 85 },
      ]
    },
    {
      title: "ML Algorithms",
      icon: "🧠",
      skills: [
        { name: "Linear Regression", level: 88 },
        { name: "Logistic Regression", level: 85 },
        { name: "Decision Trees", level: 85 },
        { name: "Random Forest", level: 82 },
        { name: "KNN", level: 80 },
        { name: "NLP", level: 78 },
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: "📚",
      skills: [
        { name: "Pandas", level: 95, icon: <SiPandas /> },
        { name: "NumPy", level: 90, icon: <SiNumpy /> },
        { name: "Scikit-learn", level: 92, icon: <SiScikitlearn /> },
        { name: "Matplotlib", level: 88 },
        { name: "Seaborn", level: 88 },
        { name: "Streamlit", level: 85, icon: <SiStreamlit /> },
        { name: "Gradio", level: 82 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90, icon: <FaGitAlt /> },
        { name: "GitHub", level: 90, icon: <FaGithub /> },
        { name: "Jupyter Notebook", level: 92, icon: <SiJupyter /> },
        { name: "MySQL", level: 85 },
        { name: "VS Code", level: 90 },
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="skills" ref={ref} className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-20 left-20 w-80 h-80 bg-sage-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
              Technical <span className="text-gradient-sage">Skills</span>
            </h2>
            <p className="text-text-secondary mt-4">
              Organized by proficiency level and continuously expanding
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-heading font-semibold text-sage-green flex items-center gap-3">
                  <span>{category.icon}</span>
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={itemVariants}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="bg-card-bg p-6 rounded-xl border-t-4 border-sage-green hover:shadow-lg hover:shadow-sage-green/20 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-text-primary font-semibold flex items-center gap-2">
                          {skill.icon && <span className="text-sage-green">{skill.icon}</span>}
                          {skill.name}
                        </h4>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-bg-secondary h-2 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-sage-green to-sage-light rounded-full"
                        />
                      </div>

                      <div className="mt-2 text-right">
                        <span className="text-sage-green text-sm font-semibold">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills




