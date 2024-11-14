
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section >
                <div className='company-info'>
                    <img src="/full_logo-removebg-preview.jpg" alt='Company Logo'/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/reservation">Reservation</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 Towncity, USA</li>
                        <li>Phone: <br/>++ 012 345 678</li>
                        <li>Email: <br/>little@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                <div className="end-text">
                     <p>@Kuldeep Gautam. All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
