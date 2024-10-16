import { useEffect, useState } from 'react';
import { AiOutlineFieldTime, AiOutlinePhone, AiTwotoneMail } from 'react-icons/ai';
import { FacebookIcon } from '../../icons/FacebookIcon';
import { Button } from '../Button/Buttons';
import './style.scss';

const topBarItems = [
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

type TopBarListProps = typeof topBarItems;

export const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.querySelector('.top-bar')?.clientHeight || 0;
      setIsSticky(window.scrollY > topBarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Strona główna', 'O mnie', 'Kancelaria', 'Usługi', 'Kontakt'];

  return (
    <>
      <div className='top-bar'>
        <div className='top-bar-container'>
          <div className='top-bar-container-inner'>
            <TopBarList items={topBarItems} />
            <div className='top-bar-buttons'>
              <div>
                <FacebookIcon width='32px' height='32px' />
              </div>
              <div>
                <Button>Umów się</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className='header-container'>
          <div className='header-container-inner'>
            <div className='header-logo'>logo</div>
            <NavBarList items={navItems} />
          </div>
        </div>
      </header>
    </>
  );
};

const TopBarList = ({ items }: { items: TopBarListProps }) => {
  return (
    <div className='topbar-list'>
      {items.map((item, index) => (
        <div key={index} className='topbar-item'>
          {item.icon}
          <a href={item.href} className={item.type !== 'time' ? 'link' : 'no-cursor'}>
            {item.value}
          </a>
          {index !== items.length - 1 && <span className='separator'>&middot;</span>}
        </div>
      ))}
    </div>
  );
};

const NavBarList = ({ items }: { items: string[] }) => {
  return (
    <div className='header-nav-items'>
      {items.map((item, index) => (
        <div className='header-nav-item'>
          <a key={index} href='#'>
            {item}
          </a>
        </div>
      ))}
    </div>
  );
};

// sticky header effect
