
import React, { useState, useEffect } from 'react';

const SorryMessages = () => {
  const [messages, setMessages] = useState<Array<{ id: number; x: number; y: number; message: string }>>([]);
  
  const sorryMessages = [
    "I'm so sorry! 😢", "माफ़ करो ना! 🥺", "Sorry sorry sorry! 💔", 
    "प्लीज़ माफ़ करो! 🙏", "I feel so bad! 😭", "Sorry मेरी जान! 💕",
    "मुझसे गलती हुई! 😔", "Please forgive me! 💝", "Sorry बेबी! 👶",
    "माफ़ी चाहता हूँ! 🤗", "I'm really sorry! 💐", "Sorry पगली! 😘"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newMessage = {
        id: Date.now() + Math.random(),
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100),
        message: sorryMessages[Math.floor(Math.random() * sorryMessages.length)]
      };
      
      setMessages(prev => [...prev, newMessage]);
      
      // Remove message after animation
      setTimeout(() => {
        setMessages(prev => prev.filter(msg => msg.id !== newMessage.id));
      }, 4000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="absolute animate-bounce bg-red-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold opacity-90"
          style={{
            left: msg.x,
            top: msg.y,
            animation: 'bounce 1s infinite, fade-in 0.5s ease-out'
          }}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default SorryMessages;
