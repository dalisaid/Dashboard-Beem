import React, { useState, useEffect } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsGeoFill } from 'react-icons/bs';
import axios from 'axios';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';




export const Rides = () => {

    const [RidesData, setRidesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [StartLatitude, setStartLatitude] = useState(36.79539375064748);
    const [StartLongitude, setStartLongitude] = useState(10.180530919318038);
    const [DestinationLatitude, setDestinationLatitude] = useState(36.786980585955796);
    const [DestinationLongitude, setDestinationLongitude] = useState(10.174600889315332);
    const [startLocationName, setStartLocationName] = useState('');
    const [destinationLocationName, setDestinationLocationName] = useState('');


    const getRides = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getRides', {
                withCredentials: true
            });
            if (response.status === 200) {
                setRidesData(response.data.result);
                setLoading(false);
                // Handle successful response

            } else {
                console.log('Unexpected status code:', response.status);           // Handle other status codes if needed
                alert('Error getting data from token');
            }
        } catch (error) {
            console.error('Error:', error);         // Handle network errors or other issues
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
        getRides();     // Call the function to fetch drivers
    }, []);



    useEffect(() => {
        const fetchLocationNames = async () => {
            const startName = await getPlaceName(StartLatitude, StartLongitude);
            const destinationName = await getPlaceName(DestinationLatitude, DestinationLongitude);
            setStartLocationName(startName);
            setDestinationLocationName(destinationName);
        };
        fetchLocationNames();
    }, [StartLatitude, StartLongitude, DestinationLatitude, DestinationLongitude]);



    // Define a custom icon using Leaflet's icon function
    const defaultIcon = icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png', // Replace with your desired icon URL
        iconSize: [25, 41], // Size of the icon
        iconAnchor: [12.5, 41], // Point of the icon that corresponds to the marker's location
        popupAnchor: [1, -34],// Offset of the popup from the marker
    });


    //const position = []; // Initial center on start location
    //const destination = [];



    const [view, setView] = useState('all');
    const handleViewChange = (option) => {
        setView(option);
    };



    const handleMapChange = async (StartLatitude, StartLongitude, DestinationLatitude, DestinationLongitude) => {
        setStartLatitude(parseFloat(StartLatitude));
        setStartLongitude(parseFloat(StartLongitude));
        setDestinationLatitude(parseFloat(DestinationLatitude));
        setDestinationLongitude(parseFloat(DestinationLongitude));


    }




    const columns = [
        { field: 'id', headerName: 'RideID', width: 90 },
        {
            field: 'DriverID',
            headerName: 'DriverID',
            width: 150,

        },
        {
            field: 'CustomerID',
            headerName: 'CustomerID',
            width: 150,
            flex: 1

        },
        {
            field: 'DriverFullName',
            headerName: 'DriverFullName',
            width: 150,
            flex: 1

        },
        {
            field: 'CustomerFullName',
            headerName: 'CustomerFullName',
            width: 150,
            flex: 1

        },
        {
            field: 'StartLatitude',
            headerName: 'StartLatitude',
            width: 150,

        },
        {
            field: 'StartLongitude',
            headerName: 'Startlongitude',
            width: 150,

        },
        {
            field: 'DestinationLatitude',
            headerName: 'DestinationLatitude',
            type: 'Decimal',
            width: 110,
            headerAlign: 'left',
            align: 'left',
            flex: 1

        },
        {
            field: 'DestinationLongitude',
            headerName: 'DestinationLongitude',
            headerAlign: 'left',
            align: 'left',
            width: 160,
            flex: 1

        },
        {
            field: 'DateRides',
            headerName: 'DateRides',
            headerAlign: 'left',
            align: 'left',
            width: 160,
            flex: 1

        },
        {
            field: 'Location',
            headerName: 'Location',
            width: 100,
            disableColumnMenu: true,
            sortable: false,
            renderCell: (params) => (

                <Button className="location" style={{ color: '#e10d05', marginRight: '5mm' }} onClick={() => handleMapChange(params.row.StartLatitude, params.row.StartLongitude, params.row.DestinationLatitude, params.row.DestinationLongitude)} />
            ),
        },

    ];



    const loadingOverlay = (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <CircularProgress />
        </div>
    );

    return (
        <div style={{ marginLeft: '250px', marginTop: "6px" }}>

            <Box sx={{ height: 100, width: '95%', marginTop: "20px" }}>

                <section

                >
                    <h1>Rides</h1>
                    <Form className="mt-3 mr-3">
                        <div style={{ position: 'relative' }}>


                        </div>
                    </Form>
                </section>
                <div >

                    <Table >
                        <thead>



                        </thead>
                        <tbody>

                            <div style={{ width: '100%', height: '500px' }}>
                                <MapContainer center={[StartLatitude, StartLongitude]} zoom={15} style={{ width: '100%', height: '100%' }}>
                                    <TileLayer
                                        attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
                                    />
                                    <Marker position={[StartLatitude, StartLongitude]} icon={defaultIcon}><Popup>{startLocationName}</Popup></Marker>
                                    <Marker position={[DestinationLatitude, DestinationLongitude]} icon={defaultIcon}><Popup>{destinationLocationName}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </tbody>

                </Table>





                <Box sx={{ height: 750, width: '100%', marginTop: '10px' }}>
                    <DataGrid
                        rows={RidesData}
                        columns={columns}
                        loading={loading}

                        loadingOverlay={loadingOverlay}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 11,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        slots={{ toolbar: GridToolbar }} />
                </Box>

















                {/***************************************************


                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="2">
                                        <Button variant="outline-primary" className="btn btn-outline-warning" onClick={() => handleViewChange('all')}>ALL</Button>{' '}
                                        <Button variant="outline-primary" className="btn btn-outline-warning" onClick={() => handleViewChange('completed')}>COMPLETED</Button>{' '}
                                        <Button variant="outline-primary" className="btn btn-outline-warning" onClick={() => handleViewChange('accepted')}>ACCEPTED</Button>{' '}
                                        <Button variant="outline-primary" className="btn btn-outline-warning" onClick={() => handleViewChange('canceled')}>CANCELED</Button>{' '}
                                    </th>
                                </tr>
                                <tr>

                                </tr>
                            </thead>
                            <tbody>
                                {view === 'all' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                        </td>

                                    </tr>

                                )}
                                {view === 'all' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                        </td>

                                    </tr>

                                )}
                                {view === 'all' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                        </td>

                                    </tr>

                                )}
                                {view === 'all' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                        </td>

                                    </tr>

                                )}
                                {view === 'all' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                        </td>

                                    </tr>

                                )}
                                {view === 'completed' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                        </td>
                                    </tr>
                                )}
                                {view === 'completed' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Ezzahra                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                        </td>
                                    </tr>
                                )}
                                {view === 'accepted' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Megrine                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                        </td>
                                    </tr>
                                )}
                                {view === 'accepted' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Megrine                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                        </td>
                                    </tr>
                                )}
                                {view === 'accepted' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Megrine                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Manouba                                    </div>
                                        </td>
                                    </tr>
                                )}
                                {view === 'canceled' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Bardo                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Menzah                                    </div>
                                        </td>
                                    </tr>
                                )}
                                {view === 'canceled' && (
                                    <tr>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaMapMarkerAlt style={{ color: '#F64C02', marginRight: '5px' }} />
                                                Bardo                                    </div>
                                            <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsGeoFill style={{ color: 'green', marginRight: '5px' }} />
                                                Menzah                                    </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                       







                </Table>



 */}

        </div>



            </Box >

        </div >

    );
};

