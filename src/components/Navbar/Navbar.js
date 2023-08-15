import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { Link } from 'react-router-dom';

import TotalItems from '../CartContent/TotalItems';

import './Navbar.css';

const Navbar = () => {
    const { cart } = useContext(dataContext);
    return (
            <nav>
                <Link className='navbar-logo' to={'/'}>APOLO</Link>
                <div>
                    <ul id='navbar'>
                        <li>Home<a href='index.html'></a></li>
                        <li>Shop<a href='index.html'></a></li>
                        <li>About<a href='index.html'></a></li>
                        <li>Contact<a href='index.html'></a></li>
                    </ul>
                </div>
                <Link className='seeCarrito' to={'/cart'}>🛒
                    <TotalItems />
                </Link>
            </nav>
    
    );
};

export default Navbar;