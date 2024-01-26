import {useNavigate } from 'react-router-dom';
import './About.css'
import martaPicture from './train-stations-map-2020.jpg'

export default function About() {
    const navigate = useNavigate();
    return (
        <div className='about-content'>
            <div className='about-header'>
                <h1 className='header-title'>About Marta</h1>
                <p className='marta-home' onClick = {() => navigate("/")}>Marta Home</p>
            </div>
            <div className='main-content'>
                <div className='left'>
                    <h1 className='about-us'>About Us</h1>
                    <p className='about-us-info'>MARTA, which stands for the Metropolitan Atlanta Rapid Transit Authority, is a vital public transportation system serving the metropolitan area of Atlanta, Georgia. Established to address the growing transportation needs of the city, MARTA offers a comprehensive network of buses and rapid transit trains, facilitating the movement of thousands of residents and visitors each day. MARTA plays a crucial role in reducing traffic congestion, improving air quality, and promoting sustainable urban development. With a commitment to efficiency and accessibility, MARTA continues to connect communities, enhance mobility, and contribute to Atlanta's status as a dynamic and thriving urban center.</p>
                    <h1 className='contact'>Contact Us</h1>
                    <div className='contact-info'>
                        <p>MARTA Police: (404)-848-4900</p>
                        <p>Route/Schedule Info and Customer Service: (404)-848-5000</p>
                        <p>Address: 2424 Piedmont Rd NE, Atlanta, GA 30324</p>
                    </div>
                </div>
                <div className='center'>
                    <h2 className='train-frequencies'>Train Frequencies</h2>
                    <p className='weekday-header'>Weekday Frequencies</p>
                    <div className='weekday-times'>
                        <p>5-6am: Approx. 20 mins</p>
                        <p>6-9am: Approx. 12 mins</p>
                        <p>9-3am: Approx. 15 mins</p>
                        <p>3-7am: Approx. 12 mins</p>
                        <p>7-5pm: Approx. 20 mins</p>
                    </div>
                    <p className='weekend-header'>Weekday Frequencies</p>
                    <div className='weekend-times'>
                        <p>6-1am (All day): Approx. 20 mins</p>
                    </div>
                    <p className='special-header'>Weekday Frequencies</p>
                    <div className='special-times'>
                        <p>Track work is sometimes necessary. Check here for special single tracking schedules.</p>
                    </div>
                </div>
                <img className='map-image' src={martaPicture}></img>
            </div>
        </div>
    )
}