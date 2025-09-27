import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AirIcon from '@mui/icons-material/Air';
export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1559441157-90a6fde59b55?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info = {
    //     city: "Delhi",
    //     feelslike: 33.26,
    //     temp: 30.55,
    //     tempMin: 30.55,
    //     tempMax: 30.55,
    //     himidity: 57,
    //     weather: "overcast clouds",
    // }
    return (
        <div className="InfoBox">
            <div className='card'>
                <Card sx={{ maxWidth: 345 }} style={{boxShadow:"0 4px 8px 0 rgba(10, 9, 9, 0.2), 0 6px 20px 0 rgba(12, 8, 8, 0.19)"}}>
                    {/* <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={INIT_URL}
                        style={{opacity:"revert"}}
                    /> */}
                    <CardContent style={{backgroundColor:"rgb(56, 138, 215) ",backgroundImage:"https://plus.unsplash.com/premium_photo-1667143324668-064f130f731d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp; &nbsp;
                            {info.himidity >80 ? <ThunderstormIcon/> : info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p style={{textAlign:"center",display:"flex"}}>{<DeviceThermostatIcon/>}&nbsp;&nbsp;Temperature = {info.temp}&deg;C</p>
                            <p style={{textAlign:"center",display:"flex"}}>{<WaterDropIcon/>}&nbsp;&nbsp;Humidity = {info.humidity}</p>
                            <p style={{textAlign:"center",display:"flex"}}>{<WbSunnyIcon/>}&nbsp;&nbsp;Max Temp = {info.tempMax}&deg;C</p>
                            <p style={{textAlign:"center",display:"flex"}}>{<AcUnitIcon/>}&nbsp;&nbsp;Min Temp = {info.tempMin}&deg;C</p>
                            <p style={{textAlign:"center",display:"flex", flexWrap:"wrap"}}>{<AirIcon/>}&nbsp;&nbsp;The weather can be describe as&nbsp;&nbsp; <b>{info.weather}</b>&nbsp;&nbsp;and feels like {info. feelsLike}&deg;C.</p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}