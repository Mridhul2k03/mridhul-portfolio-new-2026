import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const brandName = "MRIDHUL";
  const letters = brandName.split("");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock body scroll during loader
    document.body.style.overflow = "hidden";

    // Start exit transition after letters and subtitle hold
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    document.body.style.overflow = "";
    onLoadingComplete();
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        onLoadingComplete();
      }}
    >
      {!isExiting && (
        <motion.div
          key="loader-overlay"
          onClick={handleSkip}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{
            clipPath: "inset(50% 50% 50% 50%)",
            transition: {
              duration: 0.7,
              ease: [0.56, 0.22, 0.05, 0.99],
            },
          }}
          className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
          style={{ willChange: "clip-path" }}
        >
          <div className="flex flex-col items-center justify-center px-4 text-center">
            {/* Title: MRIDHUL© */}
            <div className="relative inline-flex items-center justify-center">
              <div className="flex items-center tracking-tight">
                {letters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15, rotateX: 35 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              {/* Small Copyright Symbol © */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + letters.length * 0.08 + 0.1 }}
                className="font-sans font-bold text-xs sm:text-base md:text-xl text-neutral-300 self-start mt-1 sm:mt-2 md:mt-3 ml-1"
              >
                ©
              </motion.span>
            </div>

            {/* Subtitle: Full Stack Developer */}
            <motion.p
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2 + letters.length * 0.08 + 0.2,
                ease: [0.56, 0.22, 0.05, 0.99],
              }}
              className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 font-medium tracking-normal"
            >
              Full Stack Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
