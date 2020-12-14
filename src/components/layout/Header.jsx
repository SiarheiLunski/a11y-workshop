import { Navigation } from '../controls/Navigation';
import { HamburgerMenu } from '../controls/HamburgerMenu';

export const Header = () => {
  return <div>
    <HamburgerMenu />
    <Navigation />
  </div>;
};
