import { AiOutlinePhone, AiTwotoneMail } from 'react-icons/ai';

export const topBarItems = [
  {
    value: '+48 665 643 337',
    icon: <AiOutlinePhone className='icon' />,
    href: '#',
    type: 'phone',
  },
  {
    value: 'adwokat.agnieszka.jasak@gmail.com',
    icon: <AiTwotoneMail className='icon' />,
    href: '#',
    type: 'email',
  },
];
export type TopBarListProps = typeof topBarItems;

export const navItems = [
  { label: 'Strona główna', path: '/' },
  { label: 'O mnie', path: '/o-mnie' },
  { label: 'Usługi', path: '/zakres-uslug' },
  { label: 'Honorarium', path: '/honorarium' },
  { label: 'Kontakt', path: '/kontakt' },
];

export const getHref = (item: TopBarListProps[0]) => {
  if (item.type === 'email') return `mailto:${item.value}`;
  if (item.type === 'phone') return `tel:${item.value}`;
  return item.href;
};
