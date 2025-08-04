'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const fullText = [
  "Hey there ! :)",
  "",
  "My name is Jonny Wise",
  "",
  "Welcome to my portfolio",
  "",
  "Feel free to learn more about me, check out some of my projects, or reach out"
];

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLineIndex >= fullText.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = fullText[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentLine[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + '\n');
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 250);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">JW</div>
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-2xl md:text-4xl font-mono leading-relaxed min-h-[300px] w-full max-w-4xl">
              <pre className="whitespace-pre-wrap text-left">
                {displayText}
                {isTyping && <span className="animate-pulse">|</span>}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
