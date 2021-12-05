import React from 'react';
import styles from './styles.module.css';
import { logo } from '../../img/ui';
import { Link } from 'react-router-dom';

const MainHeader: React.FC = () => {
  
  return (
    <Link to="/">
      <header className={`${ styles.header }`}>
        <div>
          <img className={`${ styles.logo }`} src={ logo.default } alt="Logo" />
        </div>
      </header>
    </Link>
  );
};
  
export default MainHeader;