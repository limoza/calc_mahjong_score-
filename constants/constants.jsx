export const QuestionList = {
  naki: {
    id: 'naki',
    title: 'ポン、チー、明槓をしていますか？',
    description: 'ポン、チー、明槓をしていますか？',
    choices: ['はい', 'いいえ'],
    values: ['yes', 'no'],
  },
  ronTsumo: {
    id: 'ronTsumo',
    title: 'ツモ、ロンどちらで上がりましたか？',
    description: 'ツモ、ロンどちらで上がりましたか？',
    choices: ['ツモ', 'ロン'],
    values: ['tsumo', 'ron'],
  },
  oya: {
    id: 'oya',
    title: '親ですか？',
    description: '親ですか？',
    choices: ['親', '子'],
    values: ['oya', 'ko'],
  },
}

export const disabledKeys = {
  oyaDisabledKey: 'oyaDisabled',
  koDisabledKey: 'koDisabled',
  ronDisabledKey: 'ronDisabled',
  tsumoDisabledKey: 'tsumoDisabled',
  nakiDisabledKey: 'nakiDisabled',
  shuntsuDisabledKey: 'shuntsuDisabled',
  toitsuDisabledKey: 'toitsuDisabled',
  kotsuDisabledKey: 'kotsuDisabled',
  kantsuDisabledKey: 'kantsuDisabled',
  jihaiDisabledKey: 'jihaiDisabled',
}

export const yakuNumberSections = [
  {
    yakuNumber: '1',
    alias: '1翻役',
  },
  {
    yakuNumber: '2',
    alias: '2翻役',
  },
  {
    yakuNumber: '3',
    alias: '3翻役',
  },
  {
    yakuNumber: '6',
    alias: '6翻役',
  },
  {
    yakuNumber: '13',
    alias: '役満',
  },
  {
    yakuNumber: '26',
    alias: 'ダブル役満',
  },
]

export const yakuNumberGroup = [
  [1],
  [2],
  [3],
  [4, 5],
  [6, 7],
  [8, 9, 10],
  [11, 12],
  [13],
  [26],
]

export const yakuEnglishNameGroup = [
  'iHan',
  'ryanHan',
  'sanHan',
  'mangan',
  'haneman',
  'baiman',
  'sanbaiman',
  'yakuman',
  'doubleYakuman',
]

export const score = {
  iHan: {
    name: '1翻',
    payment: {
      parentAgari: {
        score: '1500',
        ronAgari: '1500',
        tsumoAgari: {
          childrenPayment: '500',
        },
      },
      childrenAgari: {
        score: '1000',
        ronAgari: '1000',
        tsumoAgari: {
          parentPayment: '500',
          childrenPayment: '300',
        },
      },
    },
  },
  ryanHan: {
    name: '2翻',
    payment: {
      parentAgari: {
        score: '3000',
        ronAgari: '3000',
        tsumoAgari: {
          childrenPayment: '1000',
        },
      },
      childrenAgari: {
        score: '2000',
        ronAgari: '2000',
        tsumoAgari: {
          parentPayment: '1000',
          childrenPayment: '500',
        },
      },
    },
  },
  sanHan: {
    name: '3翻',
    payment: {
      parentAgari: {
        score: '6000',
        ronAgari: '6000',
        tsumoAgari: {
          childrenPayment: '2000',
        },
      },
      childrenAgari: {
        score: '4000',
        ronAgari: '4000',
        tsumoAgari: {
          parentPayment: '2000',
          childrenPayment: '1000',
        },
      },
    },
  },
  mangan: {
    name: '満貫',
    payment: {
      parentAgari: {
        score: '12000',
        ronAgari: '12000',
        tsumoAgari: {
          childrenPayment: '4000',
        },
      },
      childrenAgari: {
        score: '8000',
        ronAgari: '8000',
        tsumoAgari: {
          parentPayment: '4000',
          childrenPayment: '2000',
        },
      },
    },
  },
  haneman: {
    name: '跳満',
    payment: {
      parentAgari: {
        score: '18000',
        ronAgari: '18000',
        tsumoAgari: {
          childrenPayment: '6000',
        },
      },
      childrenAgari: {
        score: '12000',
        ronAgari: '12000',
        tsumoAgari: {
          parentPayment: '6000',
          childrenPayment: '3000',
        },
      },
    },
  },
  baiman: {
    name: '倍満',
    payment: {
      parentAgari: {
        score: '24000',
        ronAgari: '24000',
        tsumoAgari: {
          childrenPayment: '8000',
        },
      },
      childrenAgari: {
        score: '16000',
        ronAgari: '16000',
        tsumoAgari: {
          parentPayment: '8000',
          childrenPayment: '4000',
        },
      },
    },
  },
  sanbaiman: {
    name: '三倍満',
    payment: {
      parentAgari: {
        score: '36000',
        ronAgari: '36000',
        tsumoAgari: {
          childrenPayment: '12000',
        },
      },
      childrenAgari: {
        score: '24000',
        ronAgari: '24000',
        tsumoAgari: {
          parentPayment: '12000',
          childrenPayment: '6000',
        },
      },
    },
  },
  yakuman: {
    name: '役満',
    payment: {
      parentAgari: {
        score: '48000',
        ronAgari: '48000',
        tsumoAgari: {
          childrenPayment: '16000',
        },
      },
      childrenAgari: {
        score: '32000',
        ronAgari: '32000',
        tsumoAgari: {
          parentPayment: '16000',
          childrenPayment: '8000',
        },
      },
    },
  },
  doubleYakuman: {
    name: 'ダブル役満',
    payment: {
      parentAgari: {
        score: '96000',
        ronAgari: '96000',
        tsumoAgari: {
          childrenPayment: '32000',
        },
      },
      childrenAgari: {
        score: '64000',
        ronAgari: '64000',
        tsumoAgari: {
          parentPayment: '32000',
          childrenPayment: '16000',
        },
      },
    },
  },
}

export const errorText = {
  IsOver: `13翻以下で選択してください`,
}

export const yakus = [
  {
    id: 'reach',
    content: '立直',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `テンパイ時に「リーチ」と宣言し、場に1,000点棒を出すことで成立`,
    annotationTexts: [],
  },
  {
    id: 'menzenchintsumo',
    content: 'ツモ',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `ポン・チー・明槓をせずに、ツモによって上がることで成立`,
    annotationTexts: [],
  },
  {
    id: 'ippatsu',
    content: '一発',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `リーチ宣言後の1巡目以内に、上がることで成立`,
    annotationTexts: [`1巡目以内にポン・チー・明槓がされた場合不成立`],
  },
  {
    id: 'haku',
    content: '白',
    yakuNumber: '1',
    explanationText: `白で刻子や槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'hatsu',
    content: '發',
    yakuNumber: '1',
    explanationText: `發で刻子や槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'chun',
    content: '中',
    yakuNumber: '1',
    explanationText: `中で刻子や槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'jikazehai',
    content: '自風牌',
    yakuNumber: '1',
    explanationText: `自風牌で刻子や槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'bakazehai',
    content: '場風牌',
    yakuNumber: '1',
    explanationText: `場風牌で刻子や槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'tanyao',
    content: '断么九',
    yakuNumber: '1',
    explanationText: `2~8の牌のみで手牌を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'pinfu',
    content: '平和',
    yakuNumber: '1',
    explanationText: `4つのメンツをすべて順子で揃えると成立`,
    annotationTexts: [
      `頭は三元牌、場風牌、自風牌以外で揃える`,
      `両面待ちの場合のみ成立`,
    ],
  },
  {
    id: 'ipeko',
    content: '一盃口',
    yakuNumber: '1',
    explanationText: `同じ種類の牌で、同じ順子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'haitei',
    content: '海底撈月',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `局の最後の牌でツモで上がると成立`,
    annotationTexts: [],
  },
  {
    id: 'hotei',
    content: '河底撈魚',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `局の最後の打牌で上がると成立`,
    annotationTexts: [],
  },
  {
    id: 'rinshankaiho',
    content: '嶺上開花',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `カンした時にツモる嶺上牌で上がると成立`,
    annotationTexts: ['槍槓でロンされた場合は不成立'],
  },
  {
    id: 'chankan',
    content: '槍槓',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `他家が加槓した牌で上がると成立`,
    annotationTexts: [],
  },
  {
    id: 'dora',
    content: 'ドラ',
    yakuNumber: '1',
    explanationImage: 'common',
    explanationText: `ドラ牌を持っていることで成立`,
    annotationTexts: [
      `ドラ牌1枚ごとに1翻つく`,
      `ドラは役ではないため、ドラのみで上がれない`,
    ],
  },
  {
    id: 'doubleReach',
    content: 'ダブル立直',
    yakuNumber: '2',
    explanationImage: 'common',
    explanationText: `鳴きのない1巡目でリーチをかけることで成立`,
    annotationTexts: [`リーチをかける前に他家が鳴いた場合は不成立`],
  },
  {
    id: 'sanshokuDoujun',
    content: '三色同順',
    yakuNumber: '2',
    explanationText: `萬子、筒子、索子のすべてで同じ数字の順子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'sanshokuDoko',
    content: '三色同刻',
    yakuNumber: '2',
    explanationText: `萬子、筒子、索子のすべてで同じ数字の刻子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'toitoiho',
    content: '対々和',
    yakuNumber: '2',
    explanationText: `4つの面子をすべて刻子、もしくは槓子で揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'chitoitsu',
    content: '七対子',
    yakuNumber: '2',
    explanationText: `対子を7つ揃えることで成立`,
    annotationTexts: [`同牌が4枚の場合、2つの対子と見なされず、七対子は不成立`],
  },
  {
    id: 'ikkitsukan',
    content: '一気通貫',
    yakuNumber: '2',
    explanationText: `萬子、筒子、索子のいずれか1種で、[123][456][789]の順子を揃えることで成立`,
    annotationTexts: [],
  },
  {
    id: 'chanta',
    content: '混全帯幺九',
    yakuNumber: '2',
    explanationText: `面子と頭のすべてで、1,9牌もしくは字牌で含めて揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'sananko',
    content: '三暗刻',
    yakuNumber: '2',
    explanationText: `暗刻を3つ揃えると成立`,
    annotationTexts: [
      `鳴いていいのは残り1面子のみ`,
      `3つ目の刻子をロンで揃えた場合は不成立`,
    ],
  },
  {
    id: 'shosangen',
    content: '小三元',
    yakuNumber: '2',
    explanationText: `白・發・中のいずれか1種で頭、残り2種で刻子もしくは槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'honroto',
    content: '混老頭',
    yakuNumber: '2',
    explanationText: `面子と頭のすべてで、1,9牌もしくは字牌で揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'sankantsu',
    content: '三槓子',
    yakuNumber: '2',
    explanationText: `槓子を3つ揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'honitsu',
    content: '混一色',
    yakuNumber: '3',
    explanationText: `萬子、筒子、索子のいずれか1種のみと字牌で揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'ryanpeko',
    content: '二盃口',
    yakuNumber: '3',
    explanationText: `同じ種類の牌で、同じ順子を2面子揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'junchan',
    content: '純全帯公九',
    yakuNumber: '3',
    explanationText: `面子と頭のすべてで、1,9牌を含めて揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'chinitsu',
    content: '清一色',
    yakuNumber: '6',
    explanationText: `萬子、筒子、索子のいずれか1種のみで揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'suanko',
    content: '四暗刻',
    yakuNumber: '13',
    explanationText: `4つの面子をすべて暗刻で揃えると成立`,
    annotationTexts: [`単騎待ちでない場合はツモ上がりのみ成立`],
  },
  {
    id: 'daisangen',
    content: '大三元',
    yakuNumber: '13',
    explanationText: `白・發・中のすべてを刻子、もしくは槓子で揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'kokushimuso',
    content: '国士無双',
    yakuNumber: '13',
    explanationText: `萬子、筒子、索子の1,9牌と、字牌を各1枚揃え、いずれか一種類のみ2枚揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'shosushi',
    content: '小四喜',
    yakuNumber: '13',
    explanationText: `東,南,西,北のいずれか1種で頭、残り3種で刻子もしくは槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'daisushi',
    content: '大四喜',
    yakuNumber: '13',
    explanationText: `東,南,西,北のすべてを刻子、もしくは槓子を揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'tsuiso',
    content: '字一色',
    yakuNumber: '13',
    explanationText: `字牌のみで揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'chinroto',
    content: '清老頭',
    yakuNumber: '13',
    explanationText: `面子と頭のすべてで、1,9牌のみで揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'ryuiso',
    content: '緑一色',
    yakuNumber: '13',
    explanationText: `索子の2,3,4,6,8と發のみで揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'sukantsu',
    content: '四槓子',
    yakuNumber: '13',
    explanationText: `4つの面子をすべて槓子で揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'churenpoto',
    content: '九蓮宝燈',
    yakuNumber: '13',
    explanationText: `萬子、筒子、索子のいずれか1種で、1,9牌を3枚ずつ、2~8を1枚ずつ揃える。さらに、1~9牌の1種類のみ、1枚追加で揃えると成立`,
    annotationTexts: [],
  },
  {
    id: 'chiho',
    content: '地和',
    yakuNumber: '13',
    explanationImage: 'common',
    explanationText: `自分が子の場合、第1回目のツモで上がると成立`,
    annotationTexts: [`地震のツモより先に他家が鳴いた場合は不成立`],
  },
  {
    id: 'tenho',
    content: '天和',
    yakuNumber: '13',
    explanationImage: 'common',
    explanationText: `自分が親の場合、配牌時に上がっていると成立`,
    annotationTexts: [],
  },
  {
    id: 'suanko_daisangen',
    content: '四暗刻＋大三元',
    yakuNumber: '26',
    explanationText: '四暗刻に、白,發,中の暗刻を揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'suanko_tsuiso',
    content: '四暗刻＋字一色',
    yakuNumber: '26',
    explanationText: '四暗刻を字牌のみで揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'tsuiso_daisangen',
    content: '字一色＋大三元',
    yakuNumber: '26',
    explanationText: '白,發,中の刻子、もしくは槓子と、字牌のみで揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'tsuiso_shosushi',
    content: '字一色＋小四喜',
    yakuNumber: '26',
    explanationText:
      '東,南,西,北のいずれか1種で頭、残り3種で刻子もしくは槓子を揃え、字牌のみで揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'tsuiso_daisushi',
    content: '字一色＋大四喜',
    yakuNumber: '26',
    explanationText:
      '東,南,西,北のすべてを刻子、もしくは槓子を揃え、字牌のみで揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'ryuiso_suanko',
    content: '緑一色＋四暗刻',
    yakuNumber: '26',
    explanationText: '索子の2,3,4,6,8と發のみで暗刻を揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'ryuiso_sukantsu',
    content: '緑一色＋四槓子',
    yakuNumber: '26',
    explanationText: '索子の2,3,4,6,8と發のみで槓子を揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'daisushi_sukantsu',
    content: '大四喜＋四槓子',
    yakuNumber: '26',
    explanationText: '東,南,西,北のすべてを槓子で揃え、字牌のみで揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'chinroto_suanko',
    content: '清老頭＋四暗刻',
    yakuNumber: '26',
    explanationText: '1,9牌のみで4つ暗刻を揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'chinroto_sukantsu',
    content: '清老頭＋四槓子',
    yakuNumber: '26',
    explanationText: '1,9牌のみで4つ槓子を揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'sukantsu_suanko',
    content: '四槓子＋四暗刻',
    yakuNumber: '26',
    explanationText: '暗槓を4つ揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'sukantsu_tsuiso',
    content: '四槓子＋字一色',
    yakuNumber: '26',
    explanationText: '字牌のみで、4つの面子をすべて槓子で揃えると成立',
    annotationTexts: [],
  },
  {
    id: 'suankoTanki',
    content: '四暗刻単騎',
    yakuNumber: '26',
    explanationText: '四暗刻の単騎待ちで上がると成立',
    annotationTexts: [`単騎待ちの場合は、ロン上がりでも成立`],
  },
  {
    id: 'kokushimusoJusanmenmachi',
    content: '国士無双13面待ち',
    yakuNumber: '26',
    explanationText: `萬子、筒子、索子の1,9牌と、字牌を各1枚揃えテンパイした状態で上がると成立`,
    annotationTexts: [],
  },
  {
    id: 'junseiChurenpoto',
    content: '純正九蓮宝燈',
    yakuNumber: '26',
    explanationText:
      '萬子、筒子、索子のいずれか1種で、1,9牌を3枚ずつ、2~8を1枚ずつ揃えテンパイした状態で上がると成立',
    annotationTexts: [],
  },
  {
    id: 'hatsunashiRyuiso',
    content: '發なし緑一色',
    yakuNumber: '26',
    explanationText: '索子の2,3,4,6,8のみで揃えると成立',
    annotationTexts: [],
  },
]
