export default function Projects() {
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
                className="text-white font-medium"
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Projects
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              Here are some of the projects I've worked on. Each one represents a unique challenge 
              and learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A full-stack e-commerce solution with user authentication, payment processing, 
                and inventory management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MongoDB</span>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Task Management App</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A collaborative task management application with real-time updates, 
                team collaboration, and progress tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                View Project →
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A minimalist portfolio website built with modern web technologies, 
                featuring responsive design and smooth animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Tailwind CSS</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                View Project →
              </a>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Weather Dashboard</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A weather application that displays current conditions and forecasts 
                with interactive maps and detailed weather data.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Weather API</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Chart.js</span>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                View Project →
              </a>
            </div>

            {/* Project Card 5 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Blog Platform</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A content management system for blogs with markdown support, 
                SEO optimization, and analytics integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Django</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                View Project →
              </a>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A cross-platform mobile application for fitness tracking 
                with social features and personalized recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Redux</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Firebase</span>
              </div>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">
                View Project →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 