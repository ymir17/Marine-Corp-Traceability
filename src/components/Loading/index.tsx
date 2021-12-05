import React from 'react';
import styles from './styles.module.css';

const Loading: React.FC = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.spinner}></div>
    </div>
  );
};

export default Loading;