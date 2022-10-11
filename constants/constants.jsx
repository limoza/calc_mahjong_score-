export const QuestionList = {
  naki: {
    id: 'naki',
    title: '鳴き',
    description: 'ポン、チー、ミンカンをしていますか？',
    values: [1, 2],
    choices: ['はい', 'いいえ'],
  },
  oya: {
    id: 'oya',
    title: '親',
    description: '親ですか？',
    values: [1, 2],
    choices: ['親', '子'],
  },
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
    name: '1飜',
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
    name: '2飜',
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
    name: '3飜',
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
  IsOver: '13飜を超えています。選択し直してください。',
}
