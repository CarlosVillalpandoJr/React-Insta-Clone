import React from 'react';
import Logo from '../images/logo.svg';
import Cursive from '../images/cursive.svg';
import Heart from '../images/heart.svg';
import Compass from '../images/compass.png';
import Username from '../images/username.png';
import './SearchBar.css';

function SearchBar () {
    return (
        <div className='search-container'>
            <div className='left-search'>
                <img src={Logo} />
                <div className='line'> | </div>
                <img className='cursive' src={Cursive} />
            </div>
            <div className='search-bar'>
                <input className='input' type='text' value='Search'/>
            </div>
            <div className='right-search'>
                <img className='imgs'src={Heart} />
                <img className='imgs' src={Compass} />
                <img className='imgs' src={Username} />
            </div>
        </div>
    )
}

export default SearchBar;