import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../redux/reducers';
import {
  INIT,
  second,
  third,
} from '../../graphql/queries';
import List from '../List';
import Recipies from '../RecipiesInfo';
import Species from '../SpeciesInfo';
import Treatment from '../TreatedByInfo';
import Vessel from '../VesselInfo';

import { State } from '../../redux/interfaces';
import { useQuery } from '@apollo/client';
import { setFirst, setSecond, setThird } from '../../redux/actions/traceabilityActions';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import config from '../../config';

function request<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        console.log('Fetch failed!');
      }
      return response.json() as Promise<T>;
    });
}

interface Props {
  setFirst: Function,
  setSecond: Function,
  setThird: Function,
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const Main: React.FC<Props> = ({ setFirst, setSecond, setThird }) => {
  const navigate = useNavigate();
  const { traceabilityId } = useParams();
  const { data:traceData, loading, error:traceError } = useQuery(INIT, { variables:  { id: Number(traceabilityId) } });
  console.log('error', traceError);
  console.log('traceData', traceData);
  const fishTripId = traceData?.traceability?.fishingtripId;
  const { data: fishingTrip } = useQuery(second, 
    { variables: { id: fishTripId } } );
  const feId = fishingTrip?.fishingtrip?.boat?.fishingequipmentId;
  const { data: fishingEquipment } = useQuery(third, { variables: { id:feId } });
  const { fishingtrip }: State = useTypedSelector(state => state.traceabilityReducer);
  
  const [ isListVisible, setIsListVisible ] = useState(true);
  const [ isSpeciesVisible, setIsSpeciesVisible ] = useState(false);
  const [ isVesselVisible, setIsVesselVisible ] = useState(false);
  const [ isTreatedByVisible, setIsTreatedVisible ] = useState(false);
  const [ isRecipiesVisible, setIsRecipiesVisible ] = useState(false);
  const [ recipies, setRecipies ] = useState<Array<Recipe> | []>([]);
  const [ isLoadingRecipes, setIsLoadingRecipies ] = useState(true);
  const [ documentTitle, setDocumentTitle ] = useState('');

  useEffect(() => {
    if (!loading && (traceData === null || traceData.traceability === null)) navigate('/no-match');
  }, [loading]);

  const handleOnSpeciesClick = () => {
    setIsSpeciesVisible(true);
  };

  const handleOnVesselClick = () => {
    setIsVesselVisible(true);
  };

  const handleOnTreatedByClick = () => {
    setIsTreatedVisible(true);
  };

  const handleOnRecipiesClick = () => {
    setIsRecipiesVisible(true);
  };

  const handleEvent = () => {
    setIsSpeciesVisible(false);
    setIsVesselVisible(false);
    setIsTreatedVisible(false);
    setIsRecipiesVisible(false);
    setIsListVisible(true);
  };

  useEffect(() => {
    setFirst(traceData);
    setSecond(fishingTrip);
    setThird(fishingEquipment);
    
  }, [traceData, fishingTrip, fishingEquipment]);

  useEffect(() => {
    if (isSpeciesVisible || isVesselVisible || isTreatedByVisible || isRecipiesVisible) {
      setIsListVisible(false);
    } else {
      setIsListVisible(true);
    }
    
    if (isSpeciesVisible) {
      setDocumentTitle(`Species | ${config.name}`);
    } else if (isVesselVisible) {
      setDocumentTitle(`Captured by | ${config.name}`);
    } else if (isTreatedByVisible) {
      setDocumentTitle(`Treated by | ${config.name}`);
    } else if (isRecipiesVisible) {
      setDocumentTitle(`Recipies | ${config.name}`);
    } else {
      setDocumentTitle(config.name);
    }
  }, [ isSpeciesVisible, isVesselVisible, isTreatedByVisible, isRecipiesVisible ]);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  useEffect(() => {
    /*
      Helps user to use the back button to from any infographic view to the List view 
    */
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', handleEvent);
    return () => window.removeEventListener('popstate', handleEvent);
  }, []);

  type Response = {
    hits: Array<Hits>,
  };

  type Hits = {
    recipe: Recipe,
  };

  type Recipe = {
    id: number,
    label: string,
    image: string,
    url: string,
  };

  useEffect(() => {
    if (fishingtrip) {
      request<Response>(`https://api.edamam.com/api/recipes/v2?type=public&q=${ fishingtrip.fish.name }&app_id=${ config.api.APP_ID }&app_key=${ config.api.APP_KEY }`)
        .then(res => {
          if (res.hits != undefined) {
            let allRecipies = [];
            for (let r = 0; r < res.hits.length; r++) {
              let { label, image, url } = res.hits[r].recipe;
              // let id = r;
              allRecipies.push({ id: r, label, image, url });
            }
            setRecipies(allRecipies);
            setIsLoadingRecipies(false);
          } else {
            setRecipies([]);
            setIsLoadingRecipies(false);
          }
        });
    }
  }, [fishingtrip]);

  const obj = {
    vessel: fishingtrip.boat,
    species: fishingtrip.fish,
    treatment: fishingtrip.treatedby,
    harbour: fishingtrip.harbour,
    recipies: recipies,
    isLoadingRecipes: isLoadingRecipes,
  };
  
  return (
    
    <div className="App" style={{ height: '100%' }}>
      { isListVisible ? <List 
        handleOnSpeciesClick={ handleOnSpeciesClick } 
        handleOnVesselClick={ handleOnVesselClick } 
        handleOnTreatedByClick={ handleOnTreatedByClick }
        handleOnRecipiesClick={ handleOnRecipiesClick }
        obj={ obj } /> : <></> }
      <Species isVisible={ isSpeciesVisible } handleClick={ setIsSpeciesVisible } species={ fishingtrip.fish } />
      <Vessel isVisible={ isVesselVisible } handleClick={ setIsVesselVisible } vessel={ fishingtrip.boat } startDate={ fishingtrip.startDate } endDate={ fishingtrip.endDate} ownedBy={fishingtrip.treatedby.name}/>
      <Treatment isVisible={ isTreatedByVisible } handleClick={ setIsTreatedVisible } treatment={ fishingtrip.treatedby } />
      <Recipies isVisible={ isRecipiesVisible } handleClick={ setIsRecipiesVisible } recipies={ obj.recipies } />
    </div>  
  );
};

export default connect(null, { setFirst, setSecond, setThird })(Main);
