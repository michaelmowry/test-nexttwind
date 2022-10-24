import { IAppHeader } from './AppHeader';

const base: IAppHeader = {
  navigation: [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Solve', href: '#', current: false },
    { name: 'Solutions', href: '#', current: false },
    { name: 'Problems', href: '#', current: false },
  ],
  userNavigation: [
    { name: 'Progress Report', href: '#' },
    { name: 'Connections', href: '#' },
    { name: 'History', href: '#' },
    { name: 'Profile', href: '#' },
    { name: 'Settings', href: '#' },
  ],
};

export const mockHeaderProps = {
  base,
};
