import React from 'react';
import Loader from './Loader';
import Data from './Data';
import Error from './Error';
import useFetch from '../customHook/useFetch';

const WeatherContainer = () => {

  const apiKey = process.env.REACT_APP_API_KEY
  const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Saxthorpe&aqi=no`
  const { data, loadingState, error } = useFetch(BASE_URL);
  return (
    <div>
      {loadingState && <Loader />}
      {error && <Error message={error.message} />}
      {data && <Data data={data} />}
    </div>
  );
};

export default WeatherContainer;