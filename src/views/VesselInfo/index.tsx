import React, { useEffect, useState } from 'react';
import { Boat } from '../../redux/interfaces';
import Info from '../../styles/Info.module.css';
import styles from './styles.module.css';
import InfoPage from '../InfoPage';

interface Props {
  isVisible: boolean,
  handleClick: Function,
  vessel: Boat,
  startDate: string,
  endDate: string,
  ownedBy: string,
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Vessel: React.FC<Props> = ({ isVisible, handleClick, vessel, startDate, endDate, ownedBy }) => {
  const [ start, setStart ] = useState(new Date(startDate));
  const [ end, setEnd ] = useState(new Date(endDate));

  useEffect(() => {
    setStart(new Date(startDate));
    setEnd(new Date(endDate));
  }, [startDate, endDate]);

  return (
    <InfoPage isVisible={ isVisible } handleClick={ handleClick }>
      <div className={ Info.wrapper }>
        <div className={ Info.mainImg }>
          <img src={ vessel.imguri ? vessel.imguri : '' } />
        </div>
        <div className={ styles.tableWrapper }>
          <h1 className={ styles.h1 }>{ vessel.name }</h1>
          <table>
            <tr>
              <th>Owner:</th>
              <td>{ ownedBy }</td>
            </tr>
            <tr>
              <th>Tour from:</th>
              <td>{ months[start.getMonth()] } { start.getDate() }. { start.getFullYear() }</td>
            </tr>
            <tr>
              <th>Tour to:</th>
              <td>{ months[end.getMonth()] } { end.getDate() }. { end.getFullYear() }</td>
            </tr>
            <tr>
              <th>Is this vessel a freezer trawler?:</th>
              <td>{ vessel.freeze_trawler ? 'Yes' : 'No' }</td>
            </tr>
          </table>
        </div>
      </div>
    </InfoPage>
  );
};

export default Vessel;