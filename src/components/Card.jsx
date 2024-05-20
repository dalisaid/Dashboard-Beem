import React, { useState } from 'react';
import axios from 'axios';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export const Card = ({ hovered, onMouseEnter, onMouseLeave, numbers, newThisMonth, cardName, icon }) => {
    const getCardStyle = (hovered) => ({
        position: "relative",
        background: hovered ? "var(--blue)" : "var(--white)",
        padding: "30px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        boxShadow: "0 7px 25px rgba(0, 0, 0, 0.08)",
        transition: "background 0.3s",
    });

    const getNumbersStyle = (hovered) => ({
        position: "relative",
        fontWeight: 500,
        fontSize: "1.5rem",
        color: hovered ? "var(--white)" : "var(--blue)",
    });

    const getCardNameStyle = (hovered) => ({
        color: hovered ? "var(--white)" : "var(--black2)",
        fontSize: "1.1rem",
        marginTop: "5px",
    });

    const getIconBxStyle = (hovered) => ({
        fontSize: "3.5rem",
        color: hovered ? "var(--white)" : "var(--black2)",
        marginLeft: '260px',
        marginTop: '-70px',
        fontSize: "2.5rem"
    });

    return (
        <div
            className="card"
            style={getCardStyle(hovered)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div>
                <div className="numbers" style={getNumbersStyle(hovered)}>
                    {numbers}
                </div>
                <div className="cardName" style={getCardNameStyle(hovered)}>
                    +{newThisMonth} {cardName}
                </div>
            </div>
            <div className="iconBx" style={getIconBxStyle(hovered)}>
                <FontAwesomeIcon icon={icon} />
            </div>
        </div>
    );
};

