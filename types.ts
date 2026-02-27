// Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  technologies: string[];
  stars?: number;
  installs?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}