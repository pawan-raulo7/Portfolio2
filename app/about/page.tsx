'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const skills = [
  { name: 'Python', level: 92 },
  { name: 'Django', level: 90 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'FastAPI', level: 80 },
  { name: 'React', level: 70 },
  { name: 'Angular', level: 62 },
  { name: 'C++', level: 50 },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies, 
                data analysis, and artificial intelligence. Based in Hyderabad, India, I'm currently 
                contributing to the tech ecosystem through my internship at Bharat Economic Forum.
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/pawan-raulo-349526326" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <i className="ri-linkedin-fill text-gray-700 w-5 h-5 flex items-center justify-center"></i>
                </a>
                <a 
                  href="https://github.com/pawan-raulo7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <i className="ri-github-fill text-gray-700 w-5 h-5 flex items-center justify-center"></i>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/pawan1.jpg"
                alt="Pawan Raulo"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            Experience & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-trophy-line text-indigo-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hackathon Winner</h3>
              <p className="text-gray-600">Winner in competitive programming hackathon</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-building-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Internship</h3>
              <p className="text-gray-600">Database Developer Intern at Bharat Economic Forum</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-stock-line text-yellow-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stock Market</h3>
              <p className="text-gray-600">3+ years of experience in stock market analysis and trading</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-folder-line text-purple-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real Projects</h3>
              <p className="text-gray-600">10+ real-world projects across various domains</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-brain-line text-red-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600">Advanced knowledge in ML algorithms and AI development</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-map-pin-line text-blue-600 text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Based in Hyderabad, India - Open to remote opportunities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
