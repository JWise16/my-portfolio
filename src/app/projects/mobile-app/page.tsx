import Link from 'next/link';

export default function MobileApp() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-semibold hover:text-white/80 transition-colors">JW</Link>
            <div className="flex space-x-8">
              <Link 
                href="/about" 
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link 
            href="/projects" 
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
          >
            ← Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Mobile App
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              A cross-platform mobile application with modern UI/UX design, 
              real-time features, and seamless user experience.
            </p>
            
            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/JWise16/realtalk-v2" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Expo Router & EAS</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Firebase</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Real-time Database</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  A modern cross-platform mobile application built with React Native and Expo, 
                  designed to provide a seamless user experience across iOS and Android devices.
                </p>
                <p>
                  The app features real-time communication capabilities, modern UI/UX design 
                  principles, and optimized performance for mobile environments.
                </p>
                <p>
                  Built using the latest mobile development technologies and best practices 
                  for cross-platform development.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Cross-platform compatibility (iOS & Android)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Real-time messaging and notifications
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Modern, intuitive user interface
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Offline functionality and data sync
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Push notifications and alerts
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Technical Implementation</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Frontend & Mobile</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• React Native for cross-platform development</li>
                    <li>• Expo Router for navigation management</li>
                    <li>• TypeScript for type safety</li>
                    <li>• Responsive design for all screen sizes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Backend & Services</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Firebase for backend services</li>
                    <li>• Real-time database for live updates</li>
                    <li>• Cloud functions for serverless operations</li>
                    <li>• Push notification services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Cross-Platform Strategy</h3>
                <p className="text-white/70">
                  Utilized React Native and Expo to ensure consistent functionality and 
                  appearance across both iOS and Android platforms while maintaining native performance.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Real-time Features</h3>
                <p className="text-white/70">
                  Implemented real-time communication features using Firebase&apos;s real-time 
                  database, ensuring instant updates and seamless user experience.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Performance Optimization</h3>
                <p className="text-white/70">
                  Focused on mobile-specific optimizations including efficient rendering, 
                  memory management, and battery usage optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 