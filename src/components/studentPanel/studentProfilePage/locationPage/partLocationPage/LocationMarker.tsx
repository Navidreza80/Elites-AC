import { Marker, useMapEvent } from "react-leaflet";
import L, { LeafletMouseEvent } from "leaflet"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import { useState } from "react";

export const LocationMarker = () => {
    const position: L.LatLngExpression = [36.59743336951434, 53.064613465708476]
    const [locList, setlocList] = useState<L.LatLngExpression[]>([]);
    const markerIcon = L.icon({
        iconUrl:iconUrl,
    });
    useMapEvent("click", (e: LeafletMouseEvent) => {
        setlocList((prev) => [...prev, e.latlng])
    })
    return <>
    <Marker position={position} icon={markerIcon}/>

        </>;
};