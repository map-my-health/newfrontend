import React from "react";
import './map.css'

export default function Map() {
  return (
    <div class="map">
    <h1 class="title">Results Map</h1>
    <img id="oregon-map" src={require('../../assets/images/oregon-general.png')} alt="oregon"/>
    <a href="https://www.mapcustomizer.com/map/Oregon_hospitals">Oregon Map</a>
    <img id="portland-map" src={require('../../assets/images/portland-general.png')} alt="portland"/>
    <a href="https://www.mapcustomizer.com/map/Oregon_hospitals_subset">Portland Map</a>
    <br/>
    <br/>
    </div>
  )
}
