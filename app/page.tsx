'use client';

import React, { useState, useEffect } from 'react';
import CursorSpotlight from '../components/CursorSpotlight';
import NavLinks from '../components/NavLinks';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import ThemeToggle from '../components/ThemeToggle';
import { EXPERIENCES, PROJECTS, SOCIALS, SKILLS } from '../constants';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  if (!mounted) return <div className="min-h-screen bg-[#222831]" />;

  return (
    <div className="relative min-h-screen bg-main text-high transition-colors duration-300">
      <CursorSpotlight />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="relative z-10">
              <h1 className="text-3xl font-black tracking-tight text-high sm:text-4xl md:text-5xl uppercase font-sans leading-none">
                <a href="/" className="hover:opacity-80 transition-opacity">Joel Momanyi Nyaosi</a>
              </h1>
              <h2 className="mt-4 text-lg font-medium tracking-tight text-muted sm:text-xl font-sans opacity-90">
                Senior Software Engineer
              </h2>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted font-serif">
                I build accessible, pixel-perfect digital experiences for the web with a focus on high-performance architecture and smooth user interfaces.
              </p>
              
              <NavLinks />
            </div>

            <ul className="ml-1 mt-8 flex items-center relative z-10" aria-label="Social media">
              {SOCIALS.map((social) => (
                <li key={social.name} className="mr-6 text-xs transition-transform hover:-translate-y-1">
                  <a
                    className="block hover:text-high text-muted transition-colors"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.name} (opens in a new tab)`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-5 h-5">{social.icon}</div>
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24 relative z-10">
            
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 lg:sr-only">
                  About
                </h2>
              </div>
              <div className="space-y-6 text-[15px] leading-relaxed text-muted font-serif">
                <p>
                  I'm a software engineer with a specialty in building high-performance web applications, focused on
                  creating intuitive user interfaces. I enjoy working at the intersection of design and engineering,
                  where great user experience meets robust, clean, and scalable code.
                </p>
                <p>
                  Currently, I'm a senior engineer at <span className="text-high font-medium">Quantum Dynamics</span>,
                  where I architect scalable microservices and frontend architectures. My role involves leading teams
                  through complex technical challenges and mentoring junior developers to foster a culture of excellence.
                </p>
                
                <div className="pt-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 mb-5">
                    Key Technologies
                  </h3>
                  <ul className="flex flex-wrap gap-2.5" aria-label="Skills and technologies">
                    {SKILLS.map((skill) => (
                      <li key={skill}>
                        <div className="smooth-pill hover:scale-105 transition-transform">
                          <span className="bg-surface/30 px-3 py-1">
                            {skill}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list space-y-16">
                  {EXPERIENCES.map((exp) => (
                    <li key={exp.id}>
                      <ExperienceCard experience={exp} />
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list space-y-16">
                  {PROJECTS.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              id="contact"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Contact me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-main/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-high/70 lg:sr-only">
                  Contact
                </h2>
              </div>
              <div className="mb-10">
                <p className="text-[15.5px] leading-relaxed text-muted font-serif">
                  Have a question or want to work together? Feel free to reach out via the form below.
                </p>
              </div>
              <ContactForm />
            </section>

            <footer className="max-w-md pb-16 text-[12px] text-muted/60 sm:pb-0 font-sans tracking-wide">
              <p>
                Coded with care by Joel. Built with <span className="text-high/80">React</span> and{' '}
                <span className="text-high/80">Tailwind CSS</span>. 
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
