import Link from 'next/link';

export default function About() {
  const timelineEvents = [
    {
      year: "2020",
      title: "High School Graduation",
      description: "Graduated high school during COVID-19. Decided to put all that time into learning computer science.",
      category: "Education"
    },
    {
      year: "2020-2021",
      title: "Gap Year - AI Development",
      description: "Worked virtually for a Filipino technology company in their AI department. Created a series of serverless programs which automated the process of training our NLP and CV models.",
      category: "Work Experience"
    },
    {
      year: "2021-2025",
      title: "Claremont McKenna College",
      description: "Although I love technology and wanted to pursue a career in software, I really valued the opportunity to learn and explore a lot of things outside of just straight tech.",
      category: "Education"
    },
    {
      year: "2022",
      title: "Personal Software Projects",
      description: "My sophomore year, I started working on creating my own software projects.",
      category: "Personal Development"
    },
    {
      year: "2023",
      title: "Volunteer Work in Indonesia",
      description: "Summer between academic years - volunteered in Indonesia (this might actually be the year before).",
      category: "Volunteer"
    },
    {
      year: "2023-2024",
      title: "Off-Campus Programs",
      description: "Junior year - I did two off-campus programs: Silicon Valley program &amp; a semester in computer science in Budapest.",
      category: "Education"
    },
    {
      year: "2024",
      title: "Goldman Sachs Internship",
      description: "Summer internship at Goldman Sachs - developed skills in full stack development.",
      category: "Work Experience"
    },
    {
      year: "2024-2025",
      title: "AI in Classrooms Project",
      description: "Senior year - worked on a project to bring AI into the classrooms.",
      category: "Research"
    },
    {
      year: "2024-2025",
      title: "Mobile App Development",
      description: "Started working on mobile app development as well.",
      category: "Personal Development"
    },
    {
      year: "2025",
      title: "Graduation &amp; Freelance",
      description: "Graduated - working on freelance portfolios.",
      category: "Career"
    }
  ];

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
                className="text-white font-medium"
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              About Me
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-16 max-w-3xl">
              Hi, I&apos;m Jonny Wise. I&apos;m passionate about creating meaningful digital experiences 
              and solving complex problems through technology. Here&apos;s my journey so far:
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Timeline Events */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black shadow-lg"></div>
                  
                  {/* Event Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                          {event.year}
                        </span>
                        <span className="text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {event.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Spacer */}
          <div className="mt-16 text-center">
            <p className="text-white/60 text-lg">
              The journey continues...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 