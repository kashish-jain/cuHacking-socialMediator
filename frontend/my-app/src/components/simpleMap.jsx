import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import axios from 'axios'

let mapsi = [];
async function getCoordinates(city) {
  console.log(city);
  if (city) {
    let index = city.indexOf(",");
    if (index > 0) {
      city = city.substring(0, index);
    }
    let url = "http://127.0.0.1:5000/coordinates/" + city;
    const data = await axios.get(url);
    console.log("data", data);
    mapsi.push(data.data);
    return data;
  }
}

// function creatingMarkers() {
//   let list = [];
//   mapsi.forEach((item) => {
//   let marker =  <Marker lat={item.lat} lng={item.lng}>
//     </Marker>
//     list.push(marker);
//   });
//   console.log(list);
//   return list;
// }


const SimpleMap = (props) => {
  console.log("props of simple ", props);
  // let locations = props.locations;
  let new_locations = ["Ottawa", "Toronto", "Waterloo", "Missisaiga", "Oshawa", "Hamilton"]
  new_locations.forEach((city) => {
    let coord = getCoordinates(city);
    console.log("coordinates ", coord);
  });
  const [center, setCenter] = useState({ lat: 45, lng: -96.5 });
  const [zoom, setZoom] = useState(3.5);
  return (
    <div style={{ height: '90vh', width: '90%', margin: "auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCUIaTjNNi_eYB8nNk2-MYoldu9Ane_Hpk' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={45.421}
          lng={-75.61}
          name="My Marker"
          color="blue"
        />

        <Marker
          lat={46.421}
          lng={-79.614}
          name="My Marker"
          color="blue"
        />       
         <Marker
          lat={45.425}
          lng={-74.619}
          name="My Marker"
          color="blue"
        />        
        <Marker
          lat={44.421}
          lng={-80.61}
          name="My Marker"
          color="blue"
        />        
        <Marker
          lat={44.521}
          lng={-75.11}
          name="My Marker"
          color="blue"
        />
        <Marker
          lat={43.421}
          lng={-79.61}
          name="My Marker"
          color="blue"
        />
        <Marker
          lat={43.821}
          lng={-76.912}
          name="My Marker"
          color="blue"
        />
        <Marker
          lat={45.9}
          lng={-71.61}
          name="My Marker"
          color="blue"
        /> 
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;