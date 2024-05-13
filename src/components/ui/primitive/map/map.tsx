import {
  YMap,
  YMapComponentsProvider,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
  YMapZoomControl,
} from "ymap3-components";
import { apiKey, location as LOCATION, markerLocation } from "./helpers";
import s from "./map.module.scss";
import PlaceMarker from "../../../../assets/placeMark.svg?react";
import customizationStyles from "../../../../assets/other/mapCustomization.json";
import { LngLat, VectorCustomizationItem } from "@yandex/ymaps3-types";

function Map() {
  return (
    <div className={s.innerYandexMap}>
      <YMapComponentsProvider apiKey={apiKey} lang="ru_RU">
        <YMap
          key="map"
          location={LOCATION}
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
            <YMapZoomControl />
          </YMapControls>
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
}

export default Map;
