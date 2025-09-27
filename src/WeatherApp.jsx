import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function weatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 33.26,
        temp: 30.55,
        tempMin: 30.55,
        tempMax: 30.55,
        humidity: 57,
        weather: "overcast clouds",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{color:"rgb(56, 138, 215) ", marginBottom:"50px",textShadow:" 2px 2px black"}}>Weather App</h1>
             <SearchBox updateInfo={updateInfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}