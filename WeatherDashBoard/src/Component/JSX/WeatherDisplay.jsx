function WeatherDisplay({ loading, weather, city }) {
    if (loading) {
        return (
            <p className="loading-text">
                ⏳ 날씨 정보를 불러오는 중...
            </p>
        );
    }

    if (!weather) {
        return (
            <p>
                ❌ 데이터가 없습니다.
            </p>
        );
    }

    return (
        <div className="weather-info">
            <h3>🌤️ {city}의 현재 날씨</h3>
            <p>🌡️ 기온 :<strong> {weather.temp}</strong></p>
            <p>☁️ 상태 : {weather.condition}</p>
            <p>💧 습도 : {weather.humidity}%</p>
        </div>
    );
}

export default WeatherDisplay;