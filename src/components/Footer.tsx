import React from 'react';
import { Github, Linkedin, Mail, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-full">
                <Brain size={20} className="text-white" />
              </div>
              <div className="text-2xl font-bold">Ashish Pathak</div>
            </div>
            <p className="text-slate-400">Computer Science Graduate | AI & ML Enthusiast</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/Ashupathak2001" className="text-slate-400 hover:text-white transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ashish-pathak-b9999b227/" className="text-slate-400 hover:text-white transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="ashupathak22@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© {currentYear} Ashish Pathak. All rights reserved.</p>
          <div className="flex items-center mt-2 md:mt-0">
            <span>Built with love & passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;