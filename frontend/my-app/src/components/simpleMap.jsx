import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const SimpleMap = () => {
    const [center, setCenter] = useState({lat: 45, lng: -96.5 });
    const [zoom, setZoom] = useState(3.5);
    return (
        <div style={{ height: '90vh', width: '90%',margin: "auto" }}>
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