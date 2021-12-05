import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface Props {
  about?: string,
  contact?: string,
  privacy?: string
}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={ `${styles.container}` }>
      <p className={ styles.p }><Link to='/'>Home</Link></p>
      <p className={ styles.p }><Link to='/about'>About</Link></p>
      <p className={ styles.p }><Link to='/contact'>Contact</Link></p>
      <p className={ styles.p }><Link to='/privacy-policy'>Privacy policy</Link></p>
    </footer>
  );
};

export default Footer;
