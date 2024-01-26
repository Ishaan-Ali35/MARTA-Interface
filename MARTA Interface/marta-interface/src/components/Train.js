import './css/Train.css'
import arrow from './css/arrow.jpeg'
export default function Train(props) {
    const {currColor, trainData} = props;

    function isOnTime() {
        if (trainData["DELAY"] === 'T0S') {
            return "On time";
        } else {
            return "Delayed";
        }
    }

    let colorKeys = {
        "RED" : '#FF0000',
        "BLUE" : '#4169E1',
        "GOLD" : '#FFD700',
        "GREEN" : '#228B22'
    }

    return (
        <div className='content'>
            <div className='left-content'>
                <p className='direction'>M</p>
                <div className="train-info">
                    <div className='station-info'>
                        <p id="station">{trainData["STATION"]}  </p> 
                        <img className="arrow" src={arrow}></img>
                        <p>{trainData["DESTINATION"]}</p>
                    </div>
                    <div className='line-delayed'>
                        <p style={{backgroundColor: colorKeys[currColor]}} className='line'>{(trainData["LINE"])}</p>
                        <p className='delayed'>{isOnTime()}</p>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <p className='minutes'>{((trainData["WAITING_TIME"]).split(" "))[0]}</p>
                <p className='min'>{((trainData["WAITING_TIME"]).split(" "))[1]}</p>
            </div>
        </div>
    )
}