import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsGeoFill } from 'react-icons/bs';

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';


// Define a custom icon using Leaflet's icon function
const defaultIcon = icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png', // Replace with your desired icon URL
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12.5, 41], // Point of the icon that corresponds to the marker's location
    popupAnchor: [1, -34] // Offset of the popup from the marker
});

const position = [36.79539375064748, 10.180530919318038]; // Initial center on start location
const destination = [36.786980585955796, 10.174600889315332];


export const Rides = () => {

    const [view, setView] = useState('all');
    const handleViewChange = (option) => {
        setView(option);
    };


    return (


        <div className="container-" style={{
            width: "70vw",
            height: "70vh",
            backgroundColor: "#fff5",
            marginLeft: "270px",
            marginTop: "190px",
            backdropFilter: "blur(7px)",
            boxShadow: "0 .4rem .8rem #0005",
            borderRadius: ".8rem",
            overflow: "hidden"
        }} >

            <section
                className="table__header"
                style={{
                    width: "100%",
                    height: "10%",
                    backgroundColor: "#fff4",
                    padding: ".8rem 1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h1>Rides</h1>
                <Form className="mt-3 mr-3">
                    <div style={{ position: 'relative' }}>


                    </div>
                </Form>
            </section>
            <div className="table_body" style={{
                width: "95%",
                maxHeight: "calc(89% - 1.6rem)",
                backgroundColor: "#fffb",
                margin: ".8rem auto",
                borderRadius: ".6rem",
                overflow: "auto",
                overflowY: "overlay"
            }}>

                <Table >
                    <thead>



                    </thead>
                    <tbody>

                        <div style={{ width: '100%', height: '500px' }}>
                            <MapContainer center={position} zoom={15} style={{ width: '100%', height: '100%' }}>
                                <TileLayer
                                    attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url='https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
                                />
                                <Marker position={position} icon={defaultIcon}>
                                    <Popup>Start Location</Popup>
                                </Marker>
                                <Marker position={destination} icon={defaultIcon}>
                                    <Popup>Destination</Popup>
                                </Marker>
                            </MapContainer>
                        </div>




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







                    </tbody>
                </Table>

            </div>

        </div>

    );
};

