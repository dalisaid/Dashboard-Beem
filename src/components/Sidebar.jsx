import React from 'react';
import '../css/App.css';
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
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className="logo">
                    <img src="/img/logo.jpg" alt="Logo" />
                    <span className="bold-text">Beem Tunisie</span>
                </div>
                <div className="menu-text">menu</div>
                <div className="dashboard-box">
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faChartBar} />
                        </span> Dashboard
                    </a>
                    
                    <a href="#" className="dashboard-link">
                    <Link  to={`/Drivers`} style={{textDecoration:'none' , color: 'white'}}> 
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span> Drivers
                        </Link>
                    </a>
                    
                    
                    <Link  to={`/Clients`} style={{textDecoration:'none' , color: 'white'}}> 
                    <a href="#" className="dashboard-link">
                        <span className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </span> Customers
                        </a>
                        </Link>
                    
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