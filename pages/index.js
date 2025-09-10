import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

function AnimatedText({ text, className = '' }) {
  return (
    <div className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

export default function Home() {
  const [opened, setOpened] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    let t
    if (opened) {
      setShowConfetti(true)
      t = setTimeout(() => setShowConfetti(false), 5000)
      // Try to play audio (some browsers require user interaction)
      if (audioRef.current) {
        const p = audioRef.current.play()
        if (p && p.catch) p.catch(() => {})
      }
    }
    return () => clearTimeout(t)
  }, [opened])

  const handleOpen = () => {
    setOpened(true)
    if (audioRef.current) {
      const p = audioRef.current.play()
      if (p && p.catch) p.catch(() => {})
    }
  }

  return (
    <>
      <Head>
        <title>Happy Birthday Maha jan — Open Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-yellow-100 p-6 relative overflow-hidden">
        {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

        {/* Floating hearts */}
        {opened && (
          <div className="pointer-events-none absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '100%', x: `${Math.random() * 100}%`, opacity: 0 }}
                animate={{ y: '-20%', opacity: [0, 1, 0] }}
                transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, delay: i * 1.2 }}
                style={{ position: 'absolute' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pink-400">
                  <path d="M12 21s-7-4.35-9-6.92C-0.22 9.9 4.5 4 9.5 7.5 12 9.33 12 9.33 14.5 7.5 19.5 4 24.22 9.9 21 14.08 19 16.65 12 21 12 21z" fill="#FB7185"/>
                </svg>
              </motion.div>
            ))}
          </div>
        )}

        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 z-10">
          {!opened ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-center">
              <h1 className="text-2xl font-bold text-pink-700 mb-3">🎉 Happy Birthday </h1>
              <p className="text-gray-600 mb-6">Click the button to open your surprise card 💌</p>
              <button onClick={handleOpen} className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition">
                Open Card
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center space-y-4">
              <div className="flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.35-9-6.92C-0.22 9.9 4.5 4 9.5 7.5 12 9.33 12 9.33 14.5 7.5 19.5 4 24.22 9.9 21 14.08 19 16.65 12 21 12 21z" fill="#EF4444"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-pink-700">
            <AnimatedText text="To My jind jan Maha❤️" />
            </h2>
              <p className="text-gray-700 leading-relaxed text-left">
                <AnimatedText text={'Happy Birthday, my love ❤️🌙 As the world quietly enters this new day, my heart is louder than ever, beating only for you. From the very first moment I met you, my life changed in ways I can’t even put into words — you became my comfort, my hope, my safe place, and my greatest blessing. Tonight isn’t just about celebrating the day you were born; it’s about celebrating the light you bring to my life, the kindness you give to everyone around you, and the love that makes me whole. I want to be the reason behind your smile, the hand you hold through every storm, and the soul that makes you feel cherished every single day. This birthday, and every birthday after, I promise to love you deeper than yesterday, care for you more than ever, and stand by you for all of life’s tomorrows. You are not just my love, you are my forever, my everything'} />
              </p>
              <p className="text-pink-600 font-medium mt-2"><AnimatedText text="Forever yours, always caring, always loving." /></p>
            </motion.div>
          )}
        </div>

        {/* Audio (plays after user interacts) */}
        <audio id= "big music" src="/MAHA_Birthday_Song_–_Happy_Birthday_Maha(48k).mp3" loop />
      </div>
    </>
  )
}
