import obsidianLogo from '../assets/obsidian.png';
import detoxLogo from '../assets/detox.png';
import UILIBLogo from '../assets/UILIB.png';

export type Segment = { text: string; animate: boolean };
export type Tagline = Segment[];
export type Project = {
  taglines: Tagline[];
  logo: string;
};

const obsidian: Project = {
  logo: obsidianLogo,
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
  taglines: [[{ text: 'Build React Native UIs with ease', animate: true }]],
};

export const projects = [obsidian, detox, UILIB];
