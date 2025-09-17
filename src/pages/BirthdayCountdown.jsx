import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import vidiocount from "../assets/videos/birthday.jpg"; // pastikan file ada di folder ini

const BirthdayCountdown = ({ isIOS }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showAudio, setShowAudio] = useState(false);
  const navigate = useNavigate();

  const targetDate = new Date("2025-09-18T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">
          The Birthday of{" "}
          <span className="text-purple-600">Bagas Laksmana</span>
        </h1>

        <div className="mb-8">
          <img
            src={vidiocount}
            alt="Birthday Wishes"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl text-pink-600 mb-4">Menuju Hari Spesialmu</h2>
          <div className="flex justify-center space-x-2 md:space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                whileHover={{ scale: isIOS ? 1 : 1.1 }}
                className="bg-white p-4 rounded-lg shadow-md text-center min-w-[70px] border border-pink-100"
              >
                <div className="text-3xl font-bold text-pink-600">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-pink-500 uppercase">
                  {unit === "days"
                    ? "hari"
                    : unit === "hours"
                    ? "jam"
                    : unit === "minutes"
                    ? "menit"
                    : "detik"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-pink-100">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            📅 18 September 2025
          </h3>
          <p className="text-pink-600">
            Tanggal dimana senyumanmu akan menerangi hariku🥹
          </p>
        </div>

        <p className="mt-6 text-lg text-pink-500 italic text-center">
          "today and everyday, i'll always be ur #1 supporter, clap the loudest
          for u, and praying wholeheartedly for ur well-being."
        </p>

        {/* Tombol untuk munculin audio */}
        
      </motion.div>

      
    </div>
  );
};

export default BirthdayCountdown;
