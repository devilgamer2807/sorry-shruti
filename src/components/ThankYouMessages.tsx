
import React, { useState, useEffect } from 'react';

const ThankYouMessages = () => {
  const [messages, setMessages] = useState<Array<{ id: number; x: number; y: number; message: string }>>([]);
  
  const thankYouMessages = [
    "Thank you! 💕", "शुक्रिया! 🙏", "धन्यवाद! ✨", 
    "Thank you baby! 💝", "Thanks यार! 😍", "थैंक यू! 🤗",
    "You're the best! 🌟", "Love you! ❤️", "Thanks cutie! 😘",
    "आप अच्छी हो! 💖", "Thank you so much! 🎉", "प्यार करती हूँ! 💕"
  ];

  useEffect(() => {
    let messageCount = 0;
    const interval = setInterval(() => {
      if (messageCount >= 100) {
        clearInterval(interval);
        return;
      }
      
      const newMessage = {
        id: Date.now() + Math.random(),
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100),
        message: thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)]
      };
      
      setMessages(prev => [...prev, newMessage]);
      messageCount++;
      
      // Remove message after animation
      setTimeout(() => {
        setMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
      }, 3000);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="absolute animate-bounce bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold opacity-90"
          style={{
            left: msg.x,
            top: msg.y,
            animation: 'bounce 1s infinite, fade-in 0.5s ease-out, scale-in 0.3s ease-out'
          }}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default ThankYouMessages;
