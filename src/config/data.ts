import obsidianLogo from '../assets/obsidian.png';
import detoxLogo from '../assets/detox.png';
import UILIBLogo from '../assets/UILIB.png';

import obsidianQR from '../assets/obsidianQR.png';
import detoxQR from '../assets/detoxQR.png';
import UILIBQR from '../assets/UILIBQR.png';

export type Segment = { text: string; animate: boolean };
export type Tagline = Segment[];
export type Project = {
  taglines: Tagline[];
  logo: string;
  qr: string;
};

const obsidian: Project = {
  logo: obsidianLogo,
  qr: obsidianQR,
  taglines: [
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
  ],
};

const detox: Project = {
  logo: detoxLogo,
  qr: detoxQR,
  taglines: [
    [{ text: 'Write stable React Native E2E tests', animate: true }],
    [
      { text: 'Write ', animate: false },
      { text: 'Reliable', animate: true },
      { text: ' React Native E2E tests', animate: false },
    ],
  ],
};

const UILIB: Project = {
  logo: UILIBLogo,
  qr: UILIBQR,
  taglines: [[{ text: 'Build React Native UIs with ease', animate: true }]],
};

export const projects = [obsidian, detox, UILIB];
