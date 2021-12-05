import React from 'react';
import styles from './styles.module.css';

interface Props {
  placeholder?: string,
  children?: React.ReactNode,
}

const Button: React.FC<Props> = ({ placeholder, children }) => {
  return (
    <div className={ styles.container }>
      { children ? (
        <button className={ styles.button }>{ children }</button>
      ) : (
        <button className={ styles.button }>{ placeholder }</button>
      ) }
    </div>
  );
};

export default Button;
