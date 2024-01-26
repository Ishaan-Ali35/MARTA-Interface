import {useNavigate } from 'react-router-dom';
import './Home.css'
import picture from './download (1).jpeg'
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='page'>
            <div className='header'>
                <p className='marta'>MARTA</p>
                <p className='about' onClick = {() => navigate("/about")}>About MARTA</p>
            </div>
            <div className='content'>
                <div className='viewRoutes'>
                    <p className='viewRoutesHeading'>VIEW ROUTES SCHEDULE</p>
                    <div className='smallerContent'>
                        <div className='allLines'>
                            <p className='goldLine' onClick={() => {navigate("/lines/gold")}}>Gold Line</p>
                            <p className='redLine' onClick={() => {navigate("/lines/red")}}>Red Line</p>
                            <p className='blueLine' onClick={() => {navigate("/lines/blue")}}>Blue Line</p>
                            <p className='greenLine' onClick={() => {navigate("/lines/green")}}>Green Line</p>
                        </div>
                        <img className='image' src={picture}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}