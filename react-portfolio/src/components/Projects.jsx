import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'Emotion Detection Web Application',
      subtitle: 'Python • NLP • Scikit-learn • Streamlit',
      description: 'An NLP web application that classifies emotions from free-text input in real time using supervised machine learning algorithms.',
      bullets: [
        'Designed a text preprocessing and feature-extraction pipeline using tokenization and vectorization.',
        'Trained and evaluated a supervised classification model using accuracy and standard metrics.',
        'Deployed the interactive model live on Streamlit Cloud.',
      ],
      tags: ['Python', 'NLP', 'Scikit-learn', 'Streamlit'],
      liveDemo: 'https://emotion-app-s34ugxdudmmdfkifxyhnuv.streamlit.app',
    },
    {
      title: 'Car Sales Price Prediction',
      subtitle: 'Python • Pandas • Scikit-learn • Gradio',
      description: 'A regression model predicting used car prices from manufacture year, mileage, fuel type, and engine parameters.',
      bullets: [
        'Cleaned and preprocessed data, encoding categorical variables and scaling numerical features.',
        'Evaluated model fit using R2 score and error metrics to minimize prediction variance.',
        'Deployed to Hugging Face Spaces with an intuitive Gradio interface for live valuation.',
      ],
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Gradio', 'Hugging Face'],
      liveDemo: 'https://huggingface.co/spaces/Srishti-17/car-sales',
    },
    {
      title: 'Fine-Tuning Qwen 0.6B with LoRA',
      subtitle: 'Python • PyTorch • Transformers • PEFT',
      description: 'Parameter-efficient fine-tuning of Qwen 0.6B LLM using Low-Rank Adaptation (LoRA) for question answering and summarization.',
      bullets: [
        'Prepared a public Hugging Face dataset, including tokenization and prompt formatting for chat templates.',
        'Updated only a small subset of model weights via PEFT, drastically reducing memory overhead vs full fine-tuning.',
        'Compared fine-tuned outputs against the base model to demonstrate qualitative improvements.',
      ],
      tags: ['PyTorch', 'Hugging Face', 'LoRA / PEFT', 'LLM'],
      github: 'https://github.com/Srishtik-ui/fine-tuning-qwen-0.6B',
    },
    {
      title: 'Loan Approval Prediction System',
      subtitle: 'ISOEH Training • Scikit-learn • SMOTE • Streamlit',
      description: 'Loan approval classification system featuring EDA, missing-value treatment, SMOTE oversampling, and interactive prediction interface.',
      bullets: [
        'Handled imbalanced dataset using Synthetic Minority Over-sampling Technique (SMOTE).',
        'Evaluated classifiers (Random Forest, Decision Trees, Logistic Regression) to select top performer.',
      ],
      tags: ['Python', 'Scikit-learn', 'SMOTE', 'Streamlit'],
    },
  ]

  return (
    <section id="projects" className="pt-16 pb-8">
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Featured</p>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Projects</h2>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{project.title}</h3>
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{project.subtitle}</span>
              </div>

              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{project.description}</p>

              {project.bullets && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <FiExternalLink className="size-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <FiGithub className="size-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
