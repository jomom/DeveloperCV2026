import React from 'react';
import { Experience } from '../types';

interface Props {
  experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="group relative grid pb-1 transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:scale-[1.01] will-change-transform">
      {/* Background overlay based on provided snippet - Enhanced with themed shadow */}
      <div 
        className="absolute z-0 hidden rounded-[.25rem] transition-all duration-300 lg:block 
          -left-[1.5rem] -right-[1.5rem] -top-[1rem] -bottom-[1rem]
          group-hover:bg-high/5 
          group-hover:backdrop-blur-[2px]
          group-hover:shadow-[0_10px_40px_-15px_var(--color-muted)]
          group-hover:ring-1 group-hover:ring-high/10" 
      />
      
      <header
        className="z-10 mb-2 mt-1 text-[11px] font-bold uppercase tracking-widest text-muted sm:col-span-2 transition-colors group-hover:text-high"
        aria-label={experience.period}
      >
        {experience.period}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold leading-tight text-high text-lg">
          <div>
            <a
              className="inline-flex items-baseline font-semibold leading-tight text-high hover:text-high focus-visible:text-high group/link text-base transition-colors"
              href={experience.companyUrl || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label={`${experience.role} at ${experience.company}`}
            >
              {/* This span ensures the link covers the whole card area */}
              <span className="absolute -left-[1.5rem] -right-[1.5rem] -top-[1rem] -bottom-[1rem] hidden rounded md:block" />
              <span>
                {experience.role} ·{' '}
                <span className="inline-block transition-colors group-hover:text-high">
                  {experience.company}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1.5 opacity-70"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </h3>
        
        <p className="mt-3 text-[14.5px] leading-relaxed text-muted font-serif transition-colors group-hover:text-high/90">
          {experience.description}
        </p>
        
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {experience.technologies.map((tech) => (
            <li key={tech}>
              <div className="smooth-pill group/pill transition-all duration-200">
                <span className="bg-surface/40 group-hover/pill:bg-surface/80 group-hover/pill:text-high">
                  {tech}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;