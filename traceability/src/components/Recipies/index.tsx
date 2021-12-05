import React from 'react';
import Button from '../Button';
import styles from './styles.module.css';

type RecipieObj = {
  id: number,
  label: string,
  image: string,
  url: string,
};

// type Object = {
//   default: string,
// };

interface Props {
  recipies: Array<RecipieObj>,
}

const Recipies: React.FC<Props> = ({ recipies }) => {
  return (
    <div className={ styles.container }>
      { recipies.length > 0 ? recipies.map(o => 
        <div key={ o.id } className={ styles.card }>
          <a href={ o.url } className={ styles.link } target='_blank' rel='noreferrer'>
            <img src={o.image } className={ styles.img } />
            <div className={ styles.body }>
              <p className={ styles.title } title={ o.label }>{ o.label }</p>
              <Button placeholder='Open' />
            </div>
          </a>
        </div>) : 
        <div className={ styles.sorry }>
          <i>Sorry, no recipes were found</i>
        </div>
      }
    </div>
  );
};

export default Recipies;