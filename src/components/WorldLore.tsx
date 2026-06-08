/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WORLD_LORE } from '../data';
import { Shield, Sparkles, MapPin, Sword, Calendar, Compass, Info, BookOpen, HelpCircle } from 'lucide-react';

export default function WorldLore() {
  const [selectedCity, setSelectedCity] = useState<string>('kons');

  // Interactive Cities Database
  const CITIES_DB: Record<string, {
    name: string;
    theme: string;
    role: string;
    desc: string;
    accent: string;
  }> = {
    legendio: {
      name: '수도 레젠디오',
      theme: '그야말로 대도시라는 말이 어울리는 대륙의 중심',
      role: '하늘을 향해 솟은 마천루와, 중세 건물의 이질적인 조화',
      desc: '성 대신 마천루가 존재하는, 현대 문명이 섞여들어간 거대 중세 도시.',
      accent: 'text-lime-brand'
    },
    kons: {
      name: '변경 시골 마을 「콘스」',
      theme: '자칭 평범한 시골 마을.',
      role: '당신과 메이리의 고향이자 주무대.',
      desc: '겉보기에는 평범한 시골 마을이지만... 그 이면에는 잦은 마물들의 침공으로 인해 길가의 농부마저 고블린 십여 마리를 너끈히 상대할 수 있는 저력이 숨겨져 있습니다.',
      accent: 'text-emerald-400'
    },
    ironkam: {
      name: '군사 요새 도시 아이언캄',
      theme: '극북의 설원 마수와 야만인 군세를 격멸하는 철벽 요새',
      role: '혹한에서 피어나는 철의 연꽃.',
      desc: '존재 자체로 대륙의 방패이며 강인한 전사들이 모이는 곳이자, 그들의 무덤이 되는 곳.',
      accent: 'text-sky-400'
    },
    cornite: {
      name: '항구도시 코르니테',
      theme: '타 대륙과 이어지는 대륙의 팔다리.',
      role: '제국 전열 함선 보급망',
      desc: '검은 석조 외벽과 마력 증기가 은은히 뿜어나오는 번화한 거대 선착장, 치안이 구린 뒷골목이 존재함.',
      accent: 'text-indigo-400'
    },
    chamart: {
      name: '예술도시 차마르',
      theme: '흰색 건물들에 페인트가 잔뜩 칠해진 도시.',
      role: '예술가들에게는 성지와 같은 장소.',
      desc: '차마르의 예술가들은 하나같이 나사가 빠져있지만, 그들만 건드리지 않으면 관광지로 괜찮은 곳.',
      accent: 'text-purple-400'
    },
    vega: {
      name: '농경도시 베가',
      theme: '대륙 최대 곡창지.',
      role: '존재 자체가 대륙의 생존을 책임지는 장소.',
      desc: '분명 중요한 장소인 건 맞으나, 단도직입적으로 말해 논밭뿐이라 재미가 없는 동네.',
      accent: 'text-amber-400'
    }
  };

  return (
    <div className="space-y-10 pb-12" id="world-lore-view">
      
      {/* Upper informational banner */}
      <div className="p-8 rounded-2xl border border-lime-brand/10 bg-dark-obsidian gothic-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-lime-brand/5 to-transparent pointer-events-none"></div>
        {/* Abstract vector dots */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(163,230,53,0.025)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-1 py-1 px-3 bg-lime-brand/10 border border-lime-brand/35 rounded text-[11px] text-lime-brand font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-lime-brand" />
            <span>World Lore</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-black text-white tracking-widest uppercase">
            세계관 요약
          </h2>
          <p className="text-xs md:text-sm text-zinc-300 leading-relaxed font-sans font-light">
            <p>과거, 어떤 위대한 예언자가 발전할 미래를 엿보아 미래의 기술들을 가져왔고,</p>
            <p>현대 기술과 중세가 절묘하게 섞인 지금의 세계가 되었습니다.</p>
            <p>핸드폰은 필수품이죠!</p>
          </p>
        </div>
      </div>

      {/* Interactive World Map Grid */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 border-b border-zinc-800 pb-3">
          <Compass className="w-5 h-5 text-lime-brand" />
          <h3 className="font-serif text-sm md:text-base font-bold text-zinc-100 uppercase tracking-widest">
            MAP ARCHIVE <span className="text-xs text-lime-brand ml-1">아름다운 6대 영역</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Menu selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {[
              { id: 'kons', name: '변경 시골 마을 「콘스」', tag: '당신들의 무대', bg: 'hover:border-emerald-500/40' },
              { id: 'vega', name: '농경도시 베가', tag: '풍요와 황금빛 밀밭', bg: 'hover:border-amber-500/40' },
              { id: 'legendio', name: '수도 레젠디오', tag: '하늘을 찌르는 마천루', bg: 'hover:border-lime-brand/40' },
              { id: 'ironkam', name: '군사도시 아이언캄', tag: '전사들의 무덤이자 무대', bg: 'hover:border-sky-500/40' },
              { id: 'cornite', name: '항구도시 코르니테', tag: '연안 무역 관문', bg: 'hover:border-indigo-500/40' },
              { id: 'chamart', name: '예술도시 차마르', tag: '예술가들의 성지', bg: 'hover:border-purple-500/40' },
            ].map((bt) => (
              <button
                key={bt.id}
                onClick={() => setSelectedCity(bt.id)}
                className={`py-3.5 px-4 text-left rounded-lg border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                  selectedCity === bt.id
                    ? 'bg-gradient-to-r from-zinc-900 to-black text-white border-lime-brand font-bold shadow-md shadow-lime-brand/5'
                    : 'bg-dark-obsidian text-zinc-400 border-zinc-800 hover:text-zinc-100 ' + bt.bg
                }`}
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-serif font-semibold block">{bt.name}</span>
                  <span className="text-[10px] font-mono text-zinc-500 block">{bt.tag}</span>
                </div>
                <MapPin className={`w-4 h-4 ${selectedCity === bt.id ? 'text-lime-brand animate-bounce' : 'text-zinc-600'}`} />
              </button>
            ))}
          </div>

          {/* Details viewer */}
          <div className="lg:col-span-8 p-6 rounded-xl border border-zinc-800 bg-dark-obsidian/40 flex flex-col justify-between relative overflow-hidden min-h-[280px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-lime-brand/5 to-transparent pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center space-x-2">
                <span className={`text-base font-serif font-black ${CITIES_DB[selectedCity].accent}`}>
                  {CITIES_DB[selectedCity].name}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-2 py-0.5 bg-black rounded">
                  {CITIES_DB[selectedCity].role}
                </span>
              </div>

              <span className="text-xs text-zinc-400 font-mono font-medium block italic uppercase">
                {CITIES_DB[selectedCity].theme}
              </span>

              <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-sans font-light">
                {CITIES_DB[selectedCity].desc}
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
