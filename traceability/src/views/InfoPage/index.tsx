import React from 'react';
import styles from './styles.module.css';
import { Footer } from '../../components';
import { logo } from '../../img/ui';
import { back } from '../../img/ui/icons';

interface Props {
  isVisible: boolean,
  handleClick: Function,
  children: React.ReactNode,
}

const InfoPage: React.FC<Props> = ({ isVisible, handleClick, children }) => {
  if (!isVisible) { return (<></>); }

  return (
    <div className={ styles.container }>
      <div className={ styles.header } onClick={ () => handleClick() }>
        <img className={ styles.arrow } src={ back.default } />
        <img className={`${ styles.logo }`} src={ logo.default } alt="Logo" />
      </div>
      <div className={ styles.body }>
        { children }
      </div>
      <div className={ styles.footer }>
        <Footer />
      </div>
    </div>
  );
};

export default InfoPage;
