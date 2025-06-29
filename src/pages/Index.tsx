
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';
import SorryMessages from '@/components/SorryMessages';
import ThankYouMessages from '@/components/ThankYouMessages';
import MovingNoButton from '@/components/MovingNoButton';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('initial');
  const [showSorryMessages, setShowSorryMessages] = useState(false);
  const [showThankYouMessages, setShowThankYouMessages] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFirstYes = () => {
    setCurrentScreen('sorry');
    setShowSorryMessages(true);
  };

  const handleFirstNo = () => {
    setCurrentScreen('please-angry');
  };

  const handleStopSorry = () => {
    setShowSorryMessages(false);
    setCurrentScreen('forgive-me');
  };

  const handleFinalYes = () => {
    setCurrentScreen('thank-you');
    setShowThankYouMessages(true);
  };

  const renderSparkles = () => {
    return Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute animate-pulse opacity-60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      >
        <Sparkles className="text-yellow-400 w-4 h-4" />
      </div>
    ));
  };

  if (currentScreen === 'initial') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
        {renderSparkles()}
        
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-md w-full p-8 text-center bg-white/80 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
            <div className="space-y-6">
              <div className="animate-bounce">
                <div className="text-6xl">🤔</div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 animate-fade-in">
                Hey Friend! 😊
              </h1>
              
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <p className="text-xl text-gray-700 font-semibold">
                  Are you angry? 🥺
                </p>
                
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={handleFirstYes}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Yes 😔
                  </Button>
                  <Button 
                    onClick={handleFirstNo}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    No 😊
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentScreen === 'sorry') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-200 via-pink-200 to-purple-200 relative overflow-hidden">
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-md w-full p-8 text-center bg-white/90 backdrop-blur-sm shadow-2xl border-0">
            <div className="space-y-6">
              <div className="text-6xl animate-bounce">😢</div>
              <h2 className="text-2xl font-bold text-gray-800">I'm So Sorry! 😔</h2>
              
              <Button 
                onClick={handleStopSorry}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg animate-pulse"
              >
                Stop! 🛑
              </Button>
            </div>
          </Card>
        </div>
        
        {showSorryMessages && <SorryMessages />}
      </div>
    );
  }

  if (currentScreen === 'please-angry') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 relative overflow-hidden">
        {renderSparkles()}
        
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-md w-full p-8 text-center bg-white/90 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
            <div className="space-y-6">
              <div className="text-6xl animate-bounce">🥺</div>
              <h2 className="text-2xl font-bold text-gray-800 animate-fade-in">
                Please be angry! 😊
              </h2>
              <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Your anger is also nice! 😄
              </p>
              
              <Button 
                onClick={() => setCurrentScreen('forgive-me')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg animate-pulse"
              >
                Okay fine... 😊
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentScreen === 'forgive-me') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 relative overflow-hidden">
        {renderSparkles()}
        
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-md w-full p-8 text-center bg-white/90 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
            <div className="space-y-6">
              <div className="text-6xl animate-bounce">🙏</div>
              <h2 className="text-2xl font-bold text-gray-800 animate-fade-in">
                Please forgive me! 🥺
              </h2>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={handleFinalYes}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Yes okay 😊
                </Button>
                <MovingNoButton />
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  if (currentScreen === 'thank-you') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 relative overflow-hidden">
        {renderSparkles()}
        
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-md w-full p-8 text-center bg-white/90 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
            <div className="space-y-6">
              <div className="text-6xl animate-bounce">🎉</div>
              <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">
                Hehe Thank You So Much! 😄
              </h2>
              <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                You are so nice! 😊✨
              </p>
            </div>
          </Card>
        </div>
        
        {showThankYouMessages && <ThankYouMessages />}
      </div>
    );
  }

  return null;
};

export default Index;
