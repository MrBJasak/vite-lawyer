import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/Logo.jpg';
import { Button } from '../Button/Buttons';
import './style.scss';
import { navItems, topBarItems, TopBarListProps } from './types';

export const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = document.querySelector('.top-bar')?.clientHeight || 0;
      setIsSticky(window.scrollY > topBarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='top-bar'>
        <div className='top-bar-container'>
          <div className='top-bar-container-inner'>
            <TopBarList items={topBarItems} />
            <div className='top-bar-buttons'>
              <SocialIcons />
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
            <div className='header-logo'>
              <Link to='/'>
                <img src={logo} alt='Logo Agnieszka Jasak' />
              </Link>
            </div>
            <div className='burger-menu' onClick={toggleSidebar}>
              <AiOutlineMenu />
            </div>
            <div className='header-nav-items'>
              <NavBarList items={navItems} />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar for mobile screens */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className='close-btn' onClick={toggleSidebar}>
          <AiOutlineClose />
        </div>
        <div className='sidebar-nav-items'>
          {navItems.map((item, index) => (
            <div key={index} className='sidebar-nav-item'>
              <Link onClick={toggleSidebar} to={item.path}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
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

const NavBarList = ({ items }: { items: { label: string; path: string }[] }) => {
  return (
    <>
      {items.map((item, index) => (
        <div className='header-nav-item' key={index}>
          <Link to={item.path}>{item.label}</Link>
        </div>
      ))}
    </>
  );
};

const SocialIcons = () => {
  const iconStyle = {
    color: 'green',
    fontSize: '1.5rem',
  };

  const socialIcons = [
    { name: 'facebook', icon: <MdFacebook style={iconStyle} />, link: 'https://facebook.com' },
    { name: 'twitter', icon: <FaTwitter style={iconStyle} />, link: 'https://twitter.com' },
    { name: 'linkedin', icon: <FaLinkedin style={iconStyle} />, link: 'https://linkedin.com' },
  ];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {socialIcons.map((socialIcon, index) => {
        return (
          <a key={index} href={socialIcon.link} target='_blank' rel='noopener noreferrer'>
            {socialIcon.icon}
          </a>
        );
      })}
    </div>
  );
};
