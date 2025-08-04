export default function Contact() {
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
                className="text-white font-medium"
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
              Get in Touch
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to work together or just want to say hello.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Email</h3>
                  <a 
                    href="mailto:jonathanwise16@gmail.com" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    jonathanwise16@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/jonathanwise16/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    linkedin.com/in/jonathanwise16
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">GitHub</h3>
                  <a 
                    href="https://github.com/JWise16" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    github.com/JWise16
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-medium mb-3">What I'm Looking For</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Full-stack development opportunities</li>
                  <li>• Frontend engineering roles</li>
                  <li>• Open source collaborations</li>
                  <li>• Freelance projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 