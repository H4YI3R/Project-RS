async function WeatherApi(city) {
    const API_KEY = "e7134a04171148334a6a4f4302334c00";

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`
    );

    if (!response.ok) {
        throw new Error("날씨 데이터를 불러오지 못했습니다.");
    }

    const data = await response.json();

    return {
        temp: `${data.main.temp}°C`,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
    };
}

export default WeatherApi;