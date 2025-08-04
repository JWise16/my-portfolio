import Link from 'next/link';

export default function WhatsAppLanguageTutor() {
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
              WhatsApp Language Tutor
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              An AI-powered language learning assistant that integrates with WhatsApp to provide 
              personalized language tutoring through conversational interactions. Users can practice 
              languages naturally through text conversations with an intelligent tutor.
            </p>
            


            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">WhatsApp API</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">OpenAI GPT</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Flask</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  The WhatsApp Language Tutor is an innovative language learning solution that 
                  leverages the ubiquity of WhatsApp to provide accessible language education 
                  to users worldwide.
                </p>
                <p>
                  By integrating with WhatsApp&apos;s Business API, the system creates a seamless 
                  learning experience where users can practice languages through natural 
                  conversations with an AI tutor.
                </p>
                <p>
                  The AI tutor adapts to each user&apos;s proficiency level and learning goals, 
                  providing personalized feedback, grammar corrections, and cultural context 
                  to enhance the learning experience.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Natural conversation-based learning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Real-time grammar and pronunciation feedback
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Adaptive difficulty based on user proficiency
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Cultural context and idiomatic expressions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Progress tracking and learning analytics
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
                  <h3 className="text-lg font-medium mb-4">Backend Architecture</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Flask web framework for API endpoints</li>
                    <li>• WhatsApp Business API integration</li>
                    <li>• OpenAI GPT for natural language processing</li>
                    <li>• PostgreSQL for user data and progress tracking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">AI & Learning Features</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Context-aware conversation management</li>
                    <li>• Grammar correction and suggestions</li>
                    <li>• Adaptive learning algorithms</li>
                    <li>• Multi-language support and translation</li>
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
                <h3 className="text-lg font-medium mb-3">WhatsApp API Integration</h3>
                <p className="text-white/70">
                  Integrating with WhatsApp&apos;s Business API required careful handling of webhook 
                  events, message formatting, and rate limiting to ensure reliable message delivery 
                  and response handling.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Context Management</h3>
                <p className="text-white/70">
                  Maintaining conversation context across multiple users and sessions while 
                  providing personalized learning experiences required sophisticated state 
                  management and user session handling.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Language Learning Accuracy</h3>
                <p className="text-white/70">
                  Ensuring accurate grammar corrections, appropriate feedback, and culturally 
                  relevant responses required fine-tuning the AI model and implementing 
                  specialized language learning prompts and validation.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Impact */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Learning Impact</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Accessibility</h3>
                  <p className="text-white/70">
                    By leveraging WhatsApp&apos;s widespread adoption, the language tutor makes 
                    quality language education accessible to users in regions with limited 
                    educational resources.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Engagement</h3>
                  <p className="text-white/70">
                    The conversational approach increases user engagement and retention, 
                    making language learning feel natural and enjoyable rather than 
                    like traditional classroom exercises.
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