'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications using modern frameworks like React, Angular, Django, and FastAPI. From concept to deployment, I create scalable and maintainable solutions.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "API Development",
      "Database Design",
      "Performance Optimization",
      "Responsive Design"
    ],
    icon: "ri-code-s-slash-line",
    color: "indigo"
  },
  {
    title: "Data Analysis & Visualization",
    description: "Transform raw data into actionable insights with advanced analytics, interactive dashboards, and comprehensive reporting solutions.",
    features: [
      "Data Processing & Cleaning",
      "Statistical Analysis",
      "Interactive Dashboards",
      "Business Intelligence",
      "Predictive Analytics",
      "Custom Visualizations"
    ],
    icon: "ri-bar-chart-line",
    color: "green"
  },
  {
    title: "Stock Market Solutions",
    description: "Leverage my 3+ years of stock market experience to build trading tools, analysis platforms, and market prediction systems.",
    features: [
      "Trading Algorithms",
      "Market Analysis Tools",
      "Portfolio Management",
      "Risk Assessment",
      "Technical Indicators",
      "Real-time Data Integration"
    ],
    icon: "ri-stock-line",
    color: "yellow"
  },
  {
    title: "AI Development",
    description: "Harness the power of artificial intelligence and machine learning to create intelligent applications that drive business growth.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Chatbot Development",
      "Model Deployment"
    ],
    icon: "ri-robot-line",
    color: "purple"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to help businesses thrive in the modern world. 
              From web development to AI implementation, I provide end-to-end technology services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg p-8 hover:border-gray-200 transition-colors">
                <div className={`w-16 h-16 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <i className={`${service.icon} text-${service.color}-600 text-2xl w-8 h-8 flex items-center justify-center`}></i>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 text-sm mr-3 w-4 h-4 flex items-center justify-center"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              How I Work
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">Understanding your requirements and goals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Creating detailed project roadmap and timeline</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Building solutions with regular updates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-600 text-lg">
              Modern tools and frameworks I use to build robust solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Python", level: "92%" },
              { name: "Django", level: "90%" },
              { name: "PostgreSQL", level: "80%" },
              { name: "FastAPI", level: "80%" },
              { name: "React", level: "70%" },
              { name: "Angular", level: "62%" },
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 text-center hover:border-gray-200 transition-colors">
                <div className="font-semibold text-gray-900 mb-2">{tech.name}</div>
                <div className="text-sm text-indigo-600 font-medium">{tech.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </Link>
            <Link 
              href="/portfolio"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}