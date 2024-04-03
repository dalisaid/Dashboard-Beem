import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartBar,
    faUser,
    faCar,
    faMoneyCheckAlt,
    faCog,
    faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const Sidebar = () => {
const linkstyle ={ 

display: 'flex',
alignItems: 'center',
padding: '10px 10px 10px 53px',
marginBottom: '5px',
color: 'white',
textDecoration: 'none',
borderRadius: '5px',
marginRight: '10px',
marginLeft: '10px',
position: 'relative',
transition: 'background 0.3s ease',


}

    return (
        <div style={{ display: 'flex' }}> {/* Add this div with display: 'flex' to align components */}
              <div className="sidebar-container" style={{
            width: '240px',
            height: '100%',
            position: 'fixed',
            top: '0',
            left: '0',
            backgroundColor: '#441879', // Dark purple background
            color: '#F74B00', // Text color
        }}>
            

            <div className="sidebar-content" style={{
                /* Add additional CSS styles here */
                paddingTop: '20px', // Example: adds 20px of padding to the top
            }}>
                <div className="logo" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px'
                }}>
                    <img src="/img/logo.jpg" alt="Logo" style={{
                        width: '50px', /* Adjust logo width */
                        height: 'auto', /* Maintain aspect ratio */
                        marginRight: '10px'
                    }} />
                    <span className="bold-text" style={{ fontWeight: 'bold', fontSize: '20px' }}>Beem Tunisie</span>
                </div>
                <div className="menu-text" style={{
                    marginTop: '20px', // Adjust margin as needed
                    marginBottom: '10px', // Adjust margin as needed
                    fontSize: '14px', // Increased font size
                    fontWeight: 'bold', // Increased font weight
                    letterSpacing: '1px',
                    color: '#ffffff', // White text color
                    marginLeft: '25px' // Adjust margin-left as needed
                }}>
                    MENU
                </div>
                <div className="dashboard-box" style={{
                    marginTop: '20px',/* Adjust margin as needed */
                    marginLeft: '10px'
                }}>


                    <div className='links'> 


                    <Link to={`/dashboard`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={linkstyle}
                            // Adding transition for smooth color change

                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute', // Position the icon absolutely within its parent link
                                left: '20px', // Adjust this value to position the icon as needed
                                top: '50%', // Position the icon vertically centered
                                transform: 'translateY(-50%)',
                                // Adjust this value to vertically center the icon
                            }}>
                                <FontAwesomeIcon icon={faChartBar} />
                            </span> Dashboard
                        </div>
                    </Link>

                    {/* Drivers */}
                    <Link to={`/Drivers`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={
                            linkstyle // Adding transition for smooth color change
                        }
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                                <FontAwesomeIcon icon={faUser} />
                            </span> Drivers
                        </div>
                    </Link>

                    {/* Clients */}
                    <Link to={`/Clients`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={ linkstyle}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                                <FontAwesomeIcon icon={faUser} />
                            </span> Customers
                        </div>
                    </Link>

                    {/* Rides */}
                    <Link to={`/rides`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={ linkstyle}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                                <FontAwesomeIcon icon={faCar} />
                            </span> Rides
                        </div>
                    </Link>

                    {/* Transaction */}
                    <Link to={`/transaction`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={ linkstyle}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} />
                            </span> Transaction
                        </div>
                    </Link>

                    {/* Settings */}
                    <Link to={`/settings`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={ linkstyle}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                                <FontAwesomeIcon icon={faCog} />
                            </span> Settings
                        </div>
                    </Link>

                    {/* Accounts */}
                    <Link to={`/accounts`} style={{ textDecoration: 'none', color: 'white' }}>
                        <div className="dashboard-link" style={ linkstyle}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}>
                                <FontAwesomeIcon icon={faUserCircle} />
                            </span> Accounts
                        </div>
                    </Link>

                    </div>
                </div>
            </div>
           

        </div>
        </div>

    );
}
