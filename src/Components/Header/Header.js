import React from 'react';
import './Header.css';

let Header =()=> {
    return (
        <div className='head d-flex flex-row justify-content-space-around'>
            <h1 className='head1'>Home</h1> 
            {/* <input type="search" className='inp' placeholder='Search'></input> */}
            <form class="nosubmit">
            <input class="submit" type="search" placeholder="Search..."></input>
            </form>
            
        </div>
    )

}

export default Header;