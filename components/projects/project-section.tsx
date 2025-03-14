import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Example project data structure
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
  githubUrl?: string;
  category: string; // Add category field
}

const projects: Project[] = [
  {
    id: "modern-portfolio",
    title: "Modern Portfolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    imageUrl: "/images/modern-portfolio.png", // Replace with your image path
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    projectUrl: "https://github.com/lvingsarcophagus/portfolio_Next_25", // Set project URL to GitHub repo
    githubUrl: "https://github.com/lvingsarcophagus/portfolio_Next_25",
    category: "Web Development",
  },
  // Your other projects array here
];

// Get unique categories from projects
const categories = ['All', ...new Set(projects.map(project => project.category))];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-8 md:text-3xl lg:text-4xl">
          My Projects
        </h2>
        
        {/* Responsive Project Type Selector */}
        <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
          <div className="inline-flex flex-nowrap gap-2 pb-2 px-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground font-medium' 
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="flex flex-col h-full">
                <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-lg">
                  <Image 
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
                    <Link 
                      href={project.projectUrl} 
                      className="w-full px-4 py-2 text-center rounded-md bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Link>
                    
                    {project.githubUrl && (
                      <Link 
                        href={project.githubUrl} 
                        className="w-full px-4 py-2 text-center rounded-md bg-secondary text-secondary-foreground text-sm hover:bg-secondary/90 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
