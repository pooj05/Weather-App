import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city , setCity] = useState("");
    const API_URL = "";
    const API_KEY = "";
    let getWeatherInfo = async (city) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
    }   
    
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo);
        
    }
   
    return(
        <form className='Search' onSubmit={handleSubmit} >
            <TextField id="city" label="City-Name" variant="outlined"  value={city} onChange={handleChange} required/>
            &nbsp;&nbsp;&nbsp;
            <Button variant="contained"  type="submit" endIcon={<SearchIcon />} >Search</Button>
        </form>
    )
}
