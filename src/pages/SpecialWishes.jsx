import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.jpg";
import fotoHeart from "../assets/images/fotoHeart.jpg"; // ✅ tambahkan import foto

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Sayanggg.. Aku selalu berdo'a agar kamu senantiasa di beri umur panjang, selalu dalam lindungan Allah, diberi rezeki yang berlimpah, dimudahkan segala urusannya, di beri kesehatan, kekuatan dan kebahagiaan tiada akhir, 

Aku tahu hidup tidak selalu mudah, tapi kamu harus inget aku akan selalu ada buat kamu, dukung kamu, semangatin kamu, dan jadi tempat kamu pulang saat kamu merasa sedih dan bahagia

Kamu sangat baik, kamu bijaksana, kamu punya senyum yang menenangkan, kamu juga punya hati yang tulus dan jiwa yang tampan luar dalam 😁🥰

Aku percaya sama kamu yang,, kamu kuat, kamu hebat, dan kamu pantas mendapatkan yang terbaik. Jangan pernah ragukan dirimu sendiri, karena kamu adalah cahaya dalam hidup banyak orang, termasuk hidupku 🥰🥰🥰
Aku percaya kedepannya hidup kamu akan jauh lebih baik

Apapun yang terjadi kedepannya, serumit apapun masalahnya,  sebanyak apapun rintangannya,  sebesar apapun kita nantinya, jangan pernah akhiri hubungan yaa... 

Jangan pernah pergi dari masalahnya, tpi cari solusinya
Jangan lari karena rintangannya, tpi atasi bersama
Dan jangan cari pengganti,  hanya karena sudah bosan dengan sosoknya, tpi perbaiki hubungannya

Ayoo kita sama-sama lewati prosesnya dan bersyukur serta menerima dengan segala kekurangan dan kelebihan masing2

Aku akan nungguin kamu sampai kamu siappp... 
Aku cinta kamu sayang...
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <img
            src={vidioWishes}
            alt="Birthday Wishes"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-50 p-4"
            >
              <motion.div
                className="relative text-pink-500 mb-6"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Bagas Laksmana 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>

              {/* ✅ Tambahkan foto di sini */}
              <motion.img
                src={fotoHeart}
                alt="Kenangan Spesial"
                className="w-64 h-64 object-cover rounded-xl shadow-lg border-4 border-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
