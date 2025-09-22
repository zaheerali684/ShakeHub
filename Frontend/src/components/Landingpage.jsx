// LandingPage.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const backgrounds = [
    "#795548",
    "#E91E63",
    "#FFB300",
    "#F3E5AB",
    "#FFC107",
  ];

  const descriptions = [
    "Rich and creamy chocolate flavor with a smooth texture.",
    "Fresh strawberry blended into a sweet, refreshing shake.",
    "Tropical mango shake with a vibrant fruity taste.",
    "Classic vanilla shake with smooth and milky flavor.",
    "Healthy banana shake, energy-packed and deliciously smooth.",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Shake Showcase */}
      <div
        className="flex-1 flex flex-col items-center justify-center transition-all duration-700 w-full"
        style={{ backgroundColor: backgrounds[index] }}
      >
        <h2 className="text-6xl md:text-5xl sm:text-4xl font-extrabold mb-6 text-white drop-shadow-lg mt-20 text-center">
          🍹 Fruity Shakes
        </h2>

        <div className="relative w-[900px] max-w-full h-[600px] md:h-[450px] sm:h-[350px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {/* Chocolate Shake */}
            {index === 0 && (
              <motion.div
                key="chocolate"
                className="w-full h-full flex items-center justify-center relative"
                initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h1 className="absolute text-[100px] md:text-7xl sm:text-5xl font-extrabold text-black/20 z-0 text-center">
                  Chocolate Shake
                </h1>
                <motion.img
                  src="/images/chocolate.png"
                  alt="Chocolate Shake"
                  className="relative z-10 max-h-[550px] md:max-h-[400px] sm:max-h-[300px] object-contain drop-shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            )}

            {/* Strawberry Shake */}
            {index === 1 && (
              <motion.div
                key="strawberry"
                className="w-full h-full flex items-center justify-center relative"
                initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h1 className="absolute text-[100px] md:text-7xl sm:text-5xl font-extrabold text-black/20 z-0 text-center">
                  Strawberry Shake
                </h1>
                <motion.img
                  src="/images/strawberry.png"
                  alt="Strawberry Shake"
                  className="relative z-10 max-h-[550px] md:max-h-[400px] sm:max-h-[300px] object-contain drop-shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            )}

            {/* Mango Shake */}
            {index === 2 && (
              <motion.div
                key="mango"
                className="w-full h-full flex items-center justify-center relative"
                initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h1 className="absolute text-[100px] md:text-7xl sm:text-5xl font-extrabold text-black/20 z-0 text-center">
                  Mango Shake
                </h1>
                <motion.img
                  src="/images/mango.png"
                  alt="Mango Shake"
                  className="relative z-10 max-h-[550px] md:max-h-[400px] sm:max-h-[300px] object-contain drop-shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            )}

            {/* Vanilla Shake */}
            {index === 3 && (
              <motion.div
                key="vanilla"
                className="w-full h-full flex items-center justify-center relative"
                initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h1 className="absolute text-[100px] md:text-7xl sm:text-5xl font-extrabold text-black/20 z-0 text-center">
                  Vanilla Shake
                </h1>
                <motion.img
                  src="/images/vanilla.png"
                  alt="Vanilla Shake"
                  className="relative z-10 max-h-[550px] md:max-h-[400px] sm:max-h-[300px] object-contain drop-shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            )}

            {/* Banana Shake */}
            {index === 4 && (
              <motion.div
                key="banana"
                className="w-full h-full flex items-center justify-center relative"
                initial={{ x: direction === "next" ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "next" ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h1 className="absolute text-[100px] md:text-7xl sm:text-5xl font-extrabold text-black/20 z-0 text-center">
                  Banana Shake
                </h1>
                <motion.img
                  src="/images/banana.png"
                  alt="Banana Shake"
                  className="relative z-10 max-h-[550px] md:max-h-[400px] sm:max-h-[300px] object-contain drop-shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.1, 1], opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 max-w-2xl text-center px-6 text-white font-medium text-2xl">
          {descriptions[index]}
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-3 mt-10">
          {backgrounds.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? "next" : "back");
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            ></button>
          ))}
        </div>
      </div>


    </div>
  );
}
