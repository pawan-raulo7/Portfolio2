'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StockChart from '@/components/StockChart';
import { link } from 'fs';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with Django backend, React frontend, and PostgreSQL database. Features include user authentication, payment processing, and inventory management.",
    technologies: [],
    image: "/images/zero.png",
    link: "https://github.com/pawan-raulo7/Ecommerce.git"
  },
  {
    title: "Chatbot",
    category: "Web Development",
    description: "AI-powered chatbot with Django backend, React frontend, and PostgreSQL database. Features include real-time messaging, NLP-based intent detection, and conversation history management.",
    technologies: [],
    image: "/images/gemini.png",
    link: "https://github.com/pawan-raulo7/Gemini.git"
  },
    {
    title: "Recycled Products",
    category: "Web Development",
    description: "Zero-waste e-commerce platform with Django backend, React frontend, and PostgreSQL database. Features include user authentication, secure payment processing, eco-friendly product catalog, and inventory management.",
    technologies: [],
    image: "/images/recycle.png",
    link: "https://github.com/pawan-raulo7/Eco-Tech-Store.git "
  },
];

const categories = ["All", "Web Development", "Data Analysis", "AI Development", "Stock Market"];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in web development, data analysis, 
              AI development, and stock market solutions. Each project represents a unique challenge 
              and innovative solution.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Featured Project
            </h2>
            <p className="text-gray-600 text-lg">
              My latest achievement in stock market analysis
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full mb-4">
                  Stock Market Analysis
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advanced Trading Algorithm
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Developed a sophisticated trading algorithm using machine learning that analyzes 
                  market patterns, sentiment data, and technical indicators to make informed trading 
                  decisions. The system has shown consistent performance with risk management features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Python", "TensorFlow", "Pandas", "Alpha Vantage", "PostgreSQL"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">
                  Algorithm Performance (Last 12 Months)
                </h4>
                <StockChart />
                <div className="flex justify-between text-sm text-gray-600 mt-4">
                  <span>ROI: +24.5%</span>
                  <span>Sharpe Ratio: 1.8</span>
                  <span>Max Drawdown: -8.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Latest Projects 
            </h2>
            <p className="text-gray-600 text-lg">
              Explore my diverse portfolio of projects across different domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full mb-3">
                    {project.category}
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer text-center block"
>
  Repository
</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills in Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Skills in Action
            </h2>
            <p className="text-gray-600 text-lg">
              How my technical expertise translates into real-world solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-s-slash-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
              <p className="text-gray-600 text-sm">Django + React applications with 99.9% uptime</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Database Optimization</h3>
              <p className="text-gray-600 text-sm">PostgreSQL queries optimized for 10x performance</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-stock-line text-yellow-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trading Systems</h3>
              <p className="text-gray-600 text-sm">Algorithms processing 1M+ data points daily</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ML Models</h3>
              <p className="text-gray-600 text-sm">AI solutions with 95%+ accuracy rates</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}