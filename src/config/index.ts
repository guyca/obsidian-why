export type Segment = { text: string; animate: boolean };
export type Tagline = Segment[];

const obsidian: Tagline[] = [
  [{ text: 'Write React applications without useEffect', animate: true }],
  [
    { text: 'Write React applications without ', animate: false },
    { text: 'useState', animate: true },
  ],
  [
    { text: 'Write React applications without ', animate: false },
    { text: 'React.Context', animate: true },
  ],
  [
    { text: 'Write React applications without ', animate: false },
    { text: 'state management libraries', animate: true },
  ],
  [
    { text: 'Write React applications ', animate: false },
    { text: 'with MVVM architecture', animate: true },
  ],
];

const detox: Tagline[] = [
  [{ text: 'Write stable React Native E2E tests', animate: true }],
  [
    { text: 'Write ', animate: false },
    { text: 'Reliable', animate: true },
    { text: ' React Native E2E tests', animate: false },
  ],
];

const UILIB: Tagline[] = [
  [{ text: 'Build React Native UIs with ease', animate: true }],
];

export const taglines = [obsidian, detox, UILIB];
