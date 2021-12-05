import React, { useEffect } from 'react';
//import { useParams, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import {
  Header,
  Card,
  Recipies,
  Footer,
  Map,
  Loading,
} from '../../components';
import { Boat, Fish, Harbour, State, TreatedBy } from '../../redux/interfaces';
import { useTypedSelector } from '../../redux/reducers';

type Obj = {
  vessel: Boat,
  species: Fish,
  treatment: TreatedBy,
  harbour: Harbour,
  recipies: Array<any>,
  isLoadingRecipes: boolean,
};

interface Props {
  obj: Obj,
  handleOnSpeciesClick: Function,
  handleOnVesselClick: Function,
  handleOnTreatedByClick: Function,
  handleOnRecipiesClick: Function
}

const List: React.FC<Props> = ({ obj, handleOnSpeciesClick, handleOnVesselClick, handleOnTreatedByClick, handleOnRecipiesClick }) => {
  const { isLoading }: State = useTypedSelector(state => state.traceabilityReducer);
  
  useEffect(() => {
    document.getElementById('root')?.scrollTo({ top: 0 });
  }, []);

  return (
    <div id='container' className={ styles.container }>
      <Header />
      { isLoading ? (
        <div id='body' className={ styles.body }>
          <Card title='Species' isPointer={ false }>
            <Loading />
          </Card>
          <Card title='Landed at' isPointer={ false }>
            <Loading />
          </Card>
          <Card title='Caught by'isPointer={ false }>
            <Loading />
          </Card>
          <Card title='Treated by' isPointer={ false }>
            <Loading />
          </Card>
          <Card title='Recipes' handleOnClick={ handleOnRecipiesClick }>
            {obj.isLoadingRecipes || isLoading ? <Loading /> : <Recipies recipies={ obj.recipies } />}
          </Card>
        </div>
      ) : (
        <div id='body' className={ styles.body }>
          <Card title='Species' id='0' img={ obj.species.imguri } name={ obj.species.name } handleOnClick={ handleOnSpeciesClick } />
          <Card title='Landed at' isPointer={ false }>
            <Map harbour={ obj.harbour } />
          </Card>
          <Card title='Caught by' id='0' img={ obj.vessel.imguri } name={ obj.vessel.name } handleOnClick={ handleOnVesselClick } />
          <Card title='Treated by' id='0' img={ obj.treatment.imguri } name={ obj.treatment.name } handleOnClick={ handleOnTreatedByClick } />
          <Card title='Recipes' handleOnClick={ handleOnRecipiesClick }>
            {obj.isLoadingRecipes ? <Loading /> : <Recipies recipies={ obj.recipies } />}
          </Card>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default List;