import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Brain } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 rounded-full">
              <Brain size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ashish Pathak
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Computer Science Graduate | AI & ML Enthusiast
          </p>
          <p className="text-lg mb-12 text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Fresh Computer Science graduate with a passion for Data Science, Machine Learning, and Artificial Intelligence. 
            Experienced in developing innovative AI solutions and eager to contribute to cutting-edge technology projects 
            that shape the future.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/Ashupathak2001" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ashish-pathak-b9999b227/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="ashupathak22@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore My Work
          </button>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-white/70 hover:text-white transition-colors duration-300" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;