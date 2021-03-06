import React from 'react';
import { Link } from 'react-router-dom';
import car from "../assets/cart-icon.svg";
import {Heading,Imgcar} from '../styles/components/stylesHeader';

function Header() {
  return (
    <Heading>
      <p>Loja de jogos</p>
      <Link to="/car">
        <Imgcar src={car} alt="compras"/>
      </Link>
    </Heading>
  );
}

export default Header;