/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ASSETS, SECRET_DIARY_ENTRIES } from '../data';
import { ShieldAlert, Lock, Unlock, Eye, HelpCircle, Heart, FolderHeart, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SecretVaultProps {
  affinity: number;
}

export default function SecretVault({ affinity }: SecretVaultProps) {
  const [password, setPassword] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPw = password.trim().toLowerCase();

    // Check password match (mayri, meiri, 메이리)
    const isPasswordCorrect = cleanPw === 'mayri' || cleanPw === 'meiri' || cleanPw === '메이리';

    if (isPasswordCorrect) {
      setIsUnlocked(true);
      setErrorText('');
    } else {
      setErrorText('❌ 비밀 서약 해제 실패 (힌트: 메이리의 영문 소문자 이름을 기입하십시오.)');
    }
  };

  return (
    <div className="pb-12" id="secret-vault-arena">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          /* Locked State View */
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-md mx-auto text-center space-y-8 py-12"
          >
            <div className="relative mx-auto w-20 h-20 rounded-full bg-red-950/20 border border-red-950 flex items-center justify-center text-red-500 animate-pulse">
              <Lock className="w-8 h-8 text-red-500" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl md:text-2xl font-bold tracking-widest text-zinc-100 uppercase">
                스포일러
              </h3>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-sm mx-auto">
                해당 부분에서는 본 작품의 중요 스포일러를 다룹니다. 열람에 주의해 주세요.
              </p>
            </div>

            {/* Prompt Form */}
            <form onSubmit={handleUnlock} className="bg-dark-obsidian p-6 rounded-xl border border-zinc-800 space-y-4 shadow-2xl">
              <div className="space-y-1 text-left">
                <label className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase font-black">
                  ENTER PASSCODE <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="대소문자 구분 없이 메이리 영문 표기..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-lime-brand focus:ring-1 focus:ring-lime-brand/35 text-zinc-100 rounded-lg py-3 px-4 text-center font-mono placeholder-zinc-700 transition tracking-widest text-sm"
                />
              </div>

              {errorText && (
                <p className="text-xs text-red-400 font-sans leading-relaxed bg-red-950/20 p-3 rounded border border-red-950/50 text-left">
                  {errorText}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-black hover:bg-lime-brand hover:border-lime-brand rounded-lg transition-all duration-300 font-serif text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                (Enter)
              </button>
            </form>

            <p className="text-[10px] text-zinc-500 leading-relaxed font-sans max-w-xs mx-auto">
              ※ 메이리의 본명 영문 소문자(<code className="text-lime-brand font-mono">mayri</code>)를 입력창에 정확히 기입하십시오.
            </p>
          </motion.div>
        ) : (
          /* Unlocked State View showing innermost thoughts! */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-10 animate-fade-in"
          >
            {/* Decoded Top Header Banner */}
            <div className="px-6 py-4 rounded-xl border border-lime-brand/30 bg-zinc-950 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-[0_0_20px_rgba(163,230,53,0.05)]">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-lime-brand/10 rounded-full border border-lime-brand/35 text-lime-brand">
                  <Unlock className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif text-sm md:text-base font-black text-zinc-100 tracking-widest uppercase">
                    🔒 개방 완료
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    무지성 닥돌에 대한 명확한 「이유」.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsUnlocked(false);
                  setPassword('');
                }}
                className="px-4 py-2 border border-zinc-800 text-zinc-500 hover:text-red-400 hover:border-red-950/65 rounded text-xs transition cursor-pointer"
              >
                재잠금
              </button>
            </div>

            {/* Main Chamber grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Private illustration block */}
              <div className="md:col-span-12 lg:col-span-4 space-y-4">
                <div className="p-4 rounded-2xl border border-zinc-800 bg-dark-obsidian shadow-xl space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-lime-brand font-black uppercase block text-center">
                    MAYRI
                  </span>

                  {/* Portrait representing her true self */}
                  <div className="relative rounded-lg overflow-hidden border border-zinc-900 bg-black min-h-[350px]">
                    <img
                      src={ASSETS.mayriPortrait}
                      alt="Mayri Confessed Soft Gaze"
                      className="w-full h-full object-cover transition duration-700 blur-[0.4px]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none"></div>
                    
                    {/* Beautiful text stamp */}
                    <div className="absolute bottom-4 inset-x-4 p-3 bg-black/90 border border-lime-brand/30 rounded-md text-center">
                      <span className="text-xs font-serif font-bold text-lime-brand">
                      변경 『최강』의 모험가.                    
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* List of Secret Records (Unlocked & Listed clearly) */}
              <div className="md:col-span-12 lg:col-span-8 space-y-6">
                <div className="flex items-center space-x-2 pb-2 border-b border-zinc-850">
                  <FolderHeart className="w-5 h-5 text-lime-brand" />
                  <h3 className="font-serif text-sm md:text-base font-bold text-zinc-100 uppercase tracking-widest">
                    비밀
                  </h3>
                </div>

                <div className="space-y-4" id="con-diary-rack">
                  {SECRET_DIARY_ENTRIES.map((entry) => {
                    const contentWithUser = entry.secretContent.replace(/{user}/g, '당신');
                    return (
                      <div
                        key={entry.id}
                        className="border rounded-xl p-5 bg-zinc-900/80 border-zinc-800/80 hover:border-lime-brand/35 shadow-md shadow-lime-brand/5 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-3.5">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-lime-brand/10 text-lime-brand">
                              <FileText className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-widest block font-bold text-zinc-500">
                                {entry.date}
                              </span>
                              <h4 className="font-serif text-xs md:text-sm font-bold text-zinc-100">
                                {entry.title}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Text body */}
                        <div className="bg-black/60 border border-zinc-850/70 p-4 rounded-lg">
                          <p className="text-xs md:text-sm text-zinc-200 font-serif leading-relaxed italic whitespace-pre-line pl-3 border-l-2 border-l-lime-brand font-medium">
                            {contentWithUser}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
