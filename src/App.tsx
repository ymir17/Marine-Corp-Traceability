import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { TRACE } from './graphql/queries';
import {
  NotFound,
  Main,
  Traceability,
  About,
  Contact,
  PrivacyPolicy,
} from './views';
import { setFirst, setSecond, setThird, setTraceabilities } from './redux/actions/traceabilityActions';
import { connect } from 'react-redux';

interface Props {
  setFirst: Function,
  setSecond: Function,
  setThird: Function,
  setTraceabilities: Function,
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const App: React.FC<Props> = ({ setTraceabilities }) => {
  const { data:allTrace } = useQuery(TRACE);

  useEffect(() => {
    setTraceabilities(allTrace); 
  }, [allTrace]);

  return (
    <Routes>
      <Route path='/' element={ <Traceability /> } />
      <Route path='/trace/:traceabilityId' element={ <Main /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> } />
      <Route path='/privacy-policy' element={ <PrivacyPolicy /> } />
      <Route path='/no-match' element={ <NotFound /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  );
};

export default connect(null, { setFirst, setSecond, setThird, setTraceabilities })(App);
// export default App;
