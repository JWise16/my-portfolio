import Link from 'next/link';

export default function Projects() {
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
                className="text-white font-medium"
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Projects
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge 
              and learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative">
              <h3 className="text-xl font-semibold mb-3">MusicDB</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A comprehensive platform for venue management, event tracking, and talent discovery 
                in the music industry. Helps independent music venues collaborate and thrive.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
              </div>
              <Link 
                href="/projects/musicdb" 
                className="text-white/80 hover:text-white transition-colors text-sm absolute bottom-4 left-6 px-3 py-2"
              >
                View Project →
              </Link>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative">
              <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A cross-platform mobile application with modern UI/UX design, 
                real-time features, and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Expo Router & EAS</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">TypeScript</span>
              </div>
              <Link 
                href="/projects/mobile-app" 
                className="text-white/80 hover:text-white transition-colors text-sm absolute bottom-4 left-6 px-3 py-2"
              >
                View Project →
              </Link>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative">
              <h3 className="text-xl font-semibold mb-3">AI DJ</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                An intelligent music mixing system that uses AI to create seamless transitions 
                and personalized playlists based on user preferences.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">sklearn</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Audio Processing</span>
              </div>
              <Link 
                href="/projects/ai-dj" 
                className="text-white/80 hover:text-white transition-colors text-sm absolute bottom-4 left-6 px-3 py-2"
              >
                View Project →
              </Link>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative">
              <h3 className="text-xl font-semibold mb-3">Speech-to-Speech AI Assistant</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                An AI assistant that can engage in natural speech-to-speech conversations, 
                providing intelligent responses through voice interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">OpenAI Agent SDK</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
              </div>
              <Link 
                href="/projects/speech-assistant" 
                className="text-white/80 hover:text-white transition-colors text-sm absolute bottom-4 left-6 px-3 py-2"
              >
                View Project →
              </Link>
            </div>

            {/* Project Card 5 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative">
              <h3 className="text-xl font-semibold mb-3">AI Teaching Assistant</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                An intelligent educational platform that provides personalized learning experiences, 
                automated grading, and adaptive content delivery for students.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Node</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Express</span>
              </div>
              <Link 
                href="/projects/ai-teaching" 
                className="text-white/80 hover:text-white transition-colors text-sm absolute bottom-4 left-6 px-3 py-2"
              >
                View Project →
              </Link>
            </div>

            {/* Project Card 6 */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 relative">
              <h3 className="text-xl font-semibold mb-3">LLM Benchmarking</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                A comprehensive framework for evaluating and comparing large language models, 
                including performance metrics, accuracy testing, and efficiency analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Hugging Face</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Picobot</span>
              </div>
              <Link 
                href="/projects/llm-benchmarking" 
                className="text-white/80 hover:text-white transition-colors text-sm absolute bottom-4 left-6 px-3 py-2"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 