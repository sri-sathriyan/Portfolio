/// <reference types="@react-three/fiber" />
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { IconVortex } from '../3d/IconVortex';
import { Skill } from '../../types';
import { 
    FaNodeJs, FaPython, FaGitAlt, FaLinux, FaDatabase, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaCloud
} from 'react-icons/fa';
import { 
    SiJavascript, SiUipath, SiKubernetes, SiJenkins, SiAnsible, SiTerraform, SiPrometheus, SiGrafana, SiHelm
} from 'react-icons/si';
import { Fade } from 'react-awesome-reveal';

const skills: Skill[] = [
  // Cloud Platforms
  { name: 'AWS', icon: FaAws, color: '#FF9900', tooltip: 'Cloud Platform' },
  { name: 'Azure', icon: FaCloud, color: '#0078D4', tooltip: 'Cloud Platform' },
  
  // Containerization & Orchestration
  { name: 'Docker', icon: FaDocker, color: '#2496ED', tooltip: 'Containerization' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', tooltip: 'Orchestration' },
  { name: 'Helm', icon: SiHelm, color: '#277a9f', tooltip: 'Kubernetes Package Manager' },
  
  // IaC & Automation
  { name: 'Terraform', icon: SiTerraform, color: '#623CE4', tooltip: 'Infrastructure as Code' },
  { name: 'Ansible', icon: SiAnsible, color: '#EE0000', tooltip: 'Configuration Management' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939', tooltip: 'CI/CD Automation' },
  
  // Monitoring
  { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', tooltip: 'Monitoring System' },
  { name: 'Grafana', icon: SiGrafana, color: '#F46800', tooltip: 'Visualization Platform' },

  // Programming & Scripting
  { name: 'Python', icon: FaPython, color: '#3776AB', tooltip: 'Programming Language' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', tooltip: 'Programming Language' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', tooltip: 'Backend Runtime' },

  // Web Fundamentals
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', tooltip: 'Web Markup Language' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', tooltip: 'Web Styling' },

  // Databases
  { name: 'SQL', icon: FaDatabase, color: '#4479A1', tooltip: 'Database Language' },

  // Other Tools
  { name: 'Git', icon: FaGitAlt, color: '#F05032', tooltip: 'Version Control' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624', tooltip: 'Operating System' },
  { name: 'UiPath', icon: SiUipath, color: '#0059B3', tooltip: 'RPA Tool' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="group relative flex flex-col items-center justify-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-primary-dark transition-all duration-300 transform hover:-translate-y-1">
        <skill.icon className="w-12 h-12 mb-2 transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }} />
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <div className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 bg-dark text-white text-xs rounded-md whitespace-nowrap">
            {skill.tooltip}
        </div>
    </div>
);


export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark/90 relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
                <IconVortex />
            </Suspense>
        </Canvas>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Fade direction="up" triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">Technical <span className="text-primary-dark">Skills</span></h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A versatile toolkit for building modern web applications and integrating 3D experiences.
          </p>
        </Fade>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <Fade direction="up" cascade damping={0.05} triggerOnce>
                {skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </Fade>
        </div>
      </div>
    </section>
  );
};
