import { useEffect, useState } from "react";
import "../CSS/PracticePage.css";
import Api from "../../Api/JS/WeatherApi";

import WeatherSelect from "../../Component/JSX/WeatherSelect";
import WeatherDisplay from "../../Component/JSX/WeatherDisplay";

function PracticePage() {
    const [city, setCity] = useState("Seoul");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        Api(city)
            .then((data) => {
                setWeather(data);
            })
            .catch((error) => {
                console.error(error);

                setWeather(null);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [city]);

    return (
        <div className="practice-container">
            <h1 className="practice-title">실습</h1>
            <hr/>
            <div className="weather-box">
                <h2>실시간 날씨 대시보드</h2>
                <WeatherSelect city={city} setCity={setCity}/>
                <hr/>
                <WeatherDisplay loading={loading} weather={weather} city={city}/>
            </div>
        </div>
    );
}

export default PracticePage;