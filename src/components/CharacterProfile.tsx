/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ASSETS, MAYRI_INFO } from '../data';
import { Star } from 'lucide-react';

interface CharacterProfileProps {
  affinity: number;
  setAffinity: React.Dispatch<React.SetStateAction<number>>;
}

export default function CharacterProfile({ affinity, setAffinity }: CharacterProfileProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12" id="character-showcase-container">
      
      {/* Left side: Artwork showcase */}
      <div className="lg:col-span-12 xl:col-span-5 space-y-6">
        <div className="rounded-2xl border border-zinc-800 bg-dark-obsidian overflow-hidden relative shadow-2xl">
          <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-1.5">
            <span className="inline-flex items-center space-x-1 py-1 px-3 rounded-full bg-black/90 border border-lime-brand text-xs text-lime-brand font-mono font-bold animate-pulse">
              <Star className="w-3.5 h-3.5 fill-lime-brand" />
              <span>YOUR PARTNER</span>
            </span>
          </div>

          {/* Portrait display with responsive glow overlay */}
          <div className="h-[460px] relative overflow-hidden bg-zinc-950">
            {/* Portrait Image */}
            <img
              src={ASSETS.mayriPortrait}
              alt="Mayri Haze Portrait"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Soft lime-green custom styling frame */}
            <div className={`absolute inset-4 border border-lime-brand/10 pointer-events-none rounded-xl transition-all duration-300 ring-2 ring-lime-brand/15`}></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>

        {/* 행동 패턴 Card */}
        <div className="rounded-xl border border-zinc-800 bg-dark-obsidian p-5 space-y-3 shadow-xl">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-brand animate-pulse animate-duration-1000"></span>
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-400">행동 패턴 (Action Pattern)</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
            무리하지 않으면 쉽게 이길 수 있는 전투임에도 굳이 무모하게 돌격해 자잘한 부상을 입고는, 뻔뻔하게 당신의 치유가 늦었다며 당신 탓을 하곤 합니다.
          </p>
        </div>
      </div>

      {/* Right side: Detailed Biography */}
      <div className="lg:col-span-12 xl:col-span-7 space-y-6">
        
        {/* Profile Card details */}
        <div className="rounded-xl border border-zinc-800 bg-dark-obsidian p-6 space-y-6 shadow-xl">
          {/* Header Block */}
          <div className="border-b border-zinc-850 pb-4">
            <span className="text-[10px] uppercase font-mono text-lime-brand tracking-widest font-extrabold cursor-default block">Profile • 메이리 프로필 상세</span>
            <div className="flex items-center space-x-2.5 mt-1.5">
              <h3 className="font-serif text-2xl font-black text-white">{MAYRI_INFO.name}</h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-lime-brand/10 text-[9px] font-mono text-lime-brand border border-lime-brand/20 font-bold uppercase tracking-wider">ACTIVE PARTNER</span>
            </div>
            <p className="text-lime-brand text-xs font-serif italic mt-1">{MAYRI_INFO.title}</p>
          </div>

          {/* Keyword Personality Tags */}
          <div className="flex flex-wrap gap-1.5" id="character-personality-tags">
            {['#능글맞음', '#뻔뻔함', '#장난기'].map((tag) => (
              <span key={tag} className="text-[10px] px-2.5 py-1 rounded bg-black/50 text-zinc-400 border border-zinc-800 font-mono font-medium hover:border-lime-brand/35 hover:text-white transition-all cursor-default select-none">
                {tag}
              </span>
            ))}
          </div>

          {/* Segmented Bio Cards */}
          <div className="space-y-3.5">
            <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-brand animate-pulse"></span>
              <span>특성 분석</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Visual Segment */}
              <div className="bg-black/35 border border-zinc-800/70 p-3.5 rounded-lg hover:border-lime-brand/20 transition-all group">
                <span className="text-[10px] font-mono text-lime-brand uppercase tracking-widest block font-bold mb-1.5 group-hover:text-lime-glow">용모 & 용태</span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                  검은색에 선명한 녹색 브릿지가 수놓아진 사이드업 포니테일, 금안을 지닌 수려한 미인.
                </p>
              </div>

              {/* Behavior Segment */}
              <div className="bg-black/35 border border-zinc-800/70 p-3.5 rounded-lg hover:border-lime-brand/20 transition-all group">
                <span className="text-[10px] font-mono text-lime-brand uppercase tracking-widest block font-bold mb-1.5 group-hover:text-lime-glow">장난 & 응석</span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                  『표면적으로는』  능글맞고 뻔뻔한 성격.
                </p>
              </div>

              {/* Stance Segment */}
              <div className="bg-black/35 border border-zinc-800/70 p-3.5 rounded-lg hover:border-lime-brand/20 transition-all group">
                <span className="text-[10px] font-mono text-lime-brand uppercase tracking-widest block font-bold mb-1.5 group-hover:text-lime-glow">대외 평판</span>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans font-light">
                  당신과 함께 변경 마을인 콘스의 최강 콤비, 압도적인 신체능력으로 전장을 지배합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Specific Specs Folder */}
          <div className="space-y-3.5 pt-1.5">
            <h4 className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-brand"></span>
              <span>상세 기록)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-black/45 border border-zinc-800/90 p-4 rounded-xl font-sans font-light">
              {[
                { label: '활동 나이', val: `${MAYRI_INFO.age}세`, cat: 'basic' },
                { label: '신체 신장', val: `${MAYRI_INFO.height}`, cat: 'basic' },
                { label: '주요 무구', val: `${MAYRI_INFO.weapon}`, cat: 'combat' },
              ].map((info, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-zinc-800/50 bg-zinc-950/30 hover:bg-zinc-950/65 hover:border-lime-brand/10 transition-all">
                  <span className="text-[10px] text-zinc-500 font-mono tracking-wider block font-bold mb-0.5 uppercase">{info.label}</span>
                  <span className="text-zinc-200 block font-serif font-bold text-xs leading-relaxed">{info.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
