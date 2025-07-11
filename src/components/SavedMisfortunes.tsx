
import { useState, useEffect } from 'react';
import { Home, Trash2, Heart } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface SavedMisfortunesProps {
  onNavigate: (view: 'home' | 'fortune' | 'saved' | 'about') => void;
}

const SavedMisfortunes = ({ onNavigate }: SavedMisfortunesProps) => {
  const [savedFortunes, setSavedFortunes] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fortunes = JSON.parse(localStorage.getItem('darkFortunes') || '[]');
    setSavedFortunes(fortunes);
  }, []);

  const clearAllFortunes = () => {
    localStorage.removeItem('darkFortunes');
    setSavedFortunes([]);
    toast({
      title: "All Misfortunes Erased",
      description: "Your tragic future has been reset",
    });
  };

  const removeFortune = (fortuneToRemove: string) => {
    const updatedFortunes = savedFortunes.filter(fortune => fortune !== fortuneToRemove);
    setSavedFortunes(updatedFortunes);
    localStorage.setItem('darkFortunes', JSON.stringify(updatedFortunes));
    toast({
      title: "Misfortune Removed",
      description: "One less piece of doom in your collection",
    });
  };

  return (
    <div className="min-h-screen px-4 py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <Home className="w-5 h-5" />
          Back to Cookie
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
            Saved Misfortunes
          </h1>
          <p className="text-xl text-gray-300 font-serif italic">
            Your collection of beautifully tragic predictions
          </p>
        </div>

        {/* Fortunes list */}
        {savedFortunes.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl text-gray-400 mb-2">No Saved Misfortunes</h3>
            <p className="text-gray-500">Your heart is empty... how tragic</p>
            <button
              onClick={() => onNavigate('home')}
              className="mt-6 bg-purple-800 hover:bg-purple-700 px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Crack Your First Cookie
            </button>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:gap-8">
              {savedFortunes.map((fortune, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <blockquote className="text-lg md:text-xl font-serif text-gray-200 leading-relaxed italic mb-4">
                    "{fortune}"
                  </blockquote>
                  <div className="flex justify-end">
                    <button
                      onClick={() => removeFortune(fortune)}
                      className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear all button */}
            <div className="text-center mt-12">
              <button
                onClick={clearAllFortunes}
                className="bg-red-900 hover:bg-red-800 px-8 py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
              >
                Erase All Traces of Your Tragic Future?
              </button>
              <p className="text-sm text-gray-500 mt-2">
                ⚠️ This action cannot be undone (much like life)
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SavedMisfortunes;
