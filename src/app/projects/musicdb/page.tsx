export default function MusicDBProject() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-semibold hover:text-white/80 transition-colors">JW</a>
            <div className="flex space-x-8">
              <a 
                href="/about" 
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a 
                href="/projects" 
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                Projects
              </a>
              <a 
                href="/contact" 
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <a 
            href="/projects" 
            className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8"
          >
            ← Back to Projects
          </a>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              MusicDB
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              A comprehensive platform for venue management, event tracking, and talent discovery 
              in the music industry. Helps independent music venues collaborate and thrive.
            </p>
            
            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/JWise16/musicdb-mvp" 
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
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Express</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  MusicDB is a comprehensive platform designed to address the unique challenges 
                  faced by independent music venues and artists in the industry.
                </p>
                <p>
                  The platform provides tools for venue management, event tracking, and talent 
                  discovery, creating a collaborative ecosystem where venues can thrive together.
                </p>
                <p>
                  Built with modern web technologies, MusicDB offers a seamless user experience 
                  with real-time updates and intuitive navigation.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Venue management and profile creation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Event tracking and scheduling system
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Artist discovery and booking tools
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Real-time collaboration features
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Analytics and performance tracking
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
                  <h3 className="text-lg font-medium mb-4">Frontend</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• React with TypeScript for type safety</li>
                    <li>• Modern component architecture</li>
                    <li>• Responsive design with Tailwind CSS</li>
                    <li>• State management with React hooks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Backend</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Node.js with Express framework</li>
                    <li>• PostgreSQL database for data persistence</li>
                    <li>• RESTful API design</li>
                    <li>• Authentication and authorization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Complex Data Relationships</h3>
                <p className="text-white/70">
                  Managing relationships between venues, events, and artists required careful 
                  database design and efficient querying strategies.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Real-time Updates</h3>
                <p className="text-white/70">
                  Implementing real-time collaboration features while maintaining performance 
                  and data consistency across multiple users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 