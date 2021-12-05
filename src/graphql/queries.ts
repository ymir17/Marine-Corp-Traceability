import { gql, useQuery } from '@apollo/client';

export const FISHES = gql`
  {
    fishes {
      id
      name
      description
      imguri
    }
  }
`;

export const fishes = async () => {
  const { loading, error, data } = useQuery(FISHES);
  if (loading) return '...loading';
  if (error) return 'Error';
    
  return data;
};


export const LOCATIONS = gql`
  {
    locations {
    id,
    name
    }
  }
`;

export const locations = async () => {
  const { loading, error, data } = useQuery(LOCATIONS);
  if (loading) return '...loading';
  if (error) return 'Error';
      
  return data;
};


export const HARBOURS = gql`
  {
    harbours {
      id
      name
    latitude
    longitude
  }
  }
`;

export const harbours = async () => {
  const { loading, error, data } = useQuery(LOCATIONS);
  if (loading) return '...loading';
  if (error) return 'Error';
        
  return data;
};

export const FE = gql`
  {
    fishingequipments {
    id
    name
  }
  }
`;

export const BOATS = gql`
  {
    boats {
    id
    name
    imguri
    freeze_trawler
    fishingequipmentId
  }
  }
`;

export const TB = gql`
  {
    treatedbys {
    id
    name
    description
    logouri
    homepage
    imguri
  }
  }
`;

export const FT = gql`
  {
    fishingtrips {
    id
    startDate
    endDate
    boatId
    fishId
    locationId
    harbourId
    treatedbyid
  }
  }
`;

export const TRACE = gql`
  {
    traceabilities {
    fishingtripId
    id
  }
  }
`;

export const INIT = gql`
query getTraceability($id: Int)
  {
      traceability(id: $id)
    {
        fishingtripId
    }
  }
`;


export const second = gql`
query getFishingTrip($id: Int)
  { 
      fishingtrip(id: $id)
      {
        id
        endDate
        startDate
        boat 
        {
            name
            imguri
            freeze_trawler
            fishingequipmentId    
        }

        treatedby 
        {
            homepage
            name
            description
            imguri
            logouri
        }

        fish 
        {
            name
            description
            imguri
        }

        location 
        {
            name
        }

        harbour 
        {
            latitude
            longitude
            name
        }

      }
      
  }
`;

export const third = gql`
query getFE($id: Int)
  {
      fishingequipment(id: $id)
    {
        name
    }
  }
`;




export const firstcall = async () => {
  const { /*loading, error,*/ data } = useQuery(INIT, { variables:{ id:1 } });
  // if (loading) return '...loading';
  // if (error) return 'Error';
          
  return data;
};

export const secondcall = async () => {
  const { /*loading, error,*/ data } = useQuery(second, { variables:{ id:1 } });
  // if (loading) return '...loading';
  // if (error) return 'Error';
            
  return data;  
};


export const thirdcall = async () => {
  const { /*loading, error,*/ data } = useQuery(third, { variables:{ id:1 } });
  // if (loading) return '...loading';
  // if (error) return 'Error';
              
  return data;  
};