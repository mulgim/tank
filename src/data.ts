/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DialogLine, LoreCard, SecretDairyLog, CharacterVoiceQuote } from './types';

export const ASSETS = {
  // Utilizing the newly generated combat portrait of Mayri (Black hair, green streaks in high side-up ponytail, gold eyes)
  mayriPortrait: '/src/assets/images/mayri_combat_portrait_1780942252413.png',
  // Utilizing the preexisting gorgeous fantasy backdrop
  medievalLandscape: '/src/assets/images/medieval_landscape_1780940237124.png',
};

export const MAYRI_INFO = {
  name: '메이리 (Mayri)',
  title: '당신을 바라보는 장난기 넘치는 시선이 느껴진다.',
  age: '24',
  birthday: '10월 11일 (고향 콘스 마을의 소장 수복 기적일)',
  height: '162cm',
  weapon: '롱소드 & 대형 카이트 실드',
  hobby: '소꿉친구({user}) 방 얹혀살기, 자뻑하기, 가문 비전의 비스킷과 기사단 파이 시식',
  like: '{user}의 모든 것, 뻔뻔하게 장난 기습하기(뻔뻔하지만 속으로는 자꾸 쿵쾅거림), {user}의 다정한 마법 치료',
  dislike: '이름 모르는 이가 다가와 간사하게 추근거리는 행위, 다른 모르는 여자들이 {user}에게 말을 섞는 것',
  description: '검은색에 선명한 녹색 브릿지들이 수놓아진 귀여운 사이드업 포니테일을 흔드는 24세 여기사. 금안과 고양이상 고운 눈매, 풍만하고 탄력 있는 미인으로, 무엇이든 능글맞고 뻔뻔하게 처신하며 다치면 당연하다는 듯 소꿉친구({user})의 탓으로 애교를 피웁니다. 타인에게는 가혹할 정도로 얼음장 벽을 칩니다.',
};

export const CHARACTER_QUOTES: CharacterVoiceQuote[] = [
  {
    id: 1,
    situation: '기본 장난 (Teasing)',
    textKOR: '“어머나, 그 마수가 나쁜 게 아니라 네가 치유 신호를 늦게 발동한 탓이 아닐까? 자~ 오랜 소꿉친구를 위해 좀 더 바짝 다정하게 치유 마법을 흩뿌려 줘!”',
    textEN: '"My, it\'s not that the monster was bad, but perhaps your healing spell was a bit too late? C\'mon~ give some cozy support to your pretty childhood friend!"',
    emotion: 'neutral',
  },
  {
    id: 2,
    situation: '기습 스킨십 (Physical Touch)',
    textKOR: '“어머, 실례. 네 방 침대 시트가 가을빛처럼 너무나 푹신해 보여서, 나도 모르게 눕고 널 안아 버렸네? 왜 그렇게 귀가 토마토 씨앗처럼 빨개져?”',
    textEN: '"Oops, pardon me. Your bedsheets looked so soft, I couldn\'t help but cuddle you. Why are your ears turning as red as a tomato?"',
    emotion: 'blush',
  },
  {
    id: 3,
    situation: '살림과 기습 (Aesthetic Vanity)',
    textKOR: '“와... 지금 이렇게나 눈이 정화될 정도로 세상에서 가장 예쁘고 듬직한 소꿉친구가 맛있는 야식을 같이 먹자고 하는데 그걸 매정히 외면하겠다고? 바보!”',
    textEN: '"Wow... would you really turn down a mid-night snack request from the most beautiful and adorable childhood friend in the world? How cruel!"',
    emotion: 'smile',
  },
  {
    id: 4,
    situation: '독점과 질투심 (Jealousy)',
    textKOR: '“방금 시장 모퉁이 장미 수녀단이랑 도란도란 밀담 나누는 눈매... 다 봤거든? 뭐, 사령부 공무였다고? 구~차하고 뻔뻔한 장난은 그만 치고, 얼른 보물 보관함 비밀 수호인장 암호나 알려볼래?”',
    textEN: '"I saw you chatting with that cathedral member... Oh, official business? Stop making pathetic excuses and tell me your vault passcode, will you?"',
    emotion: 'stern',
  },
  {
    id: 5,
    situation: '평소의 기백 (In Combat)',
    textKOR: '“앞뒤 가릴 것 없이 최전선 한가운데 돌격~! 어차피 뒤엔 내 소중한 파트너가 지키고 서서 다 고쳐 줄 테니까! 나만 딱 믿고 있어!”',
    textEN: '"Charging straight into the thick of battle~! After all, my precious partner is behind me to mend everything! Just place your trust in me!"',
    emotion: 'combat',
  }
];

export const WORLD_LORE: LoreCard[] = [
  {
    id: 'history_1',
    title: '수도 레젠디오와 은빛 성채의 위용',
    subtitle: 'The Majestic Silver Citadel of Lezendio',
    era: '동맹력 842년 - 대합치 세역',
    description: '선대 맹장 기사단의 정신 아래 비전의 신성 전례 기사단원들과 고도로 발달한 마법 수호진들이 공존하며 찬란한 은광을 뿜어내는 중심부 영지입니다.',
    details: [
      '수도 중심부에는 가파른 마천루 대신 고결한 은빛 카이트 성채들을 둘러싼 고대 방어 마력 마천탑들이 솟아 있습니다.',
      '수공 기사단원들도 영광스런 철판 검을 잡는 동시에 전술 수호 석판을 검수해 실시간 마투 진용을 통제하곤 합니다.',
      '가장 외곽의 농가 지구에도 위험 수호 마법 결계가 안전하게 급행 설치되어 온 평야에 단란한 생활상이 고요하게 유지됩니다.'
    ]
  },
  {
    id: 'history_2',
    title: '변경의 철옹성 시골마을 「콘스」',
    subtitle: 'The Outrageously Strong Frontier, Kons',
    era: '전투 지령 849년',
    description: '메이리와 주인공이 소꿉친구로서 자라난 무패의 시골마을. 겉보기엔 그저 고요한 농가 단지 같으나, 주기적으로 극히 거친 마수가 산발해 주민들의 본능 신체 기량이 무시무시하게 승화된 요충지입니다.',
    details: [
      '마을 주민 농부 한 명이 성난 와이번의 목덜미를 가래로 내리쳐 기습 진압할 정도의 스펙을 보입니다.',
      '이 비정상적으로 강력한 변방 가드에서 소꼽친구인 메이리와 주인공은 콘스 최강의 모험가 듀오로 등극했습니다.',
      '메이리는 이곳에서 어떤 무쇠 갑옷도 주먹으로 찢어버릴 무인 기량을 고요히 육성했습니다.'
    ]
  },
  {
    id: 'history_3',
    title: '대륙의 영광스런 4대 영역 (Vega, Chamar, Ironkam, Cornite)',
    subtitle: 'Ecosystem of the Dual-Civilization Kingdoms',
    era: '현재 동맹 협약 851년',
    description: '마법 전령 인장과 전술 보급망이 연동되는 드넒은 제국 연합 하에서 각 지역은 독자적인 군사 가동 가치를 유지하고 있습니다.',
    details: [
      '농경 기지 베가: 대륙의 모든 식량과 곡물을 책임지는 풍요롭고도 평화로운 대농장 지대.',
      '예술도시 차마르: 은은한 백색 대리석 외벽과 현대적인 패션 축제, 성가 음악회가 열리는 유람의 명소.',
      '항구도시 코르니테: 거대한 증기 무역선과 마력 추진 장치들이 검은 연기를 내뿜는 번화한 해상 교역 마경.',
      '군사도시 아이언캄: 최북단 야수 군대와 사투하는 혹야의 요새도시이자 영웅적 듀오들이 주로 파견되는 설원 요람.'
    ]
  }
];

export const VISUAL_NOVEL_PROLOGUE: DialogLine[] = [
  {
    id: 1,
    speaker: '메이리',
    text: '“어머나~ 콘스 최고의 군사이자 내 사랑스러운 소꿉친구 씨! 마침 배달 마술함에서 치킨이 소환됐는데 스마트론 확인 안 하고 뭘 그리 멍청하게 쳐다보고 계실까?”',
    expression: 'smile',
    backgroundType: 'landscape',
    options: [
      {
        text: '“전투복도 다 안 벗고 사복 숄더후드 밑에 또 침대에 덜렁 누워 있는 거냐?”',
        nextId: 2,
        affinityChange: 15,
        feedback: '메이리는 가볍게 웃으며 혀를 낼름 내밉니다. 기습 스킨십에 다정함이 실립니다. (+15)'
      },
      {
        text: '“정말이지 넌 내 방을 너무 기탄없이 기습하는구나... 치킨 냄새는 좋네.”',
        nextId: 3,
        affinityChange: 25,
        feedback: '자기애가 넘치던 그녀가 당신의 은근한 반김에 기뻐하며 뺨을 슬그머니 부빕니다. (+25)'
      }
    ]
  },
  {
    id: 2,
    speaker: '메이리',
    text: '“뻔뻔하긴~! 이렇게나 풍만하고 압도적인 미녀 소꿉친구 누님이 네 전담 맹장 기사로 계약되어서 공짜 보디가드 서약까지 지켜주는데, 방 하나 대여해 주는 게 뭐 그리 아까워? 쳇~ 안 그래?”',
    expression: 'neutral',
    backgroundType: 'landscape',
    options: [
      {
        text: '“내가 구차하게 고블린 군세를 기획서대로 다 잡고 나면 칭찬이라도 곱게 해 주던가.”',
        nextId: 4,
        affinityChange: 20,
        feedback: '메이리는 당신의 불평이 즐거운 장난인 걸 압니다. 어깨를 툭 기댑니다. (+20)'
      },
      {
        text: '“아니, 아깝진 않아... 네가 내 옆에 얹혀살아 주는 건 큰 위로니까.”',
        nextId: 5,
        affinityChange: 35,
        feedback: '솔직하고 따뜻한 위안에 메이리가 뺨을 확연히 붉히고 당황하며 몸을 거머쥡니다! "너... 갑자기 무슨 달콤한 시를 적는 거야?" (+35)'
      }
    ]
  },
  {
    id: 3,
    speaker: '메이리',
    text: '“그럼 식기 전에 얼른 먹자구! 아, 참. 내일 북방의 군사도시 아이언캄 쇄빙 요새에서 사역 마수 가드를 퇴치하는 랭킹 보스 작전 공조 서한이 앱으로 전달됐어. 또 한바탕 내가 닥돌해서 다 썰어버릴 텐데, 치유 물뿌리개처럼 나만 쫓아다니며 회복해 줘?”',
    expression: 'neutral',
    backgroundType: 'landscape',
    options: [
      {
        text: '“전략도 없이 적진 무리 한복판으로 또 닥돌하려고? 제발 다치지 마.”',
        nextId: 4,
        affinityChange: 25,
        feedback: '정교하게 내비친 당신의 진실한 걱정에 메이리가 고개를 빼꼼히 돌려 금안을 빛냅니다. (+25)'
      },
      {
        text: '“너는 힘이 무지막지해서 강철도 맨손으로 찢잖아, 왜 맨날 다쳐서 엄살이야.”',
        nextId: 6,
        affinityChange: 15,
        feedback: '예리한 지적에 메이리가 흠칫 굳어졌으나 곧 장난기 넘치게 화제를 무마합니다. (+15)'
      }
    ]
  },
  {
    id: 4,
    speaker: '메이리',
    text: '“꺄핫, 영웅적인 기사라면 전장의 쿵쿵거리는 소리 한복판을 들이받는 게 정의지! 자, 잡담하고 가기 전에 바로 내일 아이언캄 협곡 시뮬레이션 전선에 진입전 조정을 해보자구! 준비는 끝났지?”',
    expression: 'combat',
    backgroundType: 'landscape',
    options: [
      {
        text: '“그래, 늘 그렇듯 기습 개시하자! (전장에 돌입)”',
        nextId: 7,
        affinityChange: 20,
        feedback: '아이언캄 혹한 협곡으로 메이리와 돌파를 전력으로 시작합니다! (+20)'
      }
    ]
  },
  {
    id: 5,
    speaker: '메이리',
    text: '“그, 그런 미사여구를 아무렇지도 않게 유도하는 건 반칙 아니냐구... 바보 소꿉친구 녀석. 괜히 내 볼이 심장 소리와 섞여 쿵쾅거리잖아... 흥! 하지만 내일 북부 아이언캄 협곡에 고위험급 마수 군세가 깔렸대. 어서 전장으로 조력해 달라고!”',
    expression: 'blush',
    backgroundType: 'landscape',
    options: [
      {
        text: '“좋아, 너의 든든한 방패 수호를 믿고 전진한다!”',
        nextId: 7,
        affinityChange: 20,
        feedback: '가장 소중한 동반자와 사나운 눈보라 협곡으로 고속 진력합니다. (+20)'
      }
    ]
  },
  {
    id: 6,
    speaker: '메이리',
    text: '“어, 어머무시하게 힘이 강한 기사라 해도 고결한 미인인데 찢다니 교양 없는 소리 작작 해~! 난 가녀린 고양이라서 조그마한 스쳐 기운 상처도 아프단 말이지. 그러니까 네 영웅적 힐링 마법이 주입되지 않으면 단 1보도 못 움직인다 이거야! 자, 아이언캄 격전지로 동반 행진!”',
    expression: 'neutral',
    backgroundType: 'landscape',
    options: [
      {
        text: '“더는 말싸움 못 당하겠군. 가자, 아이언캄으로!”',
        nextId: 7,
        affinityChange: 20,
        feedback: '전술 태세를 무장하고 사역 돌격을 감행합니다. (+20)'
      }
    ]
  },
  {
    id: 7,
    speaker: '메이리',
    text: '“우왓! 적들의 사나운 마탄 군단이 협벽 구석에서 불을 뿜는군! 자, 대검을 고쳐 쥐고 단숨에 다 뚫고 들어간다! 파트너 씨는 딱 뒤에서 내 화려한 칼춤만 넋 놓고 구경... 꺄악?! 조심해, 뒤에 사각지대 절벽 돌출구에 저주 주술 참격이 가해진다!!!”',
    expression: 'combat',
    backgroundType: 'landscape',
    options: [
      {
        text: '“위험해, 메이리! (몸을 날려 저주 공격을 정면으로 막는다)”',
        nextId: 8,
        affinityChange: 50,
        feedback: '🚨 극적인 생사 구원 사건 발생! 당신은 저주 화살을 정면으로 대신 맞고 갈비통이 파열되어 사경을 헤맵니다!'
      },
      {
        text: '“메이리, 뒤는 늦었으니 내 마력 방어 기둥을 발진해 몸으로 다 받아내라!”',
        nextId: 9,
        affinityChange: -15,
        feedback: '메이리가 고열의 무기에 기동이 휘말려 절벽 아래로 쓸려 내려 사경을 헤맵니다! 겨우 당신의 소생술로 기사회생합니다.'
      }
    ]
  },
  {
    id: 8,
    speaker: '메이리',
    text: '“너... 너 바보야?!?! 검도 똑바로 쥘 줄 모르는 유약한 참모 주제에 왜 나 대신 이런 끔찍한 검빛 저주를 온몸으로 다 덮어쓰고 피를 흘리는 건데!!! 제발, 제발 눈 좀 떠 봐... 내가, 내가 치유해 줄 수도 없고, 으아앙!!! 죽지 마... 제발!!!”',
    expression: 'combat',
    backgroundType: 'landscape',
    options: [
      {
        text: '“(미소를 지으며) 메이리, 수다쟁이 소꼽친구가 무사해서... 다행이야.”',
        nextId: 10,
        affinityChange: 60,
        feedback: '🚨 생사 극치 구원 이벤트 완료! 메이리가 마침내 오열하며 가문에 맺힌 본질적인 고백 결계를 허물었습니다!'
      }
    ]
  },
  {
    id: 9,
    speaker: '메이리',
    text: '“꺄아아악!!! ...윽, 칼바람에 갑옷이 깨지고 독장막이 기도를 조여오는데... 너무 눈물이 난다... 무섭고 아픈 것보다, 네가 뒤에서 내 몰골을 보고 공포 속에서 영영 주저앉을까 봐 그게 너무 극심해서... 흐윽, 으앙!!! 나 좀 꼭 안아줘, 살려내 줘 소꿉친구야!!!”',
    expression: 'combat',
    backgroundType: 'landscape',
    options: [
      {
        text: '“마력 수치를 극한으로 과부하시켜 메이리의 전신 저주를 정화하고 꼭 신체를 감싸 안는다.”',
        nextId: 10,
        affinityChange: 60,
        feedback: '🚨 생사 극치 구원 이벤트 완료! 사경을 방어하는 다정한 포옹과 기적의 정화술을 통해 메이리의 진짜 진실이 해방됩니다!'
      }
    ]
  },
  {
    id: 10,
    speaker: '메이리',
    text: '“무, 무사해서 정말 다행이야... 나 진짜로 온 가슴이 갈기갈기 찢겨서 평생 이 세상에서 내 가장 소중한 사람을 잃고 홀로 미쳐버릴 뻔했단 말야... 이제 절대 나 홀로 무모한 짓 하지 않을게. 그리고... 지밀 보서고 보물 열쇠 번호는 내 애칭인 「mayri」야. 얼른 거기 비밀 서고 일지에 와 줘. 내 진짜 속죄와 본모습을 적은 비밀장을 봐 줘.”',
    expression: 'blush',
    backgroundType: 'landscape',
    options: [] // END. Unlocks state fully!
  }
];

export const SECRET_DIARY_ENTRIES: SecretDairyLog[] = [
  {
    id: 1,
    date: '비밀이자 진실',
    title: '사실 모든 부상은 고의였다.',
    secretContent: '메이리는 사실 현재처럼 무지성 돌격을 감행하더라도 한 대도 맞지 않을 수 있을 만큼 강합니다.\n어릴 때부터 같이 커 온 당신에게 반하면서, 자신을 안 돌아봐주지 않을까 하는 걱정이 커져갔고.\n당신에게 합법적으로 관심을 받기 위해,\n그리고 당신이 다른 사람들에게 신경쓰게 하지 못하게 하기 위해 고의적인 부상을 감행해 치료를 받아온 것입니다.',
    affinityRequired: 30, // Low affinity once saved, but requires Save cleared
    isUnlocked: false,
  },
];
