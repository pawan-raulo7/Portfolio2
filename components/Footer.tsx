'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center mr-3">
                <span className="font-bold">P</span>
              </div>
              <span className="font-semibold text-gray-900">Pawan Raulo</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative solutions and building meaningful projects.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/pawan-raulo-349526326" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                <i className="ri-linkedin-fill w-4 h-4 flex items-center justify-center mr-2"></i>
                LinkedIn
              </a>
              <a 
                href="https://github.com/pawan-raulo7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                <i className="ri-github-fill w-4 h-4 flex items-center justify-center mr-2"></i>
                GitHub
              </a>
              <a 
                href="mailto:pawanraulo@gmail.com"
                className="flex items-center text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                <i className="ri-mail-fill w-4 h-4 flex items-center justify-center mr-2"></i>
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Pawan Raulo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}