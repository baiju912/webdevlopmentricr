import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Timer = () => {
  const [days, useDays] = useState(0);
  const [hours, useHours] = useState(0);
  const [minutes, useMinutes] = useState(0);
  const [seconds, useSeconds] = useState(0);

  const deadline = "February, 01, 2026";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    useDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    useHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    useMinutes(Math.floor(time / 1000 / 60) % 60);
    useSeconds(Math.floor(time / 1000) % 60);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-40 w-200 mt-10 mx-auto border shadow-2xl rounded-2xl bg-amber-50">
        <div className="pt-10 px-5 flex gap-15 text-3xl font-bold text-orange-600">
          <div>Time left :- </div>
          <div>
            <div className="overflow-hidden h-18 w-18 rounded-2xl px-5 py-2 bg-white text-black text-5xl flex justify-center font-bold  border  text-center ">
              <motion.div
              key={`d-${days}`}
                initial={{
                  y: -80,
                  rotateX:"-180deg",
                  opacity:0
                }}
                animate={{
                    y:0,
                    rotateX:"0deg",
                    opacity:1
                }}
                transition={{
                    duration:2
                }}
                
              >

              {days < 10 ? "0" + days : days}
              </motion.div>
            </div>
            <div className="text-2xl"> Days</div>
          </div>
          <div>
            <div className="overflow-hidden h-18 w-18 rounded-2xl px-5 py-2 bg-white text-black text-5xl flex justify-center font-bold  border  text-center">
              <motion.div
              key={`h-${hours}`}
                initial={{
                  y: -80,
                  rotateX:"-180deg",
                  opacity:0
                }}
                animate={{
                    y:0,
                    rotateX:"0deg",
                    opacity:1
                }}
                transition={{
                    duration:1
                }}
                
              >
              {hours < 10 ? "0" + hours : hours}{" "}
                
              </motion.div>
            </div>
            <div className="text-2xl"> Hours</div>
          </div>
          <div>
            <div className="overflow-hidden h-18 w-18 rounded-2xl px-5 py-2 bg-white text-black text-5xl flex justify-center font-bold  border  text-center">
              <motion.div
              key={`m-${minutes}`}
                initial={{
                  y: -80,
                  rotateX:"-180deg",
                  opacity:0
                }}
                animate={{
                    y:0,
                    rotateX:"0deg",
                    opacity:1
                }}
                transition={{
                    duration:1
                }}
                
              >
              {minutes < 10 ? "0" + minutes : minutes}

              </motion.div>
            </div>
            <div className="text-2xl"> Minutes</div>
          </div>
          <div>
            <div
             
              className="overflow-hidden h-18 w-18 rounded-2xl px-5 py-2 bg-white text-black text-5xl flex justify-center font-bold  border  text-center "
            >
              <motion.div
              key={`s-${seconds}`}
                initial={{
                  y: -80,
                  rotateX:"-180deg",
                  opacity:0
                }}
                animate={{
                    y:0,
                    rotateX:"0deg",
                    opacity:1
                }}
                transition={{
                    duration:0.75
                }}
                
              >
                {seconds < 10 ? "0" + seconds : seconds}
              </motion.div>
            </div>
            <div className="text-2xl">Seconds </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
