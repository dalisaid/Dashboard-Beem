import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsGeoFill } from 'react-icons/bs';

export const Rides = () => {
    const [view, setView] = useState('all');

    const handleViewChange = (option) => {
        setView(option);
    };

    return (
        <div className="container"  >
     
     <h4 style={{marginLeft:'190px' , marginTop:'200px',marginBottom:'-230px'}}>
          Rides
        </h4>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '350px'}}>
            
            <div style={{ width: '80%', marginLeft: '190px' }}>
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
            </div>
            <div style={{ width: '70%',marginLeft:'20px'}}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.4210652689494!2d10.760096210373385!3d34.74498458072413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d35aeaf8b55d%3A0x98b078173fb62f2f!2sSMART%20TAXI%20-%20Transport%20a%C3%A9roport%20toute%20la%20Tunisie%20-%20transport%20entre%20gouvernorat!5e0!3m2!1sfr!2stn!4v1711933300295!5m2!1sfr!2stn"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Beem-tunisie"

                ></iframe>
            </div>
        </div>
        </div>

    );
};
