import React, { useContext } from 'react'
import Context from '../../Context';

const WeatherInfo = () => {

    const {weather, cLocationData} = useContext(Context);
    // const [temp] = weather.main;
    // console.log(props)




    // weather icon pick form weatherAPI
        // var iconcode = weather.weather[0].icon;
        // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // weather icon pick form weatherAPI



    // date information
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const d = new Date();
        const dayName = days[d.getDay()];
        const monthN = monthNames[d.getMonth()]
        const dateIs = d.getDate();
        const yearIs = d.getFullYear();
    // date information


    // console.log(weather ? (weather.main.temp) : (cLocationData.main.temp))
    console.log(cLocationData.main.temp)
    // console.log(cLocationData.cod)


    return (

        <>
            <div className="forecast-table">
                <div className="container">
                    <div className="forecast-container">
                        <div className="today forecast">
                            <div className="forecast-header">
                                <div className="day">{dayName}</div>
                                <div className="date">{dateIs} {monthN} {yearIs}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="location">{weather ? (weather.name):(cLocationData.name)}</div>
                                <div className="degree">
                                    {/* <div className="num">{Math.round(weather.main.temp)}<sup>o</sup>C</div> */}
                                    <div className="num">{Math.round(weather ? weather.main.temp:cLocationData.main.temp)}<sup>o</sup>C</div>
                                    <div className="forecast-icon forecast-icon-main">
                                    {/* <img src={iconurl} alt="" /> */}
                                    </div>
                                </div>
                                <span><img src="assets/images/icon-umberella.png" alt="" />20%</span>
                                <span><img src="assets/images/icon-wind.png" alt="" />18km/h</span>
                                {/* <span><img src="assets/images/icon-compass.png" alt="" />{weather.weather[0].main}</span> */}
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">{days[(d.getDay())+1]}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="assets/images/icons/icon-3.svg" alt="" width={48} />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">{days[(d.getDay())+2]}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="assets/images/icons/icon-5.svg" alt="" width={48} />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">{days[(d.getDay())+3]}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="assets/images/icons/icon-7.svg" alt="" width={48} />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">{days[(d.getDay())+4]}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="assets/images/icons/icon-12.svg" alt="" width={48} />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">{days[(d.getDay())+5]}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="assets/images/icons/icon-13.svg" alt="" width={48} />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                        <div className="forecast">
                            <div className="forecast-header">
                                <div className="day">{days[(d.getDay())-1]}</div>
                            </div>
                            <div className="forecast-content">
                                <div className="forecast-icon">
                                    <img src="assets/images/icons/icon-14.svg" alt="" width={48} />
                                </div>
                                <div className="degree">23<sup>o</sup>C</div>
                                <small>18<sup>o</sup></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default WeatherInfo