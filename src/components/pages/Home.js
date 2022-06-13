import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Context from '../../Context';
import withLayout from '../hoc/withLayout'
import Error from './Error';
import SearchLocation from './SearchLocation';
import WeatherInfo from './WeatherInfo';

const Home = () => {

    const [weather, setWeather] = useState();
    const [error, setError] = useState();

    const [lat, setLat] = useState('23');
    const [long, setLong] = useState('28');
    const [cLocationData, setCLocationData] = useState('');

    
    // useEffect(()=>{
    //   const fetchData = async() => {
    //     navigator.geolocation.getCurrentPosition(function(position){
    //       setLat(position.coords.latitude);
    //       setLong(position.coords.longitude);
    //     })
    //     // console.log("Latitude is:", lat)
    //     // console.log("Longitude is:", long)
    //   }  
      

    //   const currentaURL = `${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    //   await fetch(currentaURL)
    //   .then(res=> res.json())
    //   .then(result =>{
    //     setCLocationData(result);
    //     console.log(result)
    //   })
    //   fetchData();
    // },[lat, long])

    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
  
        await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        .then(res => res.json())
        .then(result => {
          setCLocationData(result)
          // console.log(result);
        });
      }
      fetchData();
    }, [lat,long])

    // console.log(cLocationData)

    const api_call = async (e) =>{
        e.preventDefault();
        const location = e.target.elements.location.value;
        if(!location) {
          return setError("Please enter a correct location Name"), setWeather(null)
        }
        
        const baseUrl = `${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
        
        const request = axios.get(baseUrl);
        const responce = await request;

        setWeather(responce.data);
        // console.log(responce.data);

        e.target.elements.location.value = '';
    }
    
    // console.log(weather.main.temp)
    // console.log(cLocationData.main.temp)


    return (
    <>
      <Context.Provider value={{api_call, weather, cLocationData}}>
        {error && <Error error={error}/>}
        <SearchLocation />
        {/* <WeatherInfo /> */}
        {cLocationData && <WeatherInfo />}
		  </Context.Provider>
    </>
  )
}

export default withLayout(Home)