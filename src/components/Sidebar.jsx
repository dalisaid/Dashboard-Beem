import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUser, faCar, faMoneyCheckAlt, faCog, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';





export const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);

    const handleToggle = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    /* const [selectedComponent, setSelectedComponent] = useState('');
 
 
 
     const handleComponentSelect = (componentName) => {
         setSelectedComponent(componentName);
     };
 */
    const sidebarStyle = {
        width: expanded ? '280px' : '100px',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: '#441879',
        color: '#F74B00',
        transition: 'width 0.3s ease'
    };

    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);
    const [hovered7, setHovered7] = useState(false);

    const buttonStyle = {
        fontSize: expanded ? '30px' : '20px',
        marginLeft: expanded ? '35px' : '2',
        transition: 'font-size 0.2s ease, margin-left 0.1s ease'
    };

    const linkstyle =(hovered)=>( {
        background: hovered ? '#584cac' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        padding: expanded ? '25px 20px 10px 55px' : '40px 20px 10px 53px', // Adjust padding when sidebar is expanded
        marginBottom: '30px', // Adjust this value to increase or decrease space between links
        color: 'white',
        borderRadius: '5px',
        marginRight: '10px',
        marginLeft: '10px',
        position: 'relative',
        transition: 'background 0.2s ease',
        fontSize: '18px',
        marginTop: expanded ? '20px' : '50px'
    });


    const iconstyle = {
        position: 'absolute', // Position the icon absolutely within its parent link
        left: expanded ? '20px' : '5px', // Adjust this value to position the icon as needed
        top: expanded ? '60%' : '50%', // Adjust top position when sidebar is expanded
        transform: 'translateY(-50%)',
        padding: '30px',
        padding: expanded ? '0px' : '20px', // Add padding when expanded
        borderRadius: '10%' // Add border radius to make the icon round
    };

    


    const mainContentStyle = {
        width: '100%',
        marginLeft: expanded ? '50px' : '-80px',
        transition: 'margin-left 0.3s ease'
    };


    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar-container" style={sidebarStyle}>
                <div className="sidebar-content" style={{ paddingTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {expanded && (
                            <div className="logo" style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                                <img src="/img/logo.jpg" alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
                                <span className="bold-text" style={{ fontWeight: 'bold', fontSize: '20px' }}>Beem Tunisie</span>
                            </div>
                        )}
                        <div style={buttonStyle}>
                            <Button onClick={handleToggle} variant="outline-light">
                                {expanded ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} /> }
                            </Button>
                        </div>
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
                            <Link to={`/dashboard`} style={{ textDecoration: 'none' }} >
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered1) }}
                                    onMouseEnter={() => setHovered1(true)}
                                    onMouseLeave={() => setHovered1(false)}
                                                                    
                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faChartBar} />
                                    </span>
                                    {expanded && (
                                        <span>Dashboard</span>
                                    )}
                                </div>
                            </Link>

                            {/* Drivers */}
                            <Link to={`/Drivers`} style={{ textDecoration: 'none' }} >
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered2) }}
                                    onMouseEnter={() => setHovered2(true)}
                                    onMouseLeave={() => setHovered2(false)}
                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    {expanded && (
                                        <span>Drivers</span>
                                    )}
                                </div>
                            </Link>

                            {/* Clients */}
                            <Link to={`/Clients`} style={{ textDecoration: 'none' }} >
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered3) }}
                                    onMouseEnter={() => setHovered3(true)}
                                    onMouseLeave={() => setHovered3(false)}                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faUsers} />
                                    </span>
                                    {expanded && (
                                        <span>Customers</span>
                                    )}
                                </div>
                            </Link>

                            {/* Rides */}
                            <Link to={`/rides`} style={{ textDecoration: 'none' }}>
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered4)}}
                                    onMouseEnter={() => setHovered4(true)}
                                    onMouseLeave={() => setHovered4(false)}                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faCar} />
                                    </span>
                                    {expanded && (
                                        <span>Rides</span>
                                    )}
                                </div>
                            </Link>

                            {/* Transaction */}
                            <Link to={`/transaction`} style={{ textDecoration: 'none' }}>
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered5) }}
                                    onMouseEnter={() => setHovered5(true)}
                                    onMouseLeave={() => setHovered5(false)}
                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faMoneyCheckAlt} />
                                    </span>
                                    {expanded && (<span>Transaction</span>)}
                                </div>
                            </Link>

                            {/* Settings */}
                            <Link to={`/settings`} style={{ textDecoration: 'none' }}>
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered6) }}
                                    onMouseEnter={() => setHovered6(true)}
                                    onMouseLeave={() => setHovered6(false)}                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faCog} />
                                    </span>
                                    {expanded && (<span>Settings</span>)}
                                </div>
                            </Link>

                            {/* Accounts */}
                            <Link to={`/accounts`} style={{ textDecoration: 'none' }}>
                                <div
                                    className="dashboard-link"
                                    style={{ ...linkstyle(hovered7) }}
                                    onMouseEnter={() => setHovered7(true)}
                                    onMouseLeave={() => setHovered7(false)}                                >
                                    <span className="icon" style={iconstyle}>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                    </span>
                                    {expanded && (<span>Accounts</span>)}
                                </div>
                            </Link>
                        </div>                   
                        
                        
                        
                        
                         </div>
                </div>
            </div>
            <div style={mainContentStyle}>

            </div>

        </div>

    );
}
