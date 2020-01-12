import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import axios from 'axios'

async function getCoordinates(city) {
  console.log(city);
  if (city) {
    let index = city.indexOf(",");
    city = city.substring(0, index);
    console.log("city ", city);
    let url = "http://127.0.0.1:5000/coordinates/" + city;
    console.log("This is what we should get before", url);
    const data = await axios.get(url);
    console.log("This is what we should get", data);
    return data;
  }
}

const SimpleMap = (props) => {
  console.log("props of simple ", props);
  let locations = props.locations;
  locations.forEach((city) => {
    let coord = getCoordinates(city);
    // console.log("coordinates ", coord);
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
          lat={11.0168}
          lng={76.9558}
          name="My Marker"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;