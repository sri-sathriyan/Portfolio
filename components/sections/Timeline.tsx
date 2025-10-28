import React from 'react';
import { TimelineEvent } from '../../types';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const timelineEvents: TimelineEvent[] = [
  {
    date: 'JUNE 2024',
    title: 'Bachelor of Technology in Information Technology',
    subtitle: 'CGPA: 7.16/10',
    description: 'Relevant Coursework: Operating Systems, AI & Machine Learning, Cloud Computing, DBMS, Software Engineering, and Web Technologies.',
    icon: FaGraduationCap,
  },
  {
    date: '2019',
    title: 'MAM Matric Higher Secondary School, Salem, TN',
    subtitle: 'Higher Secondary Certificate (HSC)',
    description: 'Completed with a percentage of 52%.',
    icon: FaSchool,
  },
  {
    date: '2017',
    title: 'G.V Higher Secondary School, Salem, TN',
    subtitle: 'Secondary School Certificate (SSLC)',
    description: 'Completed with a percentage of 74%.',
    icon: FaSchool,
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Slide direction="up" triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">My <span className="text-primary-dark">Journey</span></h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A timeline of my educational background and key milestones.
          </p>
        </Slide>

        <div className="relative max-w-5xl mx-auto mt-12">
          {/* The vertical timeline bar */}
          <div 
            className="absolute left-5 w-0.5 h-full bg-primary-dark/30 transform md:left-1/2 md:-translate-x-1/2" 
            aria-hidden="true"
          ></div>

          {timelineEvents.map((event, index) => {
            const isRightSide = index % 2 !== 0;

            return (
              <div key={index} className="mb-12 relative">
                {/* The icon on the timeline bar */}
                <div className="absolute left-5 top-1 w-10 h-10 bg-primary-dark rounded-full z-10 flex items-center justify-center transform -translate-x-1/2 md:left-1/2">
                  <event.icon className="text-white w-5 h-5" />
                </div>
                
                {/* The content card */}
                <div 
                  className={`
                    w-full pl-16 
                    md:w-1/2 
                    ${isRightSide ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 text-left md:text-right'}
                  `}
                >
                  <Slide direction={isRightSide ? 'left' : 'right'} triggerOnce>
                    <div className="p-4 bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
                      <p className={`text-sm text-primary-dark mb-1`}>{event.date}</p>
                      <h3 className={`text-lg font-bold text-white mb-1`}>{event.title}</h3>
                      <p className={`text-sm font-semibold text-gray-400 mb-2`}>{event.subtitle}</p>
                      <p className={`text-sm text-gray-300`}>{event.description}</p>
                    </div>
                  </Slide>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};