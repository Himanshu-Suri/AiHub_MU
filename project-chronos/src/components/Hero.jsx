import {motion} from "framer-motion"
import { Typewriter } from "react-simple-typewriter";
import Background from "./Background";

function Hero(){

return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white relative" id="home">
      
        <Background />
        
        <motion.div
        initial={{opacity:0,y:100}}
        whileInView={{opacity: 1 , y:0}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2}}
        viewport={{once: true}}
        className="relative group z-10"
        >
            <h1 className="text-6xl font-bold font-mono tracking-wider relative z-10">
              &gt; PROJECT CHRONOS
            </h1>
            <h1 className="text-6xl font-bold font-mono tracking-wider absolute inset-0 blur-md opacity-30 text-gray-300 group-hover:opacity-50 transition-opacity">
              &gt; PROJECT CHRONOS
            </h1>
        </motion.div>

        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8}}
        viewport={{once: true}}
        className="mt-10 z-10"
        >
          <h2 className="text-xl text-gray-300 font-mono">
            [SYSTEM_STATUS]: <span className="text-gray-400">
              <Typewriter
                words={[
                  "Reconstructing the lost web...",
                  "Decoding ancient internet protocols...",
                  "Piecing together digital history...",
                  "Restoring corrupted data fragments..."
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
        </motion.div>

        <motion.div
        initial={{opacity:0, scale:0.8}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2}}
        viewport={{once: true}}
        className="mt-16 flex gap-4 z-10"
        >
          <div className="px-1 py-1 border border-white/30 rounded text-gray-300 text-sm font-mono animate-pulse">
            [ONLINE]
          </div>
          <div className="px-1 py-1 border border-white/30 rounded text-gray-300 text-sm font-mono">
            [READY]
          </div>
          <div className="px-1 py-1 border border-white/30 rounded text-gray-300 text-sm font-mono">
            [SCANNING...]
          </div>
        </motion.div>
    </div>
)
}

export default Hero;