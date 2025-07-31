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
              <h3 className="text-xl font-semibold mb-3">MusicDB</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A comprehensive platform for venue management, event tracking, and talent discovery 
                in the music industry. Helps independent music venues collaborate and thrive.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Supabase</span>
              </div>
              <a 
                href="https://github.com/JWise16/musicdb-mvp" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A cross-platform mobile application with modern UI/UX design, 
                real-time features, and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Firebase</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
              </div>
              <a 
                href="https://github.com/JWise16/realtalk-v2" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">AI DJ</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                An intelligent music mixing system that uses AI to create seamless transitions 
                and personalized playlists based on user preferences.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Audio Processing</span>
              </div>
              <a 
                href="https://github.com/JWise16/automix_demo" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Speech-to-Speech AI Assistant</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                An AI assistant that can engage in natural speech-to-speech conversations, 
                providing intelligent responses through voice interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Speech Recognition</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Text-to-Speech</span>
              </div>
              <a 
                href="https://github.com/JWise16/hello-allie" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 5 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">AI Teaching Assistant</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                An intelligent educational platform that provides personalized learning experiences, 
                automated grading, and adaptive content delivery for students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">OpenAI API</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Django</span>
              </div>
              <a 
                href="https://github.com/JWise16/Brain_Pitch_Demo" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                View Project →
              </a>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">LLM Benchmarking</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A comprehensive framework for evaluating and comparing large language models, 
                including performance metrics, accuracy testing, and efficiency analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Hugging Face</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">MLOps</span>
              </div>
              <a 
                href="https://github.com/JWise16/pico-llm" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 