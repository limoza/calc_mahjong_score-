export const QuestionList = {
  naki: {
    id: 'naki',
    title: '鳴き',
    description: 'ポン、チー、ミンカンをしていますか？',
    choices: ['はい', 'いいえ'],
    values: ['yes', 'no'],
  },
  ronTsumo: {
    id: 'ronTsumo',
    title: '上がり方',
    description: 'ツモ、ロンどちらで上がりましたか？',
    choices: ['ツモ', 'ロン'],
    values: ['tsumo', 'ron'],
  },
  oya: {
    id: 'oya',
    title: '親',
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
}

export const errorText = {
  IsZero: '役を選択してください',
  IsOver: '13翻を超えています。選択し直してください。',
}

export const yakus = [
  {
    id: 'reach',
    content: '立直',
    yakuNumber: '1',
    explanation: `立直の解説`,
  },
  {
    id: 'menzenchintsumo',
    content: '門前自摸（ツモ）',
    yakuNumber: '1',
    explanation: `門前自摸（ツモ）の解説`,
  },
  {
    id: 'ippatsu',
    content: '一発',
    yakuNumber: '1',
    explanation: `一発の解説`,
  },
  {
    id: 'haku',
    content: '白',
    yakuNumber: '1',
    explanation: `白の解説`,
  },
  {
    id: 'hatsu',
    content: '發',
    yakuNumber: '1',
    explanation: `發の解説`,
  },
  {
    id: 'chun',
    content: '中',
    yakuNumber: '1',
    explanation: `中の解説`,
  },
  {
    id: 'jikazehai',
    content: '自風牌',
    yakuNumber: '1',
    explanation: `自風牌の解説`,
  },
  {
    id: 'bakazehai',
    content: '場風牌',
    yakuNumber: '1',
    explanation: `場風牌の解説`,
  },
  {
    id: 'tanyao',
    content: '断么九',
    yakuNumber: '1',
    explanation: `断么九の解説`,
  },
  {
    id: 'pinfu',
    content: '平和',
    yakuNumber: '1',
    explanation: `平和の解説`,
  },
  {
    id: 'ipeko',
    content: '一盃口',
    yakuNumber: '1',
    explanation: `一盃口の解説`,
  },
  {
    id: 'haitei',
    content: '海底撈月',
    yakuNumber: '1',
    explanation: `海底撈月の解説`,
  },
  {
    id: 'hotei',
    content: '河底撈魚',
    yakuNumber: '1',
    explanation: `河底撈魚の解説`,
  },
  {
    id: 'rinshankaiho',
    content: '嶺上開花',
    yakuNumber: '1',
    explanation: `嶺上開花の解説`,
  },
  {
    id: 'chankan',
    content: '槍槓',
    yakuNumber: '1',
    explanation: `槍槓の解説`,
  },
  {
    id: 'dora',
    content: 'ドラ',
    yakuNumber: '1',
    explanation: `ドラの解説`,
  },
  {
    id: 'doubleReach',
    content: 'ダブル立直',
    yakuNumber: '2',
    explanation: `ダブル立直の解説`,
  },
  {
    id: 'sanshokuDoujun',
    content: '三色同順',
    yakuNumber: '2',
    explanation: `三色同順の解説`,
  },
  {
    id: 'sanshokuDoko',
    content: '三色同刻',
    yakuNumber: '2',
    explanation: `三色同刻の解説`,
  },
  {
    id: 'toitoiho',
    content: '対々和',
    yakuNumber: '2',
    explanation: `対々和の解説`,
  },
  {
    id: 'chitoitsu',
    content: '七対子',
    yakuNumber: '2',
    explanation: `七対子の解説`,
  },
  {
    id: 'ikkitsukan',
    content: '一気通貫',
    yakuNumber: '2',
    explanation: `一気通貫の解説`,
  },
  {
    id: 'chanta',
    content: '混全帯幺九',
    yakuNumber: '2',
    explanation: `混全帯幺九の解説`,
  },
  {
    id: 'sananko',
    content: '三暗刻',
    yakuNumber: '2',
    explanation: `三暗刻の解説`,
  },
  {
    id: 'shosangen',
    content: '小三元',
    yakuNumber: '2',
    explanation: `小三元の解説`,
  },
  {
    id: 'honroto',
    content: '混老頭',
    yakuNumber: '2',
    explanation: `混老頭の解説`,
  },
  {
    id: 'sankantsu',
    content: '三槓子',
    yakuNumber: '2',
    explanation: `三槓子の解説`,
  },
  {
    id: 'honitsu',
    content: '混一色',
    yakuNumber: '3',
    explanation: `混一色の解説`,
  },
  {
    id: 'ryanpeko',
    content: '二盃口',
    yakuNumber: '3',
    explanation: `二盃口の解説`,
  },
  {
    id: 'junchan',
    content: '純全帯公九',
    yakuNumber: '3',
    explanation: `純全帯公九の解説`,
  },
  {
    id: 'chinitsu',
    content: '清一色',
    yakuNumber: '6',
    explanation: `清一色の解説`,
  },
  {
    id: 'suanko',
    content: '四暗刻',
    yakuNumber: '13',
    explanation: `四暗刻の解説`,
  },
  {
    id: 'daisangen',
    content: '大三元',
    yakuNumber: '13',
    explanation: `大三元の解説`,
  },
  {
    id: 'kokushimuso',
    content: '国士無双',
    yakuNumber: '13',
    explanation: `国士無双の解説`,
  },
  {
    id: 'shosushi',
    content: '小四喜',
    yakuNumber: '13',
    explanation: `小四喜の解説`,
  },
  {
    id: 'daisushi',
    content: '大四喜',
    yakuNumber: '13',
    explanation: `大四喜の解説`,
  },
  {
    id: 'tsuiso',
    content: '字一色',
    yakuNumber: '13',
    explanation: `字一色の解説`,
  },
  {
    id: 'chinroto',
    content: '清老頭',
    yakuNumber: '13',
    explanation: `清老頭の解説`,
  },
  {
    id: 'ryuiso',
    content: '緑一色',
    yakuNumber: '13',
    explanation: `緑一色の解説`,
  },
  {
    id: 'sukantsu',
    content: '四槓子',
    yakuNumber: '13',
    explanation: `四槓子の解説`,
  },
  {
    id: 'churenpoto',
    content: '九蓮宝燈',
    yakuNumber: '13',
    explanation: `九蓮宝燈の解説`,
  },
  {
    id: 'chiho',
    content: '地和',
    yakuNumber: '13',
    explanation: `地和の解説`,
  },
  {
    id: 'tenho',
    content: '天和',
    yakuNumber: '13',
    explanation: `天和の解説`,
  },
]
