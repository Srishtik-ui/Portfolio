export default function Education() {
  return (
    <section id="education" className="pt-16 pb-8">
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Background</p>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Education &amp; Experience</h2>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {/* B.Tech */}
          <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/50">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">August 2023 – July 2027</span>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mt-1">
              B.Tech in Computer Science &amp; Engineering (Data Science)
            </h3>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
              Haldia Institute of Technology (Autonomous) • CGPA: 8.00 / 10.00
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
              Relevant Coursework: Data Structures &amp; Algorithms, DBMS, Machine Learning, Artificial Intelligence, Operating Systems, OOP, Probability &amp; Statistics, Data Visualization.
            </p>
          </div>

          {/* ISOEH Training */}
          <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/50">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">January 2026 – February 2026</span>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mt-1">
              ISOEH - Advanced Python &amp; Cloud Security Training
            </h3>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
              Completed hands-on training in machine learning, data analysis, model deployment, and cloud security.
            </p>
          </div>

          {/* Cognizant Hackathon */}
          <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/50">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Hackathon Certificate</span>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mt-1">
              Cognizant Technoverse Hackathon 2026
            </h3>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
              Certificate of Appreciation - Participation, organized by Cognizant.
            </p>
          </div>

          {/* Position of Responsibility */}
          <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900/50">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Position of Responsibility</span>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mt-1">
              Public Relations Head — DSCH
            </h3>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
              Haldia Institute of Technology
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed">
              Led public relations efforts for the club, managing external communication and outreach initiatives for campus technical events.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}