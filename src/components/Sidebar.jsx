import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartBar,
    faUser,
    faCar,
    faMoneyCheckAlt,
    faCog,
    faUserCircle,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
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
                    <Link to={`/dashboard`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute', // Position the icon absolutely within its parent link
                                left: '20px', // Adjust this value to position the icon as needed
                                top: '50%', // Position the icon vertically centered
                                transform: 'translateY(-50%)',
                                // Adjust this value to vertically center the icon
                                ':hover': {
                                    display: 'inline-block' /* Display the icon when the parent link is hovered */
                                }
                            }}>
                                <FontAwesomeIcon icon={faChartBar} />
                            </span> Dashboard
                        </a>
                    </Link>


                    <Link to={`/Drivers`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute', // Position the icon absolutely within its parent link
                                left: '20px', // Adjust this value to position the icon as needed
                                top: '50%', // Position the icon vertically centered
                                transform: 'translateY(-50%)',
                                // Adjust this value to vertically center the icon
                                ':hover': {
                                    display: 'inline-block' /* Display the icon when the parent link is hovered */
                                }
                            }}>
                                <FontAwesomeIcon icon={faUser} />
                            </span> Drivers
                        </a>
                    </Link>



                    <Link to={`/Clients`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#584cac'; }}
                            onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                        >
                            <span className="icon" style={{
                                position: 'absolute', // Position the icon absolutely within its parent link
                                left: '20px', // Adjust this value to position the icon as needed
                                top: '50%', // Position the icon vertically centered
                                transform: 'translateY(-50%)',
                                // Adjust this value to vertically center the icon
                                ':hover': {
                                    display: 'inline-block' /* Display the icon when the parent link is hovered */
                                }
                            }}>
                                <FontAwesomeIcon icon={faUser} />
                            </span> Customers
                        </a>
                    </Link>

                    <Link to={`/rides`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
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
                        </a>
                    </Link>

                    <Link to={`/transaction`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
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
                        </a>
                    </Link>

                    <Link to={`/settings`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
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
                        </a>
                    </Link>

                    <Link to={`/accounts`} style={{ textDecoration: 'none', color: 'white' }}>
                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
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
                        </a>
                    </Link>
                    <Link to={`/settings`} style={{ textDecoration: 'none', color: 'white' }}>


                        <a
                            href="#"
                            className="dashboard-link"
                            style={{
                                display: 'block',
                                padding: '10px 10px 10px 53px',
                                marginBottom: '5px',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                marginRight: '10px',
                                marginLeft: '10px',
                                top:'210px',
                                position: 'relative',
                                transition: 'background 0.3s ease', // Adding transition for smooth color change
                            }}
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
                            </span> Log Out
                        </a>
                    </Link>
                  

                </div>
            </div>
        </div>
    );
}