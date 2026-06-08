/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DialogOption {
  text: string;
  nextId: number;
  affinityChange: number;
  feedback: string;
}

export interface DialogLine {
  id: number;
  speaker: string;
  text: string;
  expression: 'neutral' | 'smile' | 'blush' | 'stern' | 'combat';
  backgroundType: 'landscape' | 'study' | 'curtain';
  options?: DialogOption[];
}

export interface LoreCard {
  id: string;
  title: string;
  subtitle: string;
  era: string;
  description: string;
  details: string[];
}

export interface SecretDairyLog {
  id: number;
  date: string;
  title: string;
  secretContent: string;
  affinityRequired: number;
  isUnlocked: boolean;
}

export interface CharacterVoiceQuote {
  id: number;
  situation: string;
  textKOR: string;
  textEN: string;
  emotion: 'neutral' | 'smile' | 'blush' | 'stern' | 'combat';
}
