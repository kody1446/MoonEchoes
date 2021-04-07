import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import Button from './Button';
import { ImIcoMoon, ImMenu , ImContrast} from "react-icons/im"
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();}, [])

    window.addEventListener('resize', showButton);
    return (
        <nav className= "navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                 MoonEchoes  
                 <i class="fas fa-cloud-moon"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              

            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                    Blog
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/question' className='nav-links' onClick={closeMobileMenu}>
                    Ask a Question
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/moonletters' className='nav-links' onClick={closeMobileMenu}>
                    Letters from the Moon
                </Link>
            </li>
            </ul>
            
        </div>
        </nav>
    )
}

export default Navbar
