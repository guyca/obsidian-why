import { LearnMore } from '../LearnMore';
import { Logo } from '../logo/Logo';
import { Title } from '../title/Title';

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Title />
      <LearnMore />
    </div>
  );
};
