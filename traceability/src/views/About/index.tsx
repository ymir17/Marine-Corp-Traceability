import React, { useEffect } from 'react';
import styles from '../../styles/Comp.module.css';
import { Footer, Header } from '../../components';
import config from '../../config';

const About: React.FC = () => {
  const { description } = config;

  useEffect(() => {
    document.title = `About us | ${ config.name }`;
  }, []);
  
  return (
    <div className={ styles.container }>
      <Header />
      <div className={ styles.wrapper }>
        <h1 className={ styles.h1 }>About us</h1>
        <div className={ styles.pWrapper }>
          { description.map((p, i) => <p key={ i }>{ p }</p>) }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;