import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faMoneyBill, faChatBubble, faCash } from '@fortawesome/free-solid-svg-icons';






export const Statistique = () => {

    const [customercount, setcustomercount] = useState({ totalCustomers: 0, newCustomersThisMonth: 0 });
    const [drivercount, setdrivercount] = useState({ TotalDrivers: 0, newDriversThisMonth: 0 });
    const [amount, setAmount] = useState(null)
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);

    const getTotalCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/gettotalcustomers', {
                withCredentials: true
            });
            if (response.status === 200) {
                setcustomercount(response.data.result);
                console.log("Total Customers:", response.data.result.totalCustomers);
                console.log("New Customers This Month:", response.data.result.newCustomersThisMonth);
            } else {
                console.log('Unexpected status code:', response.status); // Handle other status codes if needed
                alert('Error getting data from token');
            }
        } catch (error) {
            console.error('Error:', error); // Handle network errors or other issues
            alert('Network error or other issue occurred');
        }
    };



    const getTotalDrivers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/gettotaldrivers', {
                withCredentials: true
            });
            if (response.status === 200) {
                setdrivercount(response.data.result);
                console.log("Total Drivers:", response.data.result.TotalDrivers);
                console.log("New Drivers This Month:", response.data.result.newDriversThisMonth);
            } else {
                console.log('Unexpected status code:', response.status); // Handle other status codes if needed
                alert('Error getting data from token');
            }
        } catch (error) {
            console.error('Error:', error); // Handle network errors or other issues
            alert('Network error or other issue occurred');
        }
    };





    const getEarning = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getEarning', {
                withCredentials: true
            });
            if (response.status === 200) {
                setAmount(response.data.result);
                console.log("Total Amount:", response.data.result);
            } else {
                console.log('Unexpected status code:', response.status); // Handle other status codes if needed
                alert('Error getting data from token');
            }
        } catch (error) {
            console.error('Error:', error); // Handle network errors or other issues
            alert('Network error or other issue occurred');
        }
    };

    
    useEffect(() => {
        getTotalCustomers();
        getTotalDrivers();
        getEarning();
    }, []);






    const totalusers = customercount.totalCustomers + drivercount.TotalDrivers;
    const totalnewusers = customercount.newCustomersThisMonth + drivercount.newDriversThisMonth;
    console.log("Total users", totalusers);
    console.log("new users ", totalnewusers);

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
        <div >
            <div
                className="cardBox"
                style={{
                    position: "relative",
                    width: "100%",
                    padding: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gridGap: "30px"
                }}
            >
                <div
                    className="card"
                    style={getCardStyle(hovered1)}
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                >
                    <div>
                        <div className="numbers" style={getNumbersStyle(hovered1)}>
                            {customercount.totalCustomers}
                        </div>
                        <div className="cardName" style={getCardNameStyle(hovered1)}>
                            +{customercount.newCustomersThisMonth} customers added this month
                        </div>
                    </div>
                    <div className="iconBx" style={getIconBxStyle(hovered1)}>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                </div>

                <div
                    className="card"
                    style={getCardStyle(hovered2)}
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                >
                    <div>
                        <div className="numbers" style={getNumbersStyle(hovered2)}>
                            {drivercount.TotalDrivers}
                        </div>
                        <div className="cardName" style={getCardNameStyle(hovered2)}>
                            +{drivercount.newDriversThisMonth} drivers added this month
                        </div>
                    </div>
                    <div className="iconBx" style={getIconBxStyle(hovered2)}>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                </div>

                <div
                    className="card"
                    style={getCardStyle(hovered3)}
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                >
                    <div>
                        <div className="numbers" style={getNumbersStyle(hovered3)}>
                            {totalusers}
                        </div>
                        <div className="cardName" style={getCardNameStyle(hovered3)}>
                           +{totalnewusers} Users added this
                        </div>
                    </div>
                    <div className="iconBx" style={getIconBxStyle(hovered3)}>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                </div>

                <div
                    className="card"
                    style={getCardStyle(hovered4)}
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                >
                    <div>
                        <div className="numbers" style={getNumbersStyle(hovered4)}>
                            {amount} TND
                        </div>
                        <div className="cardName" style={getCardNameStyle(hovered4)}>
                            Earning
                        </div>
                    </div>
                    <div className="iconBx" style={getIconBxStyle(hovered4)}>
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </div>
                </div>
            </div>
        </div>
    );

}