import obsidianLogo from '../assets/obsidian.png';
import detoxLogo from '../assets/detox.png';
import UILIBLogo from '../assets/UILIB.png';
import RNNLogo from '../assets/RNN.png';

import obsidianQR from '../assets/obsidianQR.png';
import detoxQR from '../assets/detoxQR.png';
import UILIBQR from '../assets/UILIBQR.png';
import RNNQR from '../assets/RNNQR.png';

export type Segment = { text: string; animate: boolean };
export type Tagline = Segment[];
export type Project = {
  name: string;
  taglines: Tagline[];
  logo: string;
  qr: string;
};

const obsidian: Project = {
  name: '@wix-incubator/obsidian',
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
  name: '@wix/detox',
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
  name: '@wix/react-native-ui-lib',
  logo: UILIBLogo,
  qr: UILIBQR,
  taglines: [[{ text: 'Build React Native UIs with ease', animate: true }]],
};

const RNN: Project = {
  name: '@wix/react-native-navigation',
  logo: RNNLogo,
  qr: RNNQR,
  taglines: [
    [{ text: 'Write robust React Native applications', animate: true }],
    [
      { text: 'Write ', animate: false },
      { text: 'Performant', animate: true },
      { text: ' React Native applications', animate: false },
    ],
  ],
};

export const projects = [obsidian, detox, UILIB, RNN];
