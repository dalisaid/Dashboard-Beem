import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const SidebarLink = ({ to, icon, text, expanded }) => {
    const [hovered, setHovered] = useState(false);

    const linkStyle = {
        background: hovered ? '#584cac' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        padding: expanded ? '25px 20px 10px 55px' : '40px 20px 10px 53px', 
        marginBottom: '30px', 
        color: 'white',
        borderRadius: '5px',
        marginRight: '10px',
        marginLeft: '10px',
        position: 'relative',
        transition: 'background 0.2s ease',
        fontSize: '18px',
        marginTop: expanded ? '20px' : '50px'
    };

    const iconStyle = {
        position: 'absolute', 
        left: expanded ? '20px' : '5px', 
        top: expanded ? '60%' : '50%', 
        transform: 'translateY(-50%)',
        padding: '30px',
        padding: expanded ? '0px' : '20px', 
        borderRadius: '10%'
    };

    return (
        <Link
            to={to}
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="dashboard-link" style={linkStyle}>
                <span className="icon" style={iconStyle}>
                    <FontAwesomeIcon icon={icon} />
                </span>
                {expanded && <span>{text}</span>}
            </div>
        </Link>
    );
};

