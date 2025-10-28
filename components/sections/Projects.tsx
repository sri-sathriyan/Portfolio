import React, { useState } from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const projects: Project[] = [
  {
    title: 'Multi-Tier AWS Infrastructure',
    description: 'Deploy a complete AWS infrastructure (VPC, EC2, RDS, ALB) using Infrastructure as Code (IaC) with Terraform and Ansible.',
    longDescription: 'Automated the provisioning of a multi-tier AWS infrastructure using Terraform for creating resources like a custom VPC, subnets, security groups, EC2 instances behind an Application Load Balancer, and an RDS database. Ansible was then used for configuration management to install Nginx on the EC2 instances and deploy a sample web application. The process dynamically integrates Terraform outputs into the Ansible inventory, achieving a fully reproducible, code-driven deployment.',
    tags: ['Terraform', 'Ansible', 'AWS', 'IaC', 'VPC', 'EC2', 'RDS'],
    imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Cloud-Native CI/CD Pipeline',
    description: 'A complete CI/CD pipeline that automates container deployment to a Kubernetes cluster using Jenkins, Docker, and Kubernetes.',
    longDescription: 'Implemented an end-to-end CI/CD pipeline using Jenkins and Kubernetes. The workflow starts when source code is pushed to GitHub, triggering a Jenkins pipeline. Jenkins builds a Docker image, pushes it to a container registry (like DockerHub or ECR), and then deploys the updated image to a Kubernetes cluster using Helm for packaging. This setup utilizes a Canary or Blue-Green deployment strategy for zero downtime, reducing overall deployment time by 70%.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'CI/CD', 'GitHub'],
    imageUrl: 'https://blog.clearscale.com/wp-content/uploads/2022/09/iStock-1423173157.jpg',
    repoUrl: 'https://github.com',
  },
  {
    title: 'GitOps Workflow with ArgoCD',
    description: 'Implement a GitOps workflow to automate Kubernetes deployments using ArgoCD and GitHub repositories.',
    longDescription: 'Developed a GitOps-based deployment workflow using ArgoCD. When developers commit application code, GitHub Actions automatically builds a Docker image and pushes it to a registry. ArgoCD continuously monitors a dedicated GitOps repository containing Kubernetes manifests. When a change is detected in the manifests, ArgoCD automatically syncs the cluster state to match the repository, ensuring automated and version-controlled Kubernetes releases.',
    tags: ['ArgoCD', 'GitOps', 'Kubernetes', 'GitHub Actions', 'Docker'],
    imageUrl: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1673344328408/7ec955c6-736c-43a1-9b6b-f717a9ff32a5.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Final Year Project – 3D Avatar with Lip Sync',
    description: 'A full-stack application featuring a ReadyPlayerMe 3D avatar with real-time lip-syncing via Microsoft Vise and an OpenAI assistant.',
    longDescription: 'Developed a 3D character model using ReadyPlayerMe and integrated it with Microsoft Vise for real-time lip-syncing. Utilized Mixamo for realistic movement and expressions. Built a full-stack application with React.js (frontend) and Node.js (backend). Features include dynamic avatar rendering, real-time interactions, and an OpenAI-powered assistant for hands-free navigation.',
    tags: ['React.js', 'Node.js', 'ReadyPlayerMe', 'Mixamo', 'OpenAI', '3D Avatar'],
    imageUrl: 'https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/3X/4/7/476b4d213bc44e5d99ed9b8fb318090b778ea2c9_2_775x436.jpeg',
    videoPreviewUrl: 'https://drive.google.com/file/d/1fFsUd_S0IKY9bc1iDN_b8kgAimaOsg4R/preview',
    repoUrl: 'https://github.com',
  },
  {
    title: 'Third-Year Project – Interactive 3D Avatar',
    description: 'A web application with a dynamic 3D avatar from ReadyPlayerMe, featuring interactive, action-based responses.',
    longDescription: 'Created a 3D avatar model with ReadyPlayerMe and integrated it into a web application for dynamic interactions. Animated character actions using Mixamo for a lifelike experience. Built a full-stack system with React.js (frontend) and Node.js (backend). Features include real-time avatar control, action-based responses, and environmental interactions.',
    tags: ['React.js', 'Node.js', 'ReadyPlayerMe', 'Mixamo', 'Interactive 3D'],
    imageUrl: 'https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2021/02/ready-player-me-avatar-customization.jpg',
    repoUrl: 'https://github.com',
  },
];

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div 
        className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-800/60 border border-gray-700 hover:border-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(129,140,248,0.3)] cursor-pointer"
        onClick={onClick}
    >
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-50 transition-opacity duration-300" />
        <div className="p-4">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-dark transition-colors duration-300">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 text-primary-dark text-xs font-semibold rounded-full group-hover:bg-gray-600 transition-colors duration-300">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade direction="up" triggerOnce>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">My <span className="text-primary-dark">Projects</span></h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                A collection of my work in full-stack development and 3D integration.
            </p>
        </Fade>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} onClick={() => handleOpenModal(project)} />
                ))}
            </Fade>
        </div>

        {selectedProject && (
            <Modal isOpen={!!selectedProject} onClose={handleCloseModal} title={selectedProject.title}>
                {selectedProject.videoPreviewUrl ? (
                    <div className="aspect-video w-full mb-4">
                        <iframe
                            src={selectedProject.videoPreviewUrl}
                            className="w-full h-full rounded-lg border-0"
                            allow="autoplay"
                            allowFullScreen
                            title="Project Video Preview"
                        ></iframe>
                    </div>
                ) : (
                    <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                )}
                <div className="flex items-center space-x-4 mb-4">
                    <h4 className="text-2xl font-bold text-white">{selectedProject.title}</h4>
                    {selectedProject.ciCdStatusUrl && <img src={selectedProject.ciCdStatusUrl} alt="CI/CD Status" />}
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                 <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-700 text-primary-dark text-sm font-semibold rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <Button variant="primary" onClick={() => window.open(selectedProject.repoUrl, '_blank')}>
                        <FaGithub className="mr-2" /> View Code
                    </Button>
                    {selectedProject.liveUrl && (
                        <Button variant="outline" onClick={() => window.open(selectedProject.liveUrl, '_blank')}>
                            <FaExternalLinkAlt className="mr-2" /> Live Demo
                        </Button>
                    )}
                </div>
            </Modal>
        )}
      </div>
    </section>
  );
};