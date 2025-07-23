import React from 'react';
import { ExternalLink, Github, Brain, BarChart3, FileText, MessageSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ForgeMe - Interview Response Analysis',
      description: 'Built an AI-based simulator that converts speech to text and uses Cohere\'s LLM to analyze answer quality, extract key phrases, and assess topic relevance. Evaluated 500+ user responses with 85% accuracy and helped 50+ students improve fluency, structure, and content delivery.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'spaCy', 'Speech Recognition', 'NLP', 'OpenCV', 'Gemini LLM'],
      icon: MessageSquare,
      liveUrl: '#',
      githubUrl: 'https://github.com/Ashupathak2001/InterviewPro'
    },
    {
      title: 'TravelBuddy - AI Travel Planner',
      description: 'Built an intelligent travel planner that generates personalized itineraries using LLMs, combining 100+ user preferences and location contexts with real-time travel data. Enabled automated trip planning with dynamic scraping and retrieval workflows, improving user planning efficiency by 70%.',
      image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Streamlit', 'Web Scraping', 'Cohere LLM', 'FAISS'],
      icon: Brain,
      liveUrl: 'https://aitravelplanner-ftwge555sqjusqwfsydvmj.streamlit.app/',
      githubUrl: 'https://github.com/Ashupathak2001/AI_Travel_Planner'
    },
    {
      title: 'Document QA Bot',
      description: 'Built a RAG-based intelligent question answering system that extracts precise answers from user-uploaded PDF documents. Combines retrieval methods with modern language models for context-aware responses, reducing manual search time by 90%+ for legal, medical, and research document analysis.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FAISS', 'Cohere API', 'PyMuPDF', 'Streamlit', 'Docker'],
      icon: FileText,
      liveUrl: '#',
      githubUrl: 'https://github.com/Ashupathak2001/Rag_QA_bot'
    },
    {
      title: 'Mall Customer Segmentation Analysis',
      description: 'Conducted exploratory data analysis on 5,000+ customer records and applied K-Means clustering using features like spending score, income, and age to group customers into meaningful segments. Uncovered 3 distinct customer personas with 78% clustering accuracy for targeted marketing strategies.',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'scikit-learn', 'K-Means Clustering', 'Data Visualization', 'Pandas'],
      icon: BarChart3,
      liveUrl: '#',
      githubUrl: 'https://github.com/Ashupathak2001/Prasunet_Task/blob/main/Prasunet_Task01.ipynb'
    },
    {
      title: 'Sales Prediction - Retail Forecasting',
      description: 'Built a robust sales forecasting system using multiple regression models including Random Forest and Gradient Boosting, achieving over 98% R² accuracy. Applied extensive EDA, feature engineering, and hyperparameter tuning to predict future sales and optimize business advertising strategies.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800', // or replace with a relevant sales/chart image URL
      technologies: ['Python', 'pandas', 'scikit-learn', 'XGBoost', 'LightGBM', 'Regression', 'Data Visualization'],
      icon: BarChart3,
      liveUrl: '#', // If you deploy a demo, add link here
      githubUrl: 'https://github.com/Ashupathak2001/oibsip_5/blob/main/sales_prediction.ipynb'
    },
    {
      title: 'Student Placement - Data Analysis Project',
      description: 'Completed a comprehensive data analysis project focused on mastering pandas for data manipulation and visualization. Explored data cleaning, aggregation, filtering, and insightful visualizations to drive data-driven decisions with real-world datasets.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', // you can replace with a relevant data/analysis image
      technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Data Cleaning', 'Data Visualization'],
      icon: BarChart3,
      liveUrl: '#',
      githubUrl: 'https://github.com/Ashupathak2001/Data_analysis/blob/main/zerotopandas-course-project.ipynb'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of AI, machine learning, and data science projects that solve real-world problems and demonstrate technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <project.icon className="text-purple-600" size={20} />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-purple-500 hover:text-purple-600 transition-colors duration-300 font-semibold"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors duration-300 font-semibold"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Learning Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Key Technical Learnings</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">LLM Integration</h4>
              <p className="text-slate-600 text-sm">Prompt engineering, RAG pipelines, and agent workflows with Cohere LLM</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Data Analysis</h4>
              <p className="text-slate-600 text-sm">Advanced clustering techniques, data visualization, and statistical analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">NLP & Speech</h4>
              <p className="text-slate-600 text-sm">Speech-to-text pipelines, semantic analysis, and real-time response scoring</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-white" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">RAG Systems</h4>
              <p className="text-slate-600 text-sm">Document processing, vector databases, and retrieval-augmented generation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;