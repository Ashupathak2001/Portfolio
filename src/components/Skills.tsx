import React from 'react';
import { Brain, Database, Code, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow & Keras', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Deep Learning', level: 82 }
      ]
    },
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'Java', level: 65 },
        { name: 'C++', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Pandas & NumPy', level: 88 },
        { name: 'Data Visualization', level: 85 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      icon: Cloud,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Jupyter Notebooks', level: 90 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'Docker', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My technical expertise spans across various domains of AI, machine learning, and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-cyan-500 p-3 rounded-lg mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Natural Language Processing',
              'Computer Vision',
              'Time Series Analysis',
              'Neural Networks',
              'Data Scraping',
              'Statistical Modeling',
              'Feature Engineering',
              'Model Deployment',
              'A/B Testing',
              'Gen AI',
              'Large Language Models'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-slate-700 rounded-full font-medium hover:shadow-md transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
