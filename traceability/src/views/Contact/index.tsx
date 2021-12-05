import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Footer, Header } from '../../components';
import compStyles from '../../styles/Comp.module.css';
import styles from './styles.module.css';
import config from '../../config';

const Contact: React.FC = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ msg, setMsg ] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setMsg('');
  };

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    let error = false;
    
    if (name.length == 0) {
      const el = document.getElementById('errName');
      if (el) el.style.visibility = 'visible';
      error = true;
    } else {
      const el = document.getElementById('errName');
      if (el) el.style.visibility = 'hidden';
    }

    if (email.length == 0) {
      const el = document.getElementById('errEmail');
      if (el) el.style.visibility = 'visible';
      error = true;
    } else {
      const el = document.getElementById('errEmail');
      if (el) el.style.visibility = 'hidden';
    }

    if (msg.length == 0) {
      const el = document.getElementById('errMsg');
      if (el) el.style.visibility = 'visible';
      error = true;
    } else {
      const el = document.getElementById('errMsg');
      if (el) el.style.visibility = 'hidden';
    }

    if (!error) {
      const el = document.getElementById('successMsg');
      
      let body = {
        name: name,
        email: email,
        msg: msg,
      };

      fetch('http://localhost:3002/contact', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => res.json())
        .then(res => {
          console.log(res);
        });
      if (el) el.style.visibility = 'visible';
      clearForm();
    }
  };

  useEffect(() => {
    document.title = `Contact us | ${ config.name }`;
  }, []);

  return (
    <div className={ compStyles.container }>
      <Header />
      <div className={ compStyles.wrapper }>
        <h1 className={ compStyles.h1 }>Contact us</h1>
        <div className={ styles.columns }>
          <div className={ styles.leftColumn }>
            { config.locations.map((l, i) => (
              <div key={ i } className={ styles.infoGroup }>
                <h2>{ l.city }</h2>
                <span>{ l.address }, { l.zip }</span>
              </div>
            ))}
            <div className={ styles.infoGroup }>
              <h2>Switchboard</h2>
              { config.phoneNumbers.map((p, i) => (
                <div key={ i }>
                  <span>{ p }</span><br />
                </div>
              )) }
            </div>
            <div className={ styles.infoGroup }>
              <h2>General Enquiries</h2>
              { config.emails.map((e, i) => (
                <div key={ i }>
                  <a href={ `mailto:${ e }` }>{ e }</a><br/>
                </div>
              ))}
            </div>
          </div>
          <div className={ styles.rightColumn }>
            <form onSubmit={ handleSubmit }>
              <div className={ styles.inputGroup}>
                <label>Full name: </label>
                <input 
                  type={ 'text' } 
                  name={ 'fullName' } 
                  id={ 'inpName' }
                  value={ name }
                  onChange={ e => setName(e.target.value) } />
                <span className={ styles.errorMsg } id={ 'errName' }>* This field is required</span>
              </div>
              <div className={ styles.inputGroup}>
                <label>Email:</label>
                <input 
                  type={ 'email' } 
                  name={ 'email' } 
                  id={ 'inpEmail' }
                  value={ email }
                  onChange={ e => setEmail(e.target.value) } />
                <span className={ styles.errorMsg } id={ 'errEmail' }>* This field is required</span>
              </div>
              <div className={ styles.inputGroup}>
                <label>Message:</label>
                <textarea 
                  maxLength={ 255 } 
                  name={ 'msg' } 
                  id={ 'inpMsg' }
                  value={ msg }
                  onChange={ e => setMsg(e.target.value) } />
                <span className={ styles.errorMsg } id={ 'errMsg' }>* This field is required</span>
              </div>
              <span className={ styles.successMsg } id={ 'successMsg' }>Thank you for reaching out to us! We will contact you as soon as possible.</span>
              <input className={ styles.submit } type={ 'submit' } value={ 'Send Message' } />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;