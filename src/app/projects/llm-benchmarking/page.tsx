import Link from 'next/link';

export default function LLMBenchmarking() {
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
              LLM Benchmarking
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              A comprehensive framework for evaluating and comparing large language models, 
              including performance metrics, accuracy testing, and efficiency analysis.
            </p>
            
            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://github.com/JWise16/pico-llm" 
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
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Hugging Face</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Picobot</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Data Analysis</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  A sophisticated benchmarking framework designed to evaluate and compare 
                  large language models across multiple dimensions including performance, 
                  accuracy, and efficiency.
                </p>
                <p>
                  The system provides comprehensive metrics and analysis tools to help 
                  researchers and developers make informed decisions about model selection 
                  and deployment.
                </p>
                <p>
                  Built with modern machine learning tools and frameworks to ensure 
                  reliable and reproducible evaluation results.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Comprehensive performance metrics and analysis
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Accuracy testing across multiple datasets
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Efficiency analysis and resource utilization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Comparative model evaluation tools
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Automated benchmarking pipelines
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
                  <h3 className="text-lg font-medium mb-4">Core Framework</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Python-based evaluation engine</li>
                    <li>• Hugging Face Transformers integration</li>
                    <li>• Picobot for model management</li>
                    <li>• Modular architecture for extensibility</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Analysis & Metrics</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Performance benchmarking algorithms</li>
                    <li>• Statistical analysis and reporting</li>
                    <li>• Data visualization and insights</li>
                    <li>• Automated evaluation workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmarking Capabilities */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Benchmarking Capabilities</h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Performance Metrics</h3>
                <p className="text-white/70">
                  Comprehensive evaluation of model performance including inference speed, 
                  memory usage, throughput, and latency measurements across different 
                  hardware configurations.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Accuracy Assessment</h3>
                <p className="text-white/70">
                  Multi-dimensional accuracy testing using various datasets and evaluation 
                  metrics to assess model quality, consistency, and reliability.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Comparative Analysis</h3>
                <p className="text-white/70">
                  Side-by-side comparison tools that enable researchers to evaluate 
                  multiple models simultaneously and identify strengths and weaknesses.
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases & Applications */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Use Cases & Applications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Research & Development</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Model selection for research projects</li>
                  <li>• Performance optimization studies</li>
                  <li>• Comparative model analysis</li>
                  <li>• Reproducible evaluation workflows</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Production Deployment</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Model selection for production</li>
                  <li>• Performance monitoring and optimization</li>
                  <li>• Resource planning and cost analysis</li>
                  <li>• Quality assurance and testing</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Academic Research</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Reproducible benchmarking studies</li>
                  <li>• Model comparison publications</li>
                  <li>• Performance analysis research</li>
                  <li>• Standardized evaluation protocols</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-3">Industry Applications</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Enterprise model selection</li>
                  <li>• Cost-benefit analysis</li>
                  <li>• Performance optimization</li>
                  <li>• Quality control and monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 