import React, { useState, useEffect } from 'react';
import '../CSS/LessonPage.css';

function fetchWeatherData(city) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const weatherData = {
                Seoul: {
                    temp: '25°C',
                    condition: '맑음',
                    humidity: 60,
                },
                Newyork: {
                    temp: '18°C',
                    condition: '흐림',
                    humidity: 75,
                },
                Tokyo: {
                    temp: '22°C',
                    condition: '비',
                    humidity: 85,
                },
            };

            resolve(weatherData[city]);
        }, 1000);
    });
}

function WeatherApp() {
    const [city, setCity] = useState('Seoul');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchWeatherData(city).then((data) => {
            setWeather(data);
            setLoading(false);
        });
    }, [city]);

    return (
        <div className="weather-box">
            <h2>실시간 날씨 대시보드</h2>

            <label htmlFor="city-select">도시 선택:</label>

            <select
                id="city-select"
                className="city-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option value="Seoul">서울</option>
                <option value="Newyork">뉴욕</option>
                <option value="Tokyo">도쿄</option>
            </select>
            <hr />
            {loading ? (
                <p className="loading-text">
                    ⏳ 날씨 정보를 불러오는 중...
                </p>
            ) : weather ? (
                <div className="weather-info">
                    <h3>🌤️ {city}의 현재 날씨</h3>
                    <p>🌡️ 기온 : <strong>{weather.temp}</strong></p>
                    <p>☁️ 상태 : {weather.condition}</p>
                    <p>💧 습도 : {weather.humidity}%</p>
                </div>
            ) : (
                <p>❌ 데이터가 없습니다.</p>
            )}
        </div>
    );
}

function LessonPage() {
    return (
        <div className="lesson-container">
            <h1 className="lesson-title">수업</h1>
            <hr />
            <WeatherApp />
        </div>
    );
}

export default LessonPage;