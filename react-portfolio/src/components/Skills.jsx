export default function Skills() {
  const mlSkills = ['Python', 'PyTorch', 'Scikit-learn', 'Hugging Face Transformers', 'LoRA / PEFT', 'Natural Language Processing', 'Supervised Learning', 'EDA & Feature Engineering']
  const dataSkills = ['SQL (MySQL)', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Cleaning', 'Model Evaluation']
  const webSkills = ['Streamlit', 'Gradio', 'HTML5', 'CSS3', 'JavaScript']
  const toolSkills = ['Git', 'GitHub', 'Jupyter Notebook', 'ISOEH Advanced Python & Cloud Security']

  return (
    <section id="skills" className="pt-16 pb-8">
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">My</p>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Skills</h2>
        </div>

        <div className="mt-8 space-y-6 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/50">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Machine Learning &amp; Deep Learning</h3>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill) => (
                <span key={skill} className="skill-pill-inline">{skill}</span>
              ))}
            </div>
          </div>

          <div className="h-px w-full border-t border-dashed border-neutral-200 dark:border-neutral-800" />

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Data Science &amp; Analytics</h3>
            <div className="flex flex-wrap gap-2">
              {dataSkills.map((skill) => (
                <span key={skill} className="skill-pill-inline">{skill}</span>
              ))}
            </div>
          </div>

          <div className="h-px w-full border-t border-dashed border-neutral-200 dark:border-neutral-800" />

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Web &amp; Deployment</h3>
            <div className="flex flex-wrap gap-2">
              {webSkills.map((skill) => (
                <span key={skill} className="skill-pill-inline">{skill}</span>
              ))}
            </div>
          </div>

          <div className="h-px w-full border-t border-dashed border-neutral-200 dark:border-neutral-800" />

          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Tools &amp; Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {toolSkills.map((skill) => (
                <span key={skill} className="skill-pill-inline">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
