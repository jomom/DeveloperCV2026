'use client';

import React, { useEffect, useState } from 'react';

const sections = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT'];

const NavLinks: React.FC = () => {
  const [activeSection, setActiveSection] = useState('ABOUT');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.toUpperCase());
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max">
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="group flex items-center py-3"
            >
              <span
                className={`mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-high ${
                  activeSection === item ? 'w-16 bg-high' : 'w-8 bg-muted'
                }`}
              />
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-high ${
                  activeSection === item ? 'text-high' : 'text-muted'
                }`}
              >
                {item}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
