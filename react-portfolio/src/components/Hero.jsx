import { FiFileText, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { SiPython, SiPytorch, SiScikitlearn, SiStreamlit } from 'react-icons/si'

export default function Hero() {
  return (
    <section id="home" className="pt-12 pb-16">
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur">
        <img
          src="/assets/pfp.jpeg"
          alt="Srishti Kumari"
          className="size-24 rounded-full object-cover border-2 border-neutral-200 dark:border-neutral-800 bg-yellow-400 dark:bg-yellow-300 shadow-md"
          onError={(e) => {
            e.target.src = 'https://ui-avatars.com/api/?name=Srishti+Kumari&background=eab308&color=fff'
          }}
        />

        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Hi, I'm Srishti Kumari — <span className="text-neutral-500 dark:text-neutral-400">Data Science &amp; ML Engineer</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2.5 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <span>Fourth-year B.Tech CSE (Data Science) student at Haldia Institute of Technology. I specialize in building end-to-end Machine Learning pipelines and intelligent applications using</span>

            <a className="skill-pill-inline" href="https://www.python.org/" target="_blank" rel="noreferrer">
              <SiPython className="size-4 text-[#3776AB]" />
              <span>Python</span>
            </a>

            <span>,</span>

            <a className="skill-pill-inline" href="https://pytorch.org/" target="_blank" rel="noreferrer">
              <SiPytorch className="size-4 text-[#EE4C2C]" />
              <span>PyTorch</span>
            </a>

            <span>,</span>

            <a className="skill-pill-inline" href="https://scikit-learn.org/" target="_blank" rel="noreferrer">
              <SiScikitlearn className="size-4 text-[#F7931E]" />
              <span>Scikit-learn</span>
            </a>

            <span>,</span>

            <a className="skill-pill-inline" href="https://huggingface.co/" target="_blank" rel="noreferrer">
              <svg className="size-4" viewBox="0 0 128 128"><path fill="#FFD21E" d="M64 12a52 52 0 100 104 52 52 0 000-104zm-18 42a8 8 0 110-16 8 8 0 010 16zm36 0a8 8 0 110-16 8 8 0 010 16zm-36 28c8 10 28 10 36 0"/></svg>
              <span>Hugging Face</span>
            </a>

            <span>, and deploying interactive AI tools with</span>

            <a className="skill-pill-inline" href="https://streamlit.io/" target="_blank" rel="noreferrer">
              <SiStreamlit className="size-4 text-[#FF4B4B]" />
              <span>Streamlit</span>
            </a>

            <span>.</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1Tw4vgmYeKwhb4QyuS0KZ9Ltdwx4Xj5m4/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-md text-sm font-semibold border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
          >
            <FiFileText className="size-4" />
            <span>Resume / CV</span>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/srishti-kumari-60a8502a6/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-1"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="size-6" />
          </a>
          <a
            href="https://github.com/Srishtik-ui"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-1"
            aria-label="GitHub"
          >
            <FiGithub className="size-6" />
          </a>
          <a
            href="mailto:srishtik717@gmail.com"
            className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors p-1"
            aria-label="Email"
          >
            <FiMail className="size-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
