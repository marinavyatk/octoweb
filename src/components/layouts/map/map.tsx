"use client";

import {
  YMap,
  YMapComponentsProvider,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
  YMapZoomControl
} from "ymap3-components";
import { apiKey, location as LOCATION, markerLocation } from "./helpers";
import s from "./map.module.scss";
import PlaceMarker from "@/svg/placeMark.svg";
import customizationStyles from "./mapCustomization.json";
import { LngLat, VectorCustomizationItem } from "@yandex/ymaps3-types";
import { useEffect, useState } from "react";

function Map() {
  const [zoom, setZoom] = useState<number>(18);
  useEffect(() => {
    if (window.innerWidth < 768) setZoom(15.4);
  }, []);

  return (
    <div className={s.innerYandexMap}>
      <YMapComponentsProvider apiKey={apiKey} lang="ru_RU">
        <YMap
          key="map"
          location={{ center: LOCATION.center, zoom }}
          mode="vector"
          theme="dark"
          behaviors={["drag", "dblClick", "pinchRotate", "pinchZoom"]}
        >
          <YMapDefaultSchemeLayer
            customization={customizationStyles as VectorCustomizationItem[]}
          />
          <YMapDefaultFeaturesLayer />
          <YMapMarker coordinates={markerLocation.center as LngLat}>
            <div className={s.placeMarkContainer}>
              <PlaceMarker className={s.placeMarker} />
              <span>Мы здесь!</span>
            </div>
          </YMapMarker>
          <YMapControls position="bottom">
            <YMapZoomControl/>
          </YMapControls>
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
}

export default Map;
