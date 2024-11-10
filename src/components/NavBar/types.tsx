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

const utils = {
  title: `Szanowni Państwo,
serdecznie witam na stronie mojej Kancelarii Adwokackiej.
7 listopada minie dokładnie miesiąc odkąd, w ramach jednoosobowej działalności gospodarczej jako adwokat aktywnie wykonujący zawód, rozpoczęłam prowadzenie własnej Kancelarii Adwokackiej.
Moim priorytetem jest indywidualne podejście do klienta oraz dbałość o jego interesy. Gwarantuję uważne wsłuchanie się w Państwa problemy, potrzeby i pytania.
Angażując się w każdą sprawę indywidualnie, przewiduje jej ewentualny przebieg, proponując skuteczne rozwiązania.
W ramach swoich usług oferuję obsługę klientów indywidualnych, podmiotów gospodarczych i organizacji.
Moja praktyka obejmuje sprawy z zakresu: prawa cywilnego, prawa rodzinnego, prawa własności intelektualnej, prawa pracy, prawa gospodarczego, prawa upadłościowego (w tym sprawy o ogłoszenie upadłości konsumenckiej), prawa administracyjnego i prawa karnego.
Nieustannie staram się pogłębiać swoją wiedzę.
Mam nadzieję, że obdarzą Państwo moją Kancelarię Adwokacką zaufaniem, powierzając swoją sprawę do prowadzenia.`
}
