
"use client";

import { useEffect } from 'react';
import lottie from 'lottie-web';
import '../styles/custom.css';

export default function Homepage() {

  useEffect(() => {
    const loadAnimation = async () => {
      const animation = await lottie.loadAnimation({
        container: document.getElementById('animationContainer'),
        renderer: 'svg', // or 'canvas', 'html'
        loop: true,
        autoplay: true,
        path: '/Animation1.json' // Path to your animation JSON file in the public directory
      });
    };

    loadAnimation();
  }, []);

  return (
    <main className="block min-h-screen ">

    </main>
  );
}
