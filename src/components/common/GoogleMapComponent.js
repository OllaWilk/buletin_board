import React from 'react';
import { 
  GoogleMap, 
  withScriptjs, 
  withGoogleMap,
} from 'google-maps-react';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51, lng: 17 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function GoogleMapComponent() {
  return (
    <div>
      <WrappedMap />
    </div>
  );
}


export { GoogleMapComponent };