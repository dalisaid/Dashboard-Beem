import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from '../components/DataTable';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { icon } from 'leaflet';

export const DriverRides = () => {


    const [RidesDriver, setRidesDriver] = useState([]);
    const [StartLatitude, setStartLatitude] = useState(36.79539375064748);
    const [StartLongitude, setStartLongitude] = useState(10.180530919318038);
    const [DestinationLatitude, setDestinationLatitude] = useState(36.786980585955796);
    const [DestinationLongitude, setDestinationLongitude] = useState(10.174600889315332);
    const [startLocationName, setStartLocationName] = useState('');
    const [destinationLocationName, setDestinationLocationName] = useState('');
    const [mapKey, setMapKey] = useState(0);

    
    const getRidesDriver= async () => {
      try {
        const response = await axios.get('http://localhost:5000/driver/getridesDriver', {
          withCredentials: true
        });
        if (response.status === 200) {
            setRidesDriver(response.data.result);
        } else {
          console.log('Unexpected status code:', response.status);
          alert('Error getting data from token');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Network error or other issue occurred');
      }
    };
    const getPlaceName = async (latitude, longitude) => {
      try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);
          if (response.data.display_name) {
              return response.data.display_name;
          } else {
              return 'Unknown';
          }
      } catch (error) {
          console.error('Error:', error);
          return 'Error';
      }
  };

    useEffect(() => {
        getRidesDriver();
    }, []);
    useEffect(() => {
      // Whenever StartLatitude or StartLongitude changes, update the map by changing the key
      setMapKey(prevKey => prevKey + 1);
  }, [StartLatitude, StartLongitude]);

  useEffect(() => {
    const fetchLocationNames = async () => {
        const startName = await getPlaceName(StartLatitude, StartLongitude);
        const destinationName = await getPlaceName(DestinationLatitude, DestinationLongitude);
        setStartLocationName(startName);
        setDestinationLocationName(destinationName);
    };
    fetchLocationNames();
}, [StartLatitude, StartLongitude, DestinationLatitude, DestinationLongitude]);

const StartIcon = icon({
  //iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconUrl: '/img/start.png', // Corrected icon URL with file extension and full path
  iconSize: [35, 35], // Size of the icon
  iconAnchor: [12.5, 41], // Point of the icon that corresponds to the marker's location
  popupAnchor: [1, -34],// Offset of the popup from the marker
});
const DestinationIcon = icon({
  //iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconUrl: '/img/destination.png', // Corrected icon URL with file extension and full path
  iconSize: [35, 35], // Size of the icon
  iconAnchor: [12.5, 41], // Point of the icon that corresponds to the marker's location
  popupAnchor: [1, -34],// Offset of the popup from the marker
});
const handleMapChange = async (StartLatitude, StartLongitude, DestinationLatitude, DestinationLongitude) => {
  setStartLatitude(parseFloat(StartLatitude));
  setStartLongitude(parseFloat(StartLongitude));
  setDestinationLatitude(parseFloat(DestinationLatitude));
  setDestinationLongitude(parseFloat(DestinationLongitude));


}

    const columns = [
        { field: 'DriverID', headerName: 'DriverID', width: 90 },
        { field: 'fullName', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150, flex: 1 },
        { field: 'StartLatitude', headerName: 'StartLatitude', width: 150 },
        { field: 'StartLongitude', headerName: 'StartLongitude', width: 150 },
        { field: 'DestinationLatitude', headerName: 'DestinationLatitude', width: 110, headerAlign: 'left', align: 'left', flex: 1 },
        { field: 'DestinationLongitude', headerName: 'DestinationLongitude', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
        { field: 'DateRides', headerName: 'DateRides', headerAlign: 'left', align: 'left', width: 160, flex: 1 },
        {
          field: 'Location',
          headerName: 'Location',
          width: 100,
          disableColumnMenu: true,
          sortable: false,
          renderCell: (params) => (

              <FaMapMarkerAlt className="location" style={{ color: '#e10d05', marginRight: '5mm' }} onClick={() => handleMapChange(params.row.StartLatitude, params.row.StartLongitude, params.row.DestinationLatitude, params.row.DestinationLongitude)} />
          ),
      },
    ];

return (
    <div style={{ marginLeft: '250px', marginTop: "40px" }}>
                            <div style={{ width: '100%', height: '500px' }}>
                                <MapContainer key={mapKey} center={[StartLatitude, StartLongitude]} zoom={10} style={{ width: '100%', height: '100%' }}>
                                    <TileLayer
                                        attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
                                    />
                                    <Marker position={[StartLatitude, StartLongitude]} icon={StartIcon}><Popup>START LOCATION:{startLocationName}</Popup></Marker>
                                    <Marker position={[DestinationLatitude, DestinationLongitude]} icon={DestinationIcon}><Popup>DESTINATION:{destinationLocationName}</Popup>
                                    </Marker>
                                </MapContainer>
                            </div>

        <h1>Rides</h1>

        <div>
          <DataTable rows={RidesDriver} columns={columns}  />
        </div>













        
    </div>
)


}