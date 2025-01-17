"use client";

import dynamic from "next/dynamic";
const YMap = dynamic(() => import("ymap3-components").then(mod => mod.YMap), { ssr: false });
const YMapComponentsProvider = dynamic(() => import("ymap3-components").then(mod => mod.YMapComponentsProvider), { ssr: false });
const YMapControls = dynamic(() => import("ymap3-components").then(mod => mod.YMapControls), { ssr: false });
const YMapDefaultFeaturesLayer = dynamic(() => import("ymap3-components").then(mod => mod.YMapDefaultFeaturesLayer), { ssr: false });
const YMapDefaultSchemeLayer = dynamic(() => import("ymap3-components").then(mod => mod.YMapDefaultSchemeLayer), { ssr: false });
const YMapMarker = dynamic(() => import("ymap3-components").then(mod => mod.YMapMarker), { ssr: false });
const YMapZoomControl = dynamic(() => import("ymap3-components").then(mod => mod.YMapZoomControl), { ssr: false });
import { apiKey, location as LOCATION, markerLocation } from "./helpers";
import s from "./map.module.scss";
import PlaceMarker from "@/svg/placeMark.svg";
import customizationStyles from "./mapCustomization.json";
import { LngLat, VectorCustomizationItem } from "@yandex/ymaps3-types";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { clsx } from "clsx";

type MapProps = ComponentPropsWithoutRef<"div">;

function Map(props: MapProps) {
  const { className, ...restProps } = props;
  const classNames = clsx(s.map, className);
  const [zoom, setZoom] = useState<number>(18);

  useEffect(() => {
    if (window.innerWidth < 768) setZoom(15.4);
  }, []);

  return (
    <div className={classNames} {...restProps}>
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
            <YMapZoomControl />
          </YMapControls>
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
}

export default Map;
