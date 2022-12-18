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
