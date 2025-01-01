import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import style from "./location.module.css"
import { MapContainer, TileLayer } from 'react-leaflet'
import { LocationMarker } from './LocationMarker'
export const Map = () => {
    const centerPoint: L.LatLngExpression = [36.59743336951434, 53.064613465708476]
    return (
        <>
            <div className={style.MapHolder}>
                <MapContainer className={style.MapContainer} center={centerPoint} zoom={200}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>
            </div>
        </>
    )
}