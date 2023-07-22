import { HeaderContainer } from './styles';
import { Timer, Scroll } from 'phosphor-react';

import logoIgnite from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Duas setas verdes representando o logo do Ignite"
      />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
