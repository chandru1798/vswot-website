'use client';

import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      setIsVisible(y > 600);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-semibold text-sm text-white shadow-2xl shadow-brand/40 transition-all hover:scale-105 hover:shadow-brand/60"
            style={{
              background: 'linear-gradient(135deg, #7c5ff2 0%, #d946ef 100%)',
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get Free Strategy Call
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
