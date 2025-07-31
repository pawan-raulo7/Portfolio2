
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SkillChart from '@/components/SkillChart';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20with%20clean%20desk%20setup%2C%20laptop%2C%20notebook%2C%20and%20geometric%20patterns%20in%20soft%20neutral%20colors%2C%20professional%20developer%20environment%20with%20subtle%20tech%20elements%2C%20clean%20white%20background%20with%20gentle%20shadows&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Pawan Raulo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting innovative digital solutions with expertise in web development, 
              data analysis, and artificial intelligence. Currently interning at Bharat Economic Forum.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/portfolio"
                className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Real Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900 mb-1">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900 mb-1">Winner</div>
                <div className="text-sm text-gray-600">Hackathon Winner</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Specialized in modern technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Backend Development</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Python</span>
                  <span className="text-indigo-600">92%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Django</span>
                  <span className="text-indigo-600">90%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>FastAPI</span>
                  <span className="text-indigo-600">80%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Frontend Development</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>React</span>
                  <span className="text-indigo-600">70%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Angular</span>
                  <span className="text-indigo-600">62%</span>
                </div>
                <div className="flex justify-between text-sm">
                  
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Database & AI</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>PostgreSQL</span>
                  <span className="text-indigo-600">80%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Machine Learning</span>
                  <span className="text-indigo-600">75%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Donut Chart */}
          <div className="bg-white p-8 rounded-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">
              Technical Skills Overview
            </h3>
            <SkillChart />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive digital solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-s-slash-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Full-stack web applications with modern frameworks</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-bar-chart-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Analysis</h3>
              <p className="text-gray-600 text-sm">Advanced data visualization and analytics solutions</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-stock-line text-yellow-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stock Market</h3>
              <p className="text-gray-600 text-sm">Trading strategies and market analysis tools</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-robot-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Development</h3>
              <p className="text-gray-600 text-sm">Machine learning and AI-powered applications</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}