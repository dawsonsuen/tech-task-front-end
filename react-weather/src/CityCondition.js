import React from 'react';
import Skycons from 'react-skycons';
export default function CityCondition(props) {
    const {city, weather, temp, icon,precipitation, humidity, wind} = props;
    

    return (
        <div className='box'>
            
          <section className="left">

              <div className='location'>{city}</div>
              <div className='time'></div>
              <div className='weather'>{weather}</div>
             <div className='icon'>
              <Skycons 
                color='grey' 
                icon={icon}
                autoplay={true}
                />
              </div>
              <div className='temperature'>{Math.floor((temp-32)*5/9)}<span> ℃</span></div>


          </section>
          <section className='right'>
             <div className='precipitation'>Precipitation: {precipitation*100}%</div>
             <div className='humidity'>Humidity: {Math.floor(humidity*100)}%</div>
             <div className='wind'>Wind: {wind} km/h</div>
             <div className='darksky'>Powered by DarkSky</div>

          </section>


        </div>
    )
  }
  
