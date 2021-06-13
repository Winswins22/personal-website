import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// import "leaflet/dist/leaflet.css";

const OSM_Map = () => {

  const position = [43.777702, -79.233238];

  return (
    <>
      <MapContainer center={position} zoom={4} scrollWheelZoom={false} style={{width: 'calc(50vw - 75px)', height: '100vh'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Ontario, Canada
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default OSM_Map
