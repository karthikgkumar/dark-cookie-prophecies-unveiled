
import { useState, useEffect } from 'react';
import { Skull, Moon, Flame } from 'lucide-react';
import { darkFortunes } from '../data/fortunes';

interface HomePageProps {
  onCrackCookie: (fortune: string) => void;
  onNavigate: (view: 'home' | 'fortune' | 'saved' | 'about') => void;
}

const HomePage = ({ onCrackCookie, onNavigate }: HomePageProps) => {
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(flickerInterval);
  }, []);

  const handleCookieClick = () => {
    const randomFortune = darkFortunes[Math.floor(Math.random() * darkFortunes.length)];
    onCrackCookie(randomFortune);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-pulse">
          <Skull className="w-8 h-8 text-red-800 opacity-30" />
        </div>
        <div className="absolute bottom-32 right-16 animate-bounce">
          <Moon className="w-6 h-6 text-purple-400 opacity-40" />
        </div>
        <div className={`absolute top-40 right-20 transition-opacity duration-200 ${isFlickering ? 'opacity-20' : 'opacity-60'}`}>
          <Flame className="w-5 h-5 text-orange-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-8 right-8 flex gap-6 text-sm">
        <button 
          onClick={() => onNavigate('saved')} 
          className="text-gray-400 hover:text-red-400 transition-colors duration-300"
        >
          Saved Misfortunes
        </button>
        <button 
          onClick={() => onNavigate('about')} 
          className="text-gray-400 hover:text-red-400 transition-colors duration-300"
        >
          About
        </button>
      </nav>

      {/* Main content */}
      <div className="text-center z-10 max-w-2xl">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-purple-400 to-gray-300 bg-clip-text text-transparent">
          The Dark Cookie
        </h1>
        <p className="text-xl text-gray-300 mb-12 font-serif italic">
          One click away from your mildly disturbing future...
        </p>

        {/* Cookie */}
        <div className="relative mb-12">
          <button
            onClick={handleCookieClick}
            className="group relative transform transition-all duration-300 hover:scale-110 hover:rotate-3"
          >
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-600 to-amber-800 rounded-full shadow-2xl relative overflow-hidden border-4 border-amber-700">
              {/* Cookie texture */}
              <div className="absolute inset-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full">
                <div className="absolute top-6 left-8 w-3 h-3 bg-amber-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-8 right-6 w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
                <div className="absolute top-12 right-12 w-4 h-4 bg-amber-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-12 left-10 w-2 h-2 bg-amber-400 rounded-full opacity-50"></div>
              </div>
              
              {/* Crack effect on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/4 w-px h-16 bg-gray-700 rotate-45 transform -translate-y-8"></div>
                <div className="absolute top-1/2 right-1/3 w-px h-12 bg-gray-700 -rotate-12 transform -translate-y-6"></div>
              </div>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
          </button>
        </div>

        <p className="text-lg text-red-300 font-serif mb-8">
          Click the cookie to reveal your doom...
        </p>

        {/* Atmospheric text */}
        <div className="text-sm text-gray-500 max-w-md mx-auto">
          <p className="mb-2">⚠️ Warning: Fortunes may cause existential dread</p>
          <p>🖤 Side effects include dark laughter and mild despair</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
