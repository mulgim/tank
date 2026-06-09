/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ASSETS, VISUAL_NOVEL_PROLOGUE, MAYRI_INFO } from '../data';
import { DialogLine } from '../types';
import { Play, Sparkles, Shield, Heart, HelpCircle, Gamepad2, ArrowRight, RefreshCw, Eye, Smartphone, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MainScreenProps {
  affinity: number;
  setAffinity: React.Dispatch<React.SetStateAction<number>>;
  setTab: (tab: string) => void;
  hasSavedMayriNearDeath: boolean;
  setHasSavedMayriNearDeath: (val: boolean) => void;
}

export default function MainScreen({
  affinity,
  setAffinity,
  setTab,
  hasSavedMayriNearDeath,
  setHasSavedMayriNearDeath,
}: MainScreenProps) {
  // Visual novel state
  const [currentNodeId, setCurrentNodeId] = useState<number>(1);
  const [vnStarted, setVnStarted] = useState<boolean>(false);
  const [feedbackText, setFeedbackText] = useState<string>('');
  const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);

  const currentLine: DialogLine | undefined = VISUAL_NOVEL_PROLOGUE.find(
    (line) => line.id === currentNodeId
  );

  const handleVNChoice = (nextId: number, affinityChange: number, feedback: string) => {
    // Increment Affinity
    setAffinity((prev) => {
      const updated = prev + affinityChange;
      return Math.max(0, updated);
    });

    // Display feedback toast
    setFeedbackText(feedback);
    setFeedbackOpen(true);
    setTimeout(() => {
      setFeedbackOpen(false);
    }, 4500);

    // CRITICAL DEEP SAFETY EXCLUSIVE CHECK: 
    // Node 10 is the post-critical-incident survivor node. Once triggered, we unlock her deepest feelings!
    if (nextId === 10) {
      setHasSavedMayriNearDeath(true);
    }

    // Proceed to next node
    setCurrentNodeId(nextId);
  };

  const restartVN = () => {
    setCurrentNodeId(1);
    setFeedbackText('');
    setFeedbackOpen(false);
    setVnStarted(true);
  };

  return (
    <div className="space-y-12 pb-12" id="main-landing-view">
      {/* Cinematic Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-black min-h-[500px] flex flex-col justify-end">
        {/* Landscape Image */}
        <img
          src={ASSETS.medievalLandscape}
          alt="Emerald Oath Landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-void via-dark-void/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-void/90 via-transparent to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 p-8 md:p-12 space-y-4 max-w-4xl">

          <p className="font-serif text-2xl font-black text-zinc-100">
            <p>왜 안 가도 될 걸 가서 처맞냐고!!!!!</p>
          </p>

          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-sans font-light">
            <p>당신은 소꿉친구 메이리 const [feedbackText, setFeedbackText] = useState<string>('');
  const [feedbackOpen, setFeedbackOpen] = useState<boolean>(false);

  const currentLine: DialogLine | undefined = VISUAL_NOVEL_PROLOGUE.find(
    (line) => line.id === currentNodeId
  );

  const handleVNChoice = (nextId: number, affinityChange: number, feedback: string) => {
    // Increment Affinity
    setAffinity((prev) => {
      const updated = prev + affinityChange;
      return Math.max(0, updated);
    });

    // Display feedback toast
    setFeedbackText(feedback);
    setFeedbackOpen(true);
    setTimeout(() => {
      setFeedbackOpen(false);
    }, 4500);

    // CRITICAL DEEP SAFETY EXCLUSIVE CHECK: 
    // Node 10 is the post-critical-incident survivor node. Once triggered, we unlock her deepest feelings!
    if (nextId === 10) {
      setHasSavedMayriNearDeath(true);
    }

    // Proceed to next node
    setCurrentNodeId(nextId);
  };

  const restartVN = () => {
    setCurrentNodeId(1);
    setFeedbackText('');
    setFeedbackOpen(false);
    setVnStarted(true);
  };

  return (
    <div className="space-y-12 pb-12" id="main-landing-view">
      {/* Cinematic Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-black min-h-[500px] flex flex-col justify-end">
        {/* Landscape Image */}
        <img
          src={ASSETS.medievalLandscape}
          alt="Emerald Oath Landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-void via-dark-void/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-void/90 via-transparent to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 p-8 md:p-12 space-y-4 max-w-4xl">

          <p className="font-serif text-2xl font-black text-zinc-100">
            <p>왜 안 가도 될 걸 가서 처맞냐고!!!!!</p>
          </p>

          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-sans font-light">
            <p>당신은 소꿉친구 『메이리』와 함께, 시골 마을 콘스의 최강 모험가 파티입니다.</p>
            <p>...물론 겉보기에만 그렇고, 이 닥돌 성애자 소꿉친구는 항상 당신을 뒷전으로 내버려두고 적진으로 돌격하기 마련이죠.</p>
            <p>어쩌다가 이렇게 되었을까요?</p>
          </p>

          <div className="pt-4">
            <button
              id="hero-view-profile-btn"
              onClick={() => setTab('character')}
              className="flex items-center space-x-2 px-6 py-3 bg-lime-brand text-black font-semibold text-sm rounded-lg hover:bg-lime-glow transition duration-300 cursor-pointer shadow-[0_4px_25px_rgba(163,230,53,0.35)]"
            >
              <Eye className="w-4 h-4" />
              <span>메이리 확인하기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Elegant Medieval Portrait & Message Banner */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-dark-obsidian/40 border border-zinc-800 p-8 rounded-2xl">
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-64 rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-black">
            <img
              src={ASSETS.mayriPortrait}
              alt="Mayri Knight Portrait"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="md:col-span-8 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-lime-brand font-bold block">
            Mayri
          </span>
          <h3 className="font-serif text-2xl font-black text-zinc-100">
            “어머, 내가 닥돌한 게 아니라, 네 치유가 늦은 거 아닐까~?”
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans font-light">
            다쳤으니 치유해줘, 알지?
          </p>
          <div className="pt-2">
            <button
              onClick={() => setTab('secret')}
              className="text-xs font-serif font-bold text-lime-brand hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              <span>스포일러</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
