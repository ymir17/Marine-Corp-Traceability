import React from 'react';
import styles from './styles.module.css';
import Button from '../Button';
import { forward } from '../../img/ui/icons';

interface Props {
  title: string,
  id?: string,
  img?: string,
  name?: string,
  children?: React.ReactNode,
  handleOnClick?: Function,
  isPointer?: boolean,
  button?: boolean,
}

const Card: React.FC<Props> = ({ title, img, name, children, handleOnClick, isPointer = true, button = true }) => {
  return (
    <div className={ `${styles.card} ${isPointer ? styles.pointer : styles.notPointer }` } onClick={ () => {
      if (handleOnClick != undefined && children == undefined) {
        handleOnClick();
      }
    }}>
      <div className={ styles.header } onClick={ () => {
        if (isPointer && handleOnClick != undefined) {
          handleOnClick();
        }
      }}>
        <span className={ styles.headerName }>{ title }</span>
        { isPointer ? <img className={ styles.symbol } src={ forward.default } /> : <></> }
      </div>
      { children ? 
        children
        : 
        <div className={ styles.body }>
          <img src={ img } alt={ name }></img>
          <div className={ styles.subBody }>
            <span className={ styles.title }>{ name }</span>
            { button ? <Button placeholder='More >' /> : <></> }
          </div>
      </div>
      }
      
    </div>
  );
};

export default Card;
