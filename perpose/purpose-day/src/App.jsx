import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Confetti from "react-confetti";
import { Heart, HandHeart, Sparkles, X,  MessageCircleHeart } from "lucide-react";

// --- Background Floating Elements Component ---
const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "100vh",
            x: Math.random() * 100 + "vw",
            scale: 0.5,
            rotate: 0,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: "-10vh",
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10, // Slow float
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-rose-300/30 blur-[1px]"
          style={{ fontSize: `${Math.random() * 40 + 20}px` }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default function EpicProposal() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Controls animation for the "No" button shake
  const noControls = useAnimation();

  useEffect(() => {
    const updateSize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Texts that change when they try to click No
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Pookie please? 🥺",
    "Don't do this to me!",
    "I'm gonna cry...",
    "You're breaking my heart! 💔",
    "Okay, now I'm sad.",
    "Last chance!",
    "Jhooth bol rahi ho! 😠",
    "Man jao na! 🌹"
  ];

  const handleNoInteraction = async () => {
    setNoCount(noCount + 1);
    
    // Shake animation
    noControls.start({
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 }
    });

    // Move button to random spot
    const x = Math.random() * (windowSize.width * 0.6) - (windowSize.width * 0.3);
    const y = Math.random() * (windowSize.height * 0.6) - (windowSize.height * 0.3);
    setNoPos({ x, y });
  };

  const getNoText = () => phrases[Math.min(noCount, phrases.length - 1)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b16] via-[#2d0f1e] to-[#4a0e23] flex flex-col items-center justify-center relative overflow-hidden font-sans text-white">
      
      {/* 1. Dynamic Background */}
      <FloatingHearts />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

      {accepted && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={1000} recycle={false} gravity={0.3} />}

      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="z-10 relative"
          >
            {/* Glass Card */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-[0_0_60px_rgba(225,29,72,0.5)] max-w-lg mx-4 text-center">
              
              {/* Cute Header Animation */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1], 
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-8 relative inline-block"
              >
                <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-50 rounded-full"></div>
                <img 
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnJrbWF6bWcwbmI4d2p1N214N3ljY3I3aXhpZnJjczZ2Z3l6aGZ1YSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/iCVzZwwE6QhZPqXbfb/giphy.gif" // Or use a static cute bear image
                  alt="Cute Bear"
                  className="w-32 h-32 relative z-10 drop-shadow-xl"
                />
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-black mb-4 drop-shadow-lg bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                Hey Beautiful! ✨
              </h1>
              
              <p className="text-lg md:text-xl text-rose-100/90 mb-10 font-medium leading-relaxed">
                Life is better with you. <br/>
                Will you be my <span className="text-white font-bold underline decoration-rose-500 decoration-4 underline-offset-4">Valentine</span>?
              </p>

              {/* Buttons Container */}
              <div className="flex flex-col items-center gap-4 relative h-32 justify-center">
                
                {/* YES Button - Grows based on No clicks */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setAccepted(true)}
                  style={{
                    width: noCount > 0 ? `${Math.min(400, 100 + noCount * 40)}%` : "100%", // Grows width
                    height: noCount > 0 ? `${Math.min(150, 60 + noCount * 20)}px` : "60px", // Grows height
                    fontSize: `${Math.min(40, 18 + noCount * 2)}px`
                  }}
                  className="z-50 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-full shadow-xl shadow-rose-600/40 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden px-8 py-4 min-w-[200px]"
                >
                  <HandHeart className="w-6 h-6" /> 
                  {noCount > 5 ? "JUST SAY YES ALREADY! ❤️" : "Yes, I'd love to!"}
                </motion.button>

                {/* NO Button - Runs away */}
                <motion.button
                  animate={noControls}
                  style={{ 
                    position: noCount > 0 ? 'absolute' : 'relative',
                    left: noPos.x, 
                    top: noPos.y,
                    transition: 'all 0.3s ease' 
                  }}
                  onMouseEnter={handleNoInteraction}
                  onClick={handleNoInteraction}
                  className="text-rose-300/80 font-medium bg-black/20 hover:bg-black/40 px-6 py-3 rounded-full backdrop-blur-sm border border-white/5 transition-colors text-sm whitespace-nowrap"
                >
                  {getNoText()}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            className="z-20 flex flex-col items-center justify-center text-center p-4 w-full h-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute inset-0 bg-rose-500 blur-[100px] opacity-40 rounded-full"
              ></motion.div>
              
              <motion.img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Q2Ym05c214am16aXprMzR3dG11MzR3dG11MzR3dG11MzR3dG11eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/26FLdmIp6wJr91JAI/giphy.gif"
                alt="Celebration"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/30 relative z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-black text-white mt-12 mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
            >
              YAYYYYY! 🎉
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl text-rose-200 font-medium max-w-lg mx-auto"
            >
              Wait, really? You said yes?! <br/>
              <span className="text-white font-bold">Best. Decision. Ever.</span> 😎
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="mt-8 flex gap-4"
            >
               <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-50 transition-colors"
                onClick={() => window.location.reload()}
               >
                 Play Again ↺
               </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}