import { IHeader } from './Header';

const base: IHeader = {
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
  user: {
    name: 'Michael Mowry',
    email: 'michael.mowry@stellence.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export const mockHeaderProps = {
  base,
};
