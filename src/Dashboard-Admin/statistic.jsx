import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';
import { faUsers, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import {Card} from '../components/Card';

export const Statistique = () => {
    const [customercount, setcustomercount] = useState({ totalCustomers: 0, newCustomersThisMonth: 0 });
    const [drivercount, setdrivercount] = useState({ TotalDrivers: 0, newDriversThisMonth: 0 });
    const [amount, setAmount] = useState(null);
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
   
    const getStats = async () => {
        try {
            const response = await axios.get('http://localhost:5000/Stats', {
                withCredentials: true
            });
            if (response.status === 200) {
                setcustomercount(response.data.customerstats);
                setdrivercount(response.data.driverstats);
                setAmount(response.data.earningstats);
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
        getStats();
    }, []);

    const totalusers = customercount.totalCustomers + drivercount.TotalDrivers;
    const totalnewusers = customercount.newCustomersThisMonth + drivercount.newDriversThisMonth;

    return (
        <div>
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
                <Card
                    hovered={hovered1}
                    onMouseEnter={() => setHovered1(true)}
                    onMouseLeave={() => setHovered1(false)}
                    numbers={customercount.totalCustomers}
                    newThisMonth={customercount.newCustomersThisMonth}
                    cardName="customers"
                    icon={faUsers}
                />
                <Card
                    hovered={hovered2}
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    numbers={drivercount.TotalDrivers}
                    newThisMonth={drivercount.newDriversThisMonth}
                    cardName="drivers"
                    icon={faUsers}
                />
                <Card
                    hovered={hovered3}
                    onMouseEnter={() => setHovered3(true)}
                    onMouseLeave={() => setHovered3(false)}
                    numbers={totalusers}
                    newThisMonth={totalnewusers}
                    cardName="users"
                    icon={faUsers}
                />
                <Card
                    hovered={hovered4}
                    onMouseEnter={() => setHovered4(true)}
                    onMouseLeave={() => setHovered4(false)}
                    numbers={amount}
                    cardName="Earnings"
                    icon={faMoneyBill}
                />
            </div>
        </div>
    );
};

