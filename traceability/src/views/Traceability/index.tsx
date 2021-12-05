import React, { SyntheticEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Footer, Header } from '../../components';
import styles from './styles.module.css';
import { QR } from '../../img/ui';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../redux/reducers';
import { State } from '../../redux/interfaces';
import config from '../../config';

const Traceability: React.FC = () => {
  let navigate = useNavigate();
  const { traceabilities }: State = useTypedSelector(state => state.traceabilityReducer);
  console.log('traceabilities', traceabilities);

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    let error = false;

    const target = e.target as typeof e.target & {
      id: { value: string };
    };
    const id = target.id.value;
    
    console.log('tarcelen', traceabilities.length);
    let found = false;
    for (let j = 0; j < traceabilities.length; j++) {
      let traceId = Number(traceabilities[j].id);

      if (traceId == Number(id)) {
        found = true;
        break;
      }

    }
    if (!found) {
      let el = document.getElementById('errMsg');
      if (el) el.style.display = 'block';
      error = true;
    } else {
      let el = document.getElementById('errMsg');
      if (el) el.style.display = 'none';
    }

    if (!error) navigate(`trace/${id}`);
  };

  useEffect(() => {
    document.title = config.name;
  }, []);

  return (
    <div className={ styles.container }>
      <Header />
      <div className={ styles.wrapper}>
        {/* <div className={ styles.card }> */}
          <Card title={ 'How it works' } isPointer={ false } button={ false }>
            <div className={ styles.descWrapper }>
              <p className={ styles.p }>To see the traceability information about a fish product  you can either Scan a QR code, located on the packing of the product or enter the traceability number also located on the packaging.</p>
              <p className={ styles.p }>You will then be redirected to a site showing infomation like: Where this product was caught, where it was worked, some information about the species and recipies.</p>
            </div>
          </Card>
        {/* </div> */}
        {/* <div className={ styles.card }> */}
          <Card title={ 'Traceability number' } isPointer={ false } button={ false }>
            <div className={ styles.formWrapper }>
              <form onSubmit={ handleSubmit }>
              <label className={ styles.label }>Enter your traceability number:</label>
                <div className={ styles.inputGroup }>
                  <input placeholder={ 'xxxx-xxxx-xxxx-xxxx' } name={ 'id' } className={ styles.input } />
                  <button className={ styles.submit }></button>
                </div>
                <span className={ styles.errMsg } id={ 'errMsg' } >* Invalid number</span>
              </form>
            </div>
          </Card>
        {/* </div> */}
        {/* <div className={ styles.card }> */}
          <Card title={ 'Scan QR Code' } isPointer={ false } button={ false }>
            <Link className={ styles.link } to='/trace/2'>
              <div className={ styles.qrWrapper }>
                <img className={ styles.qr } src={ QR.default } />
                <Button placeholder={ 'Try Me' } />
              </div>
            </Link>
          </Card>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Traceability;