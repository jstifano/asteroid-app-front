import React, { useState, useEffect, FunctionComponent } from 'react';
import axios from 'axios';
import { AsteroidInterface } from '../interfaces/Asteroid';
import { apiServicesUrls, appConfig } from '../constants';
import { sortArrayByName } from '../utils/utilities';

// Components
import SearchPanel from '../components/search-panel/SearchPanel'
import Asteroid from '../components/asteroids/Asteroid'

const MainWrapper: FunctionComponent= () => {
  const [asteroids, setAsteroids] = useState<AsteroidInterface[]>([]);
  const [startDate, setStartDate] = useState('2015-09-07');
  const [endDate, setEndDate] = useState('2015-09-08');

  const fetchData = async () => {
    try {
      const serviceUrl = await apiServicesUrls.getAsteroids(startDate, endDate) // Get the URL to be consumed
      const response = await axios.get(`${appConfig.baseUrl}${serviceUrl}`); // Include baseUrl together with endpoint

      // We verify if asteroids array exists
      if(response.data.asteroids) {
        // Get the values coming from near_earth_object key and flatten the arrays to be converted in one all the asteroids together
        const values: AsteroidInterface[] = Object.values(response.data.asteroids.near_earth_objects).flat(1) as AsteroidInterface[]

        setAsteroids(sortArrayByName(values))
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  });

  const handleSearch = () => {
    fetchData();
  };

  return (
    <>
      <SearchPanel 
        startDate={new Date(startDate)} 
        endDate={new Date(endDate)} 
        onChangeStartDate={setStartDate}
        onChangeEndDate={setEndDate}   
        onHandleSearch={handleSearch} 
      />
      <ul>
        {
          asteroids.length !== 0 ?
            asteroids.map(ast => (
              <Asteroid asteroid={ast} key={ast.id} />
            ))
          : null
        }
      </ul>
    </>
      
  );
};

export default MainWrapper;
