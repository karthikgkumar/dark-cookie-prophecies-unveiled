
import { Home, Skull, Moon, Zap } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (view: 'home' | 'fortune' | 'saved' | 'about') => void;
}

const AboutPage = ({ onNavigate }: AboutPageProps) => {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <Home className="w-5 h-5" />
          Back to Cookie
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
            About The Dark Cookie
          </h1>
          <p className="text-xl text-gray-300 font-serif italic">
            Where optimism goes to die
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Origin story */}
          <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Skull className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400">The Origin of Darkness</h2>
            </div>
            <div className="text-gray-300 leading-relaxed font-serif space-y-4">
              <p>
                Legend has it that The Dark Cookie was born in a small, perpetually gloomy bakery 
                run by a former motivational speaker who had given up on life. After years of spreading 
                false hope and toxic positivity, they decided to embrace the beautiful tragedy of existence.
              </p>
              <p>
                Each fortune is carefully crafted to reflect the bitter-sweet reality of human existence - 
                where hope meets disappointment, where dreams collide with reality, and where laughter 
                emerges from the darkest corners of our souls.
              </p>
              <p>
                These aren't your grandmother's fortune cookies. These are for people who appreciate 
                that life is beautifully, tragically, and hilariously absurd.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Moon className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-purple-400">Features of Doom</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">🍪 Infinite Misfortune</h3>
                <p className="text-sm">Over 60 carefully curated dark fortunes to crush your spirits</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">💾 Save Your Doom</h3>
                <p className="text-sm">Collect your favorite pieces of existential dread</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">📱 Share the Pain</h3>
                <p className="text-sm">Spread the beautiful misery to friends and family</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">🌙 Eternal Darkness</h3>
                <p className="text-sm">Dark mode only - because light is overrated</p>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-black/30 backdrop-blur-sm border border-red-900/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-yellow-400">Legal Disclaimers</h2>
            </div>
            <div className="text-gray-300 space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-red-400 font-bold">⚠️</span>
                <span>Not liable for existential crises, laughter-induced sadness, or sudden urges to embrace nihilism</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 font-bold">⚠️</span>
                <span>Side effects may include: dark humor appreciation, philosophical introspection, and mild despair</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 font-bold">⚠️</span>
                <span>These fortunes are not actual predictions (unfortunately, reality is usually worse)</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 font-bold">⚠️</span>
                <span>Use responsibly - do not operate heavy machinery while contemplating the void</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-400 font-bold">💀</span>
                <span>By cracking a cookie, you acknowledge that life is meaningless but might as well have fun with it</span>
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center py-8">
            <p className="text-xl text-gray-300 font-serif italic mb-6">
              "In darkness, we find the most beautiful truths"
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-red-800 to-purple-800 hover:from-red-700 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Embrace Your Dark Fortune
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
