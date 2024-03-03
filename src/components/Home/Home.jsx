import React from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import dataQueue from '../../QM_attributes.json';

function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('../../../public/manifest.json');
                console.log(dataQueue);
                // const jsonData = await response.json();
                setData(dataQueue);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div id="sidebar">
            <ul>
                {
                    dataQueue.data.map(x => <li>
                        <a href="#">{x.QMNAME}</a>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Home
