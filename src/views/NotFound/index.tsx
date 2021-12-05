import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { Footer, Header } from '../../components';
import Button from '../../components/Button';
import styles from './styles.module.css';
import { back } from '../../img/ui/icons';

const NotFound: React.FC = () => {
  // const navigate = useNavigate();
  const [ secondsLeft, setSecondsLeft ] = useState(5);
  
  useEffect(() => {
    if (!secondsLeft) return; //navigate('/');

    const seconds = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearInterval(seconds);
  }, [secondsLeft]);

  return (
    <div className={ styles.container }>
      <Header />
      <div className={ styles.wrapper }>
        <div className={ styles.card }>
          <h1>404 Not Found</h1>
          <p>The page you are looking for cannot be found.</p>
          <Link to='/'>
            <Button>
              <img className={ styles.icon } src={ back.default } />
              <span className={ styles.btn }>Go back home!</span>
            </Button>
          </Link>
          {/* <p>Redirecting in { secondsLeft }s.</p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
