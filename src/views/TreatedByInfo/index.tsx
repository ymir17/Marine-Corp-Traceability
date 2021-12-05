import React from 'react';
import { TreatedBy } from '../../redux/interfaces';
import Info from '../../styles/Info.module.css';
import styles from './styles.module.css';
import InfoPage from '../InfoPage';

interface Props {
  isVisible: boolean,
  handleClick: Function,
  treatment: TreatedBy,
}

const Treatment: React.FC<Props> = ({ isVisible, handleClick, treatment }) => {
  return (
    <InfoPage isVisible={ isVisible } handleClick={ handleClick }>
      <div className={ Info.wrapper }>
        <div className={ Info.mainImg }>
          <img src={ treatment.imguri } />
        </div>
        <div className={ styles.body }>
          <div className={ styles.logoImg }>
              <a href={ treatment.homepage}>
                <img src={ treatment.logouri } />
              </a>
          </div>
          <div className={ Info.paragraphs }>
            <p>{ treatment.description }</p>
          </div>
        </div>
      </div>
    </InfoPage>
  );
};

export default Treatment;