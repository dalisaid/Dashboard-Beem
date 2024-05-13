import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import {SidebarLink} from '../components/SideBarLink';
import { faChartBar, faUser, faCar, faMoneyCheckAlt, faCog, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = () => {
    const [expanded, setExpanded] = useState(true);

    const handleToggle = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

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

    const buttonStyle = {
        fontSize: expanded ? '30px' : '20px',
        marginLeft: expanded ? '35px' : '2',
        transition: 'font-size 0.2s ease, margin-left 0.1s ease'
    };

    const mainContentStyle = {
        width: '100%',
        marginLeft: expanded ? '50px' : '0px',
        transition: 'margin-left 0.3s ease'
    };

    const links = [
        { to: '/dashboard', icon: faChartBar, text: 'Dashboard' },
        { to: '/Drivers', icon: faUser, text: 'Drivers' },
        { to: '/Clients', icon: faUsers, text: 'Customers' },
        { to: '/rides', icon: faCar, text: 'Rides' },
        { to: '/transaction', icon: faMoneyCheckAlt, text: 'Transaction' },
        { to: '/feedback', icon: faUserCircle, text: 'FeedBack' },
        { to: '/settings', icon: faCog, text: 'Settings' },  
    ];
    
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
                                {expanded ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
                            </Button>
                        </div>
                    </div>
                    <div className="menu-text" style={{
                        marginTop: '20px', 
                        marginBottom: '10px', 
                        fontSize: '14px', 
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        color: '#ffffff', 
                        marginLeft: '25px' 
                    }}>
                        MENU
                    </div>
                    <div className="dashboard-box" style={{
                        marginTop: '20px',
                        marginLeft: '10px'
                    }}>
                        <div className='links'>
                            {links.map((link, index) => (
                                <SidebarLink
                                    key={index}
                                    to={link.to}
                                    icon={link.icon}
                                    text={link.text}
                                    expanded={expanded}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={mainContentStyle}></div>
        </div>
    );
};

