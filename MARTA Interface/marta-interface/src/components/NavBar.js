import { useState } from 'react';
import { useEffect } from 'react';
import './css/NavBar.css';

export default function NavBar(props) {
    const {currColor, currStation, setCurrStation} = props;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const stationsURL = "http://13.59.196.129:3001/stations/";

    async function getData() {
        const res = await fetch(stationsURL + currColor.toLowerCase());
        const data = await res.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [currColor]);

    return (
        <div className="navBar">
            <p id="navBarHeader">Select your starting station</p>
            <button className="navBarElement" style={{color: (currStation === "ALL") ? 'white' : 'darkgray'}} onClick={() => {
                setCurrStation("ALL");
            }}><p>All Stations</p></button>
            {data?.map((station) => {
                return (
                    <button className="navBarElement" style={{color: (currStation === station) ? 'white' : 'darkgray', borderColor: (currStation === station) ? 'white' : 'lightgray'}} onClick={() => {
                        setCurrStation(station)
                    }}><p>{station}</p></button>
                )
            })}
        </div>
    )

}