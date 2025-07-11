
import { useState } from 'react';
import HomePage from '../components/HomePage';
import FortuneReveal from '../components/FortuneReveal';
import SavedMisfortunes from '../components/SavedMisfortunes';
import AboutPage from '../components/AboutPage';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'fortune' | 'saved' | 'about'>('home');
  const [currentFortune, setCurrentFortune] = useState<string>('');

  const handleCrackCookie = (fortune: string) => {
    setCurrentFortune(fortune);
    setCurrentView('fortune');
  };

  const handleNavigate = (view: 'home' | 'fortune' | 'saved' | 'about') => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {currentView === 'home' && (
        <HomePage onCrackCookie={handleCrackCookie} onNavigate={handleNavigate} />
      )}
      {currentView === 'fortune' && (
        <FortuneReveal fortune={currentFortune} onNavigate={handleNavigate} />
      )}
      {currentView === 'saved' && (
        <SavedMisfortunes onNavigate={handleNavigate} />
      )}
      {currentView === 'about' && (
        <AboutPage onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default Index;
