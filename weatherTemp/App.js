import React, { useState } from 'react';
import './index.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { useEffect } from 'react';

const App = () => {
  const [name,setName] = useState("Lahore");
  const [data,setData] = useState();

  function update(e){
    setName(e.target.value);
  }

  useEffect(() => {
      async function fetchData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=08b69e4173a607f94a8a248833188261`);
      const jsonData = await response.json();
      setData(jsonData.main);
      console.log(jsonData.main);
    }
      fetchData();
      
}, [name]);

  return (
    <>
    <div className="main">
    <Card className="box" sx={{ minWidth: 275 }}>
        <div className="search">
          <TextField id="outlined-basic" value={name} onChange={update} label="Search" variant="outlined" />
        </div>
           {
            (!data)?(
            <p>Data Not Found</p>
            ):(
              <div className="content">
              <h1><DeviceThermostatIcon/>{name}</h1>
              <Divider />
              <h2>{data.temp}°Cel</h2>
              <p>Min : {data.temp_min}°Cel | Max : {data.temp_max}°Cel</p>
              </div>
            )
           }   
    </Card>
    </div>
    </>
  )
}

export default App
   


//<h2>{data.temp}°Cel</h2>
//<p>Min : {data.temp_min}°Cel | Max : {data.temp_max}°Cel</p>