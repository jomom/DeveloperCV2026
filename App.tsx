
import React, { useState, useEffect } from 'react';
import CursorSpotlight from './components/CursorSpotlight';
import NavLinks from './components/NavLinks';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import { EXPERIENCES, PROJECTS, SOCIALS, SKILLS } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative min-h-screen bg-main text-high transition-colors duration-300">
      <CursorSpotlight />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Column: Fixed content on Desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold tracking-tight text-high sm:text-5xl">
                <a href="/">Joel Momanyi Nyaosi</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-muted sm:text-xl">
                Senior Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-muted">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
              
              <NavLinks />
            </div>

            <ul className="ml-1 mt-8 flex items-center relative z-10" aria-label="Social media">
              {SOCIALS.map((social) => (
                <li key={social.name} className="mr-5 text-xs">
                  <a
                    className="block hover:text-high text-muted transition-colors"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.name} (opens in a new tab)`}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </header>

          {/* Right Column: Scrolling content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24 relative z-10">
            
            {/* About Section */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-high lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4 text-muted leading-relaxed">
                  I'm a software engineer with a specialty in building high-performance web applications, focused on
                  creating intuitive user interfaces. I enjoy working at the intersection of design and engineering,
                  where great user experience meets robust, clean, and scalable code.
                </p>
                <p className="mb-4 text-muted leading-relaxed">
                  Currently, I'm a senior engineer at <span className="text-high font-medium">Quantum Dynamics</span>,
                  where I architect scalable microservices and frontend architectures. My role involves leading teams
                  through complex technical challenges and mentoring junior developers to foster a culture of excellence.
                </p>
                <p className="mb-6 text-muted leading-relaxed">
                  When I'm not at the computer, I'm usually exploring the outdoors, experimenting with digital photography,
                  or digging into a new sci-fi novel.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-high mb-4">
                    Key Technologies
                  </h3>
                  <ul className="flex flex-wrap gap-2" aria-label="Skills and technologies">
                    {SKILLS.map((skill) => (
                      <li key={skill}>
                        <div className="flex items-center rounded-md border border-muted/20 bg-surface/30 px-3 py-1.5 text-xs font-medium leading-5 text-high transition-colors hover:border-high hover:bg-surface/50">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-high lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {EXPERIENCES.map((exp) => (
                    <li key={exp.id} className="mb-12">
                      <ExperienceCard experience={exp} />
                    </li>
                  ))}
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center font-semibold leading-tight text-high group"
                    aria-label="View Full Résumé"
                    href="#"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-muted motion-reduce:transition-none">
                        View Full Résumé
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-high lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {PROJECTS.map((project) => (
                    <li key={project.id} className="mb-12">
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section
              id="contact"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Contact me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-high lg:sr-only">
                  Contact
                </h2>
              </div>
              <div className="mb-8">
                <p className="text-muted leading-relaxed">
                  Have a question or want to work together? Feel free to reach out via the form below, 
                  and I'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-xs text-muted sm:pb-0">
              <p>
                Coded with care. Built with <span className="text-high">React</span> and{' '}
                <span className="text-high">Tailwind CSS</span>.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
