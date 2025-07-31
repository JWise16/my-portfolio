export default function About() {
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
                className="text-white font-medium"
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
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              About Me
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Hi, I'm Jonny Wise. I'm passionate about creating meaningful digital experiences 
                and solving complex problems through technology.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Background</h2>
                  <p className="text-white/70 leading-relaxed">
                    I have a strong foundation in software development and design, 
                    with experience across various technologies and industries. 
                    My approach combines technical expertise with creative problem-solving.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Interests</h2>
                  <p className="text-white/70 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or sharing knowledge with the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 