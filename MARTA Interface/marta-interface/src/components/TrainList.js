import Train from "../components/Train.js";
import arrivals from "../server/trainData.js";
import './css/TrainList.css'
import { useState } from "react";
import { useEffect } from "react";

export default function TrainList(props) {
    const {currColor, currStation} = props;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState(data);
    const [arrivalsFilter, setArrivalsFilter] = useState(false);
    const [scheduledFilter, setScheduledFilter] = useState(false);
    const [direction1Filter, setDirection1Filter] = useState(false);
    const [direction2Filter, setDirection2Filter] = useState(false);

    const arrivalsURL = " http://13.59.196.129:3001/arrivals/";

    async function getData() {
        const res = await fetch(arrivalsURL + currColor.toLowerCase());
        const data = await res.json();
        setData(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [currColor]);

    function directionFirst() {
        if (currColor === "GOLD" || currColor === "RED") {
            return "Northbound";
        } else {
            return "Westbound";
        }
    }

    function directionSecond() {
        if (currColor === "GOLD" || currColor === "RED") {
            return "Southbound";
        } else {
            return "Eastbound";
        }
    }

    return (
        <div className="train-content">
            <div className="buttons" style={{marginLeft: (loading) ? '100px' : '0px'}}>
                <button className="arriving" style={{backgroundColor: (arrivalsFilter) ? 'black' : '#EFEFEF', color: (arrivalsFilter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    setArrivalsFilter(!arrivalsFilter)
                    if (scheduledFilter) {
                        setScheduledFilter(false);
                    }
                    if (!arrivalsFilter) {
                        setFilteredData(data?.filter(arrival => arrival["WAITING_TIME"] === "Arriving"));
                    }

                    if (!arrivalsFilter && direction1Filter) {
                        setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] === "Arriving" && arrival["DIRECTION"] === directionFirst())));
                    }
                    // if (!direction1Filter && arrivalsFilter) {
                    //     setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] === "Arriving" && arrival["DIRECTION"] === directionFirst())));
                    // } else if (!direction2Filter && arrivalsFilter) {
                    //     setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] === "Arriving" && arrival["DIRECTION"] === directionSecond())));
                    // } else if (arrivalsFilter) {
                    //     setFilteredData(data?.filter(arrival => arrival["WAITING_TIME"] === "Arriving"));
                    // }
                }}><p>Arriving</p></button>
                <button className="scheduled" style={{backgroundColor: (scheduledFilter) ? 'black' : '#EFEFEF', color: (scheduledFilter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    setScheduledFilter(!scheduledFilter)
                    if (arrivalsFilter) {
                        setArrivalsFilter(false);
                    }
                    if (direction1Filter) {
                        setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] !== "Arriving" && arrival["DIRECTION"] === directionFirst())));
                    }
                    if (direction2Filter) {
                        setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] !== "Arriving" && arrival["DIRECTION"] === directionSecond())));
                    } else {
                        setFilteredData(data?.filter(arrival => arrival["WAITING_TIME"] !== "Arriving"));
                    }
                }}><p>Scheduled</p></button>
                <button className="first-direction" style={{backgroundColor: (direction1Filter) ? 'black' : '#EFEFEF', color: (direction1Filter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    setDirection1Filter(!direction1Filter)
                    if (direction2Filter) {
                        setDirection2Filter(false);
                    }
                    if (arrivalsFilter) {
                        setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] === "Arriving" && arrival["DIRECTION"] === directionFirst().split("")[0])));
                    }
                    if (scheduledFilter) {
                        setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] !== "Arriving" && arrival["DIRECTION"] === directionFirst().split("")[0])));
                    } else {
                        setFilteredData(data?.filter(arrival => arrival["DIRECTION"] === directionFirst().split("")[0]));
                    }
                }}><p>{directionFirst()}</p></button>
                <button className="second-direction" style={{backgroundColor: (direction2Filter) ? 'black' : '#EFEFEF', color: (direction2Filter) ? '#EFEFEF' : 'black'}} onClick={() => {
                    setDirection2Filter(!direction2Filter)
                    if (direction1Filter) {
                        setDirection1Filter(false);
                    }
                    if (arrivalsFilter) {
                        setFilteredData(data?.filter(arrival => (arrival["WAITING_TIME"] == "Arriving" && arrival["DIRECTION"] === directionSecond().split("")[0])));
                    }
                    if (scheduledFilter) {
                        setFilteredData(data?.filter(arrival => ((arrival["WAITING_TIME"] !== "Arriving") && (arrival["DIRECTION"] === directionSecond().split("")[0]))));
                    } else {
                        setFilteredData(data?.filter(arrival => arrival["DIRECTION"] === directionSecond().split("")[0]));
                    }
                }}><p>{directionSecond()}</p></button>
            </div>
            <div className="trainList">
            {((arrivalsFilter || scheduledFilter || direction1Filter || direction2Filter) ? filteredData : data)?.map((train) => {
              if(train["LINE"] === currColor && train["STATION"] === (currStation.toUpperCase() + " STATION")) {
                return <Train currColor={currColor} currStation={currStation} trainData={train} />
            } else if (train["LINE"] == currColor && currStation === "ALL") {
                return <Train currColor={currColor} trainData={train} />
            }
                })}
            </div>
        </div>
      )
}