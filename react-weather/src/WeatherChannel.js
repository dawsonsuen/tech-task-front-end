import React, {Component} from 'react';
import CityCondition from './CityCondition';
import {fetchConditionData} from './api/weather';
import Skycons from 'react-skycons';
export default class WeatherChannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditionData: {},
            detailData: {}
        }

    }

    
    handleConditionData(data) {
        const conditionData = {
            city: data.timezone,
            weather: data.currently.summary,
            icon: (data.currently.icon).split('-').join('_').toUpperCase(),
            temp: data.currently.temperature,
            precipitation: data.currently.precipIntensity,
            humidity: data.currently.humidity,
            wind: data.currently.windSpeed
        }
        
        this.setState ({conditionData});
    }
    
    componentWillMount() {
        fetchConditionData((data) => {this.handleConditionData(data)})
    }


    render() {    
        const {city,weather,icon,temp,precipitation, humidity, wind} = this.state.conditionData;
        return (
            <main>
                <CityCondition
                
                    

                        city={city}
                        weather={weather}
                        icon={icon}
                        temp={temp}
                    
                
                    
                        precipitation={precipitation}
                        humidity={humidity}
                        wind={wind}
                />
                
            </main>
        )
    }
}