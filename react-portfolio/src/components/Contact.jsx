import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="pt-16 pb-12">
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Get in touch</p>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Contact</h2>
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900/50 text-center">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Let's build something together!</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            I'm always open to discussing new projects, Data Science opportunities, ML collaborations, or tech conversations.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:srishtik717@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <FiMail className="size-4" />
              <span>srishtik717@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/srishti-kumari-60a8502a6/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <FiLinkedin className="size-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Srishtik-ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-semibold text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <FiGithub className="size-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
