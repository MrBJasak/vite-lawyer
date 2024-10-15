import { StrictMode } from 'react';
import { Inspector } from 'react-dev-inspector';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Inspector />
    <App />
  </StrictMode>,
);
