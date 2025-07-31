import React from 'react';
import { GraduationCap, Award, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Academic Projects', value: '10+' },
    { icon: Code, label: 'Programming Languages', value: '3+' },
    { icon: Award, label: 'Certifications', value: '5+' },
    { icon: Lightbulb, label: 'AI/ML Models Built', value: '5+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science graduate ready to make an impact in the world of AI and Data Science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800">My Journey</h3>
            <p className="text-slate-600 leading-relaxed">
              As a recent Computer Science graduate, I've developed a deep fascination with the transformative power 
              of Artificial Intelligence and Machine Learning. Throughout my academic journey, I've immersed myself 
              in data science projects, building predictive models, and exploring the latest AI technologies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My expertise spans across Python programming, machine learning algorithms, deep learning frameworks, 
              and data visualization. I'm particularly interested in natural language processing, computer vision, 
              and the ethical implications of AI in society. I'm eager to apply my knowledge to real-world challenges 
              and contribute to innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://drive.google.com/file/d/1VMB1BcWghfC0DbwVzhhzoQGEmc15pug-/view?usp=sharing"  
                download
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300"
              >
                Download Resume
              </a>
              <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-300">
                Let's Connect
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Machine Learning & Deep Learning (TensorFlow, PyTorch)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Data Science & Analytics (Pandas, NumPy, Scikit-learn)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Programming (Python, Java, C++)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Data Visualization (Matplotlib, Seaborn, Plotly)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Database Management (SQL, MongoDB)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
