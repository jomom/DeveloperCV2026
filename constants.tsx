
import React from 'react';
import { Experience, Project, SocialLink } from './types';

// Palette updated to user request
export const COLORS = {
  background: '#222831',
  secondary: '#393E46',
  muted: '#948979',
  light: '#DFD0B8',
};

export const SKILLS = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Go',
  'Python',
  'PostgreSQL',
  'GraphQL',
  'Docker',
  'AWS',
  'Tailwind CSS'
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    period: '2023 — PRESENT',
    role: 'Senior Full Stack Engineer',
    company: 'Quantum Dynamics',
    companyUrl: '#',
    description: 'Lead developer for high-performance dashboarding systems. Architected a real-time data visualization engine that reduced latency by 45%. Collaborated with cross-functional teams to implement accessible and scalable components using React and Node.js.',
    technologies: ['React', 'TypeScript', 'Node.js', 'D3.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-2',
    period: '2021 — 2023',
    role: 'Software Engineer II',
    company: 'Stellar Systems',
    companyUrl: '#',
    description: 'Developed and maintained core API services serving 500k+ monthly active users. Integrated machine learning models for predictive analytics. Optimized database queries and improved CI/CD pipelines.',
    technologies: ['Next.js', 'Go', 'Redis', 'AWS', 'Terraform', 'GraphQL'],
  },
  {
    id: 'exp-3',
    period: '2019 — 2021',
    role: 'Frontend Developer',
    company: 'Creative Labs',
    companyUrl: '#',
    description: 'Crafted immersive user interfaces for luxury brand campaigns. Focused on smooth animations, responsive layouts, and cross-browser compatibility. Implemented a custom CMS for high-traffic media sites.',
    technologies: ['JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vue.js', 'Headless CMS'],
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-lms',
    title: 'EduSphere Premium LMS',
    description: 'A comprehensive Learning Management System landing page featuring a course catalog, instructor profiles, and integrated booking systems. Built for conversion with a dark-mode first design.',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    projectUrl: '#',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    stars: 240,
  },
  {
    id: 'proj-1',
    title: 'Aura Music Visualizer',
    description: 'A web-based interactive music visualizer using Web Audio API and Canvas. Supports real-time frequency analysis and multiple particle-based themes.',
    imageUrl: 'https://picsum.photos/seed/aura/400/250',
    projectUrl: '#',
    technologies: ['React', 'Web Audio API', 'Canvas', 'GLSL'],
    stars: 120,
  },
  {
    id: 'proj-2',
    title: 'Nebula Task Manager',
    description: 'A minimalist task management tool focused on focus and cognitive flow. Features drag-and-drop organization, Pomodoro timer integration, and cloud sync.',
    imageUrl: 'https://picsum.photos/seed/nebula/400/250',
    projectUrl: '#',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Radix UI'],
    installs: '50k+',
  },
  {
    id: 'proj-3',
    title: 'Sentinel Security Suite',
    description: 'Open-source dashboard for monitoring network traffic and potential vulnerabilities. Provides real-time alerts and historical data analysis.',
    imageUrl: 'https://picsum.photos/seed/sentinel/400/250',
    projectUrl: '#',
    technologies: ['Python', 'React', 'FastAPI', 'ElasticSearch'],
    stars: 890,
  }
];

export const SOCIALS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
    )
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    )
  }
];
