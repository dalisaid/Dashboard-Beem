import React from 'react';
import '../css/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChartBar, 
    faUser, 
    faCar, 
    faMoneyCheckAlt, 
    faCog, 
    faUserCircle ,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons'; 

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="logo">
                    <img src="/img/logo.jpg" alt="Logo" />
                    <span className="bold-text">Beem Tunisie</span>
                </div>
                <div className="menu-text">MENU</div>
                <div className="dashboard-box">
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faChartBar} />
                        </span> Dashboard
                    </a>
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span> Drivers
                    </a>
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUserFriends} />
                        </span> Customers
                    </a>
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faCar} />
                        </span> Rides
                    </a>
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faMoneyCheckAlt} />
                        </span> Transaction
                    </a>
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faCog} />
                        </span> Settings
                    </a>
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </span> Accounts
                    </a>
                </div>
            </div>
        </div>
    );
}
