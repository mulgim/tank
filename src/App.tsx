/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import MainScreen from './components/MainScreen';
import CharacterProfile from './components/CharacterProfile';
import WorldLore from './components/WorldLore';
import SecretVault from './components/SecretVault';
import { Shield, Sparkles, BookOpen, Lock, Heart, ShieldQuestion, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [tab, setTab] = useState<string>('main');
  const [affinity, setAffinity] = useState<number>(0);
  
  // Strict Safety Condition: True only when the player undergoes the near-death escape savior event in the Prologue Simulation.
  const [hasSavedMayriNearDeath, setHasSavedMayriNearDeath] = useState<boolean>(false);

  useEffect(() => {
    console.log(`[Emerald Oath] Current Player Affinity (호감도) updated to: ${affinity} AF`);
  }, [affinity]);

  useEffect(() => {
    if (hasSavedMayriNearDeath) {
      console.log('[Emerald Oath] SECURITY UNLOCKED: Mayri\'s true feelings and powers are now decodable!');
    }
  }, [hasSavedMayriNearDeath]);

  return (
    <div className="min-h-screen bg-dark-void text-zinc-100 font-sans flex flex-col justify-between selection:bg-lime-brand/35 selection:text-white">
      
      {/* Top Medieval Gothic Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-dark-void/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo Insignia */}
          <button
            onClick={() => setTab('main')}
            className="flex items-center focus:outline-none cursor-pointer group animate-fade-in"
          >
            <img
              src="/src/assets/images/taejangyeon_logo_1780954254782.png"
              alt="태장연 소꿉친구 로고"
              className="h-10 md:h-12 object-contain group-hover:opacity-90 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Navigation Links */}
          <nav className="flex space-x-1 md:space-x-1.5" id="app-navigation-links">
            {[
              { id: 'main', label: '메인 화면', icon: Sparkles },
              { id: 'character', label: '메이리', icon: Heart },
              { id: 'lore', label: '세계관', icon: BookOpen },
              { id: 'secret', label: '스포일러', icon: Lock, isSecret: true },
            ].map((menu) => {
              const IconComp = menu.icon;
              const isActive = tab === menu.id;
              return (
                <button
                  key={menu.id}
                  onClick={() => setTab(menu.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 md:px-3.5 md:py-2.5 rounded-lg text-[10px] md:text-xs font-semibold tracking-wider font-serif transition-all duration-250 cursor-pointer ${
                    isActive
                      ? 'bg-lime-brand/10 border border-lime-brand text-lime-brand shadow-[0_0_12px_rgba(163,230,53,0.15)] font-bold'
                      : menu.isSecret
                      ? 'bg-zinc-950 border border-zinc-950 text-red-400 hover:text-red-300 hover:border-red-950/40'
                      : 'border border-transparent text-zinc-400 hover:text-lime-brand hover:bg-zinc-900/50'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'animate-bounce' : ''}`} />
                  <span className="hidden sm:inline">{menu.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Render Layout Panel */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {tab === 'main' && (
              <MainScreen
                affinity={affinity}
                setAffinity={setAffinity}
                setTab={setTab}
                hasSavedMayriNearDeath={hasSavedMayriNearDeath}
                setHasSavedMayriNearDeath={setHasSavedMayriNearDeath}
              />
            )}
            
            {tab === 'character' && (
              <CharacterProfile
                affinity={affinity}
                setAffinity={setAffinity}
              />
            )}
            
            {tab === 'lore' && (
              <WorldLore />
            )}
            
            {tab === 'secret' && (
              <SecretVault
                affinity={affinity}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Medieval Aesthetic Accent Footer */}
      <footer className="border-t border-zinc-800 bg-black/60 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 md:space-y-0 text-center">
          <div className="space-y-1 md:text-left">
            <p className="font-serif font-semibold text-zinc-400">
              © {new Date().getFullYear()} Mayri. All Rights Reserved.
            </p>
            <p className="font-mono text-[9px] text-zinc-600">
              Designed with Lime & Obsidian Gothic Nexus Paradigm
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {hasSavedMayriNearDeath && (
              <span className="px-3 py-1 bg-lime-brand/10 border border-lime-brand text-lime-brand rounded-full font-mono text-[10px] animate-pulse">
                🔓 해방 완료
              </span>
            )}
          </div>
        </div>
      </footer>

    </div>
  );
}
