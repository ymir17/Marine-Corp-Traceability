import React from 'react';
import { Fish } from '../../redux/interfaces';
import Info from '../../styles/Info.module.css';
import InfoPage from '../InfoPage';

interface Props {
  isVisible: boolean,
  handleClick: Function,
  species: Fish,
}

const Species: React.FC<Props> = ({ isVisible, handleClick, species }) => {
  
  return (
    <InfoPage isVisible={ isVisible } handleClick={ handleClick }>
      <div className={ Info.wrapper }>
        <div className={ Info.mainImg }>
          <img src={ species.imguri } />
        </div>
        <h1 className={ Info.title }>{ species.name }</h1>
        <div className={ Info.paragraphs }>
          <p>{ species.description }</p>
        </div>
      </div>
    </InfoPage>
  );
};

export default Species;