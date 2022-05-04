import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Map,
  TileLayer,
  Marker,
  Popup,
  Circle,
  FeatureGroup,
  Rectangle } from 'react-leaflet';
import LayersControl2, { ControlledLayerItem } from "./LayerControl2";
const center = [51.505, -0.09];
const rectangle = [[16.07425, 108.21846], [16.07525, 108.21946]];

function App() {
  const position = [16.07425, 108.21846];
  return (
    <div className="App">
      <Map style={{ height: "100vh" }} center={position} zoom={18}>
        <LayersControl2 position="topright">
          <ControlledLayerItem
            checked={true}
            name="Esri WorldImagery"
            group="BaseLayers"
          >
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
              attribution='&copy; <a href="Esri &mdash">Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community</a> contributors'
            />
          </ControlledLayerItem>
          <ControlledLayerItem
            checked={false}
            name="OpenStreetMap"
            group="BaseLayers"
          >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </ControlledLayerItem>
          <ControlledLayerItem
            checked={false}
            name="Rectangle"
            group="Rectangles"
          >
            <Rectangle bounds={rectangle} />
          </ControlledLayerItem>

          <ControlledLayerItem checked={false} name="2 circles" group="Circles">
            <FeatureGroup color="purple">
              <Circle center={[51.51, -0.06]} radius={200} />
              <Circle center={[51.58, -0.06]} radius={200} />
            </FeatureGroup>
          </ControlledLayerItem>
          <ControlledLayerItem checked={false} name="1 circle" group="Circles">
            <FeatureGroup color="blue">
              <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>
          </ControlledLayerItem>
        </LayersControl2>
      </Map>
    </div>
  );
}

export default App;
