import React, { useEffect } from 'react';
import styles from './styles.module.css';
import infoStyles from '../../styles/Info.module.css';
import InfoPage from '../InfoPage';
import config from '../../config';

interface Props {
  isVisible: boolean,
  handleClick: Function,
  recipies: Array<any>,
}

const Recipies: React.FC<Props> = ({ isVisible, handleClick, recipies }) => {
  useEffect(() => {
    document.title = `Recipies | ${ config.name }`;
  }, []);

  return (
    <InfoPage isVisible={ isVisible } handleClick={ handleClick }>
      <div className={ infoStyles.wrapper }>
        { recipies.length > 0 ? recipies.map(r => (
          <a key={ r.id } href={ r.url } className={ styles.link } target='_blank' rel='noreferrer'>
            <div className={ styles.card }>
              <div className={ styles.imgContainer }>
                <img src={ r.image } className={ styles.img } />
              </div>
              <div className={ styles.bodyWrapper }>
                <h1 className={ styles.title } title={ r.label }>{ r.label }</h1>
                <button className={ styles.btn }>Open in browser</button>
              </div>
            </div>
          </a>
        )) : 
        <p className={ styles.notFoundMsg }>
          <i>Sorry, no recipes were found for this product.</i>
        </p>}
      </div>
    </InfoPage>
  );
};

export default Recipies;