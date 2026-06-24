import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Emotion Detection Web App",
      subtitle: "Real-time Emotion Recognition using Deep Learning",
      description: "A machine learning-powered web application that detects human emotions in real-time using deep learning and computer vision. Built with TensorFlow for model training and Streamlit for deployment.",
      techStack: ["Python", "TensorFlow", "Streamlit", "OpenCV", "Pandas", "NumPy", "Scikit-learn"],
      architecture: [
        {
          layer: "Input Layer",
          description: "Image preprocessing (48x48 grayscale)"
        },
        {
          layer: "Feature Extraction",
          description: "Convolutional Neural Network (CNN)"
        },
        {
          layer: "Classification Layer",
          description: "Dense layers with softmax activation"
        },
        {
          layer: "Output",
          description: "7 emotion categories (Happy, Sad, Angry, Neutral, Surprise, Fear, Disgust)"
        }
      ],
      github: "https://github.com/Srishtik-ui/emotion-app",
      liveDemo: "https://emotion-app-s34ugxdudmmdfkifxyhnuv.streamlit.app/",
      gradient: "from-sage-green to-accent-secondary"
    },
    {
      title: "Car Sales Price Prediction",
      subtitle: "ML-Based Price Estimation System",
      description: "A comprehensive machine learning project that predicts car prices based on features like brand, model, year, mileage, fuel type. Uses ensemble techniques and feature engineering for accurate predictions.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
      architecture: [
        {
          layer: "Data Collection",
          description: "Web scraping & dataset preprocessing"
        },
        {
          layer: "Feature Engineering",
          description: "Handling categorical variables, scaling, encoding"
        },
        {
          layer: "Model Training",
          description: "Random Forest, XGBoost, Linear Regression"
        },
        {
          layer: "Evaluation",
          description: "R² Score, RMSE, MAE metrics"
        }
      ],
      github: "https://github.com/Srishtik-ui/Car_price_predictor",
      liveDemo: "https://huggingface.co/spaces/Git-bash1706/car-sales",
      gradient: "from-accent-secondary to-sage-green"
    },
    {
      title: "IRIS Predict",
      subtitle: "Classic ML Classification Project",
      description: "A foundational machine learning project implementing multiple classification algorithms on the famous Iris dataset. Compares various models to identify the best performing algorithm.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
      architecture: [
        {
          layer: "Data Analysis",
          description: "EDA with statistical insights"
        },
        {
          layer: "Preprocessing",
          description: "Data cleaning, normalization, train-test split"
        },
        {
          layer: "Model Selection",
          description: "Logistic Regression, KNN, Decision Tree, Random Forest"
        },
        {
          layer: "Performance",
          description: "Accuracy, Confusion Matrix, Classification Report"
        }
      ],
      github: "https://github.com/Srishtik-ui/iris_model",
      liveDemo: "https://irismodel-byvkl2ukpu5vt4cynxerql.streamlit.app",
      gradient: "from-sage-green via-accent-secondary to-sage-green"
    }
  ]

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-sage-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wide">
              Featured <span className="text-gradient-sage">Projects</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Hands-on machine learning projects showcasing data science expertise and problem-solving skills
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-card-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-sage-green/10 transition-all duration-300 border border-border-primary"
              >
                {/* Top Gradient Border */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-8">
                  {/* Title & Subtitle */}
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sage-light font-semibold">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sage-green font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-bg-primary rounded-full text-sm border border-sage-green/30 text-text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Flow */}
                  <div className="mb-6">
                    <h4 className="text-sage-green font-semibold mb-4">Architecture:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {project.architecture.map((layer, layerIndex) => (
                        <div
                          key={layerIndex}
                          className="bg-bg-secondary p-4 rounded-lg border border-sage-green/20"
                        >
                          <div className="text-sage-green font-semibold mb-2 text-sm">
                            {layer.layer}
                          </div>
                          <div className="text-text-secondary text-xs">
                            {layer.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sage-green to-accent-secondary rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      <FaGithub className="text-xl" />
                      View Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-bg-primary border-2 border-sage-green rounded-full text-sage-green font-semibold hover:bg-sage-green hover:text-white transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects




