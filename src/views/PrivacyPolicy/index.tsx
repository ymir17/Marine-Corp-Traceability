import React, { useEffect } from 'react';
import { Footer, Header } from '../../components';
import styles from '../../styles/Comp.module.css';
import config from '../../config';

const PrivacyPolicy: React.FC = () => {
  const { privacyPolicy } = config;

  useEffect(() => {
    document.title = `Privacy Policy | ${ config.name }`;
  }, []);

  return (
    <div className={ styles.container }>
      <Header />
      <div className={ styles.wrapper }>
        { privacyPolicy.map((p, i) => {
          switch (p.type) {
            case 'h1':
              return ( p.text.map((el, j) => <h1 key={ i + j } className={ styles.h1 }>{ el }</h1>) );
            case 'h2':
              return ( p.text.map((el, j) => <h2 key={ i + j } className={ styles.h1 }>{ el }</h2>) );
            case 'p':
              return ( p.text.map((el, j) => <p key={ i + j }>{ el }</p>) );
            case 'ul':
              return ( 
                <ul>
                  { p.text.map((el, j) => (
                    <li key={ i + j }>{ el }</li>
                  )) }
                </ul>
              );
            default:
              break;
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;