
import { useState, useEffect } from 'react';
import { Share2, Heart, RotateCcw, Home } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface FortuneRevealProps {
  fortune: string;
  onNavigate: (view: 'home' | 'fortune' | 'saved' | 'about') => void;
}

const FortuneReveal = ({ fortune, onNavigate }: FortuneRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedFortunes = JSON.parse(localStorage.getItem('darkFortunes') || '[]');
    setIsSaved(savedFortunes.includes(fortune));
  }, [fortune]);

  const saveFortune = () => {
    const savedFortunes = JSON.parse(localStorage.getItem('darkFortunes') || '[]');
    if (!savedFortunes.includes(fortune)) {
      savedFortunes.push(fortune);
      localStorage.setItem('darkFortunes', JSON.stringify(savedFortunes));
      setIsSaved(true);
      toast({
        title: "Misfortune Saved",
        description: "Added to your collection of doom",
      });
    }
  };

  const shareFortune = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Dark Fortune',
          text: `"${fortune}" - From The Dark Cookie`,
          url: window.location.href,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${fortune}" - From The Dark Cookie`);
    toast({
      title: "Copied to Clipboard",
      description: "Share your doom with others",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Cookie breaking animation */}
      <div className="relative mb-12">
        <div className={`transition-all duration-1000 ${isRevealed ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-600 to-amber-800 rounded-full shadow-2xl relative overflow-hidden border-4 border-amber-700">
            {/* Crack effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/4 w-px h-32 bg-black rotate-45 transform -translate-y-16"></div>
              <div className="absolute top-1/2 right-1/3 w-px h-24 bg-black -rotate-12 transform -translate-y-12"></div>
              <div className="absolute bottom-1/3 left-1/2 w-px h-20 bg-black rotate-75 transform -translate-x-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fortune reveal */}
      <div className={`transition-all duration-1000 delay-500 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-serif text-red-400 mb-6">Your Dark Fortune</h2>
            <blockquote className="text-xl md:text-2xl font-serif text-gray-200 leading-relaxed mb-8 italic">
              "{fortune}"
            </blockquote>
            
            {/* Action buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <RotateCcw className="w-4 h-4" />
                Crack Another Cookie
              </button>
              
              <button
                onClick={saveFortune}
                disabled={isSaved}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-300 ${
                  isSaved 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-red-800 hover:bg-red-700'
                }`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                {isSaved ? 'Saved' : 'Save This Misfortune'}
              </button>
              
              <button
                onClick={shareFortune}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Share2 className="w-4 h-4" />
                Share My Doom
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Home button */}
      <button
        onClick={() => onNavigate('home')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <Home className="w-5 h-5" />
        Home
      </button>
    </div>
  );
};

export default FortuneReveal;
