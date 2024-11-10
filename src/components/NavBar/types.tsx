import { AiOutlineFieldTime, AiOutlinePhone, AiTwotoneMail } from 'react-icons/ai';

export const topBarItems = [
  {
    value: '+48 123 456 789',
    icon: <AiOutlinePhone className='icon' />, //change icon to better looking
    href: '#',
    type: 'phone',
  },
  {
    value: 'jondoe@gmail.com',
    icon: <AiTwotoneMail className='icon' />,
    href: '#',
    type: 'email',
  },
  { value: 'Pon-Pt: 09:00-16:00', icon: <AiOutlineFieldTime className='icon' />, href: '#', type: 'time' },
];
export type TopBarListProps = typeof topBarItems;

export const navItems = [
  { label: 'Strona główna', path: '/' },
  { label: 'O mnie', path: '/o-mnie' },
  { label: 'Kancelaria', path: '/kancelaria' },
  { label: 'Usługi', path: '/zakres-uslug' },
  { label: 'Kontakt', path: '/kontakt' },
];
