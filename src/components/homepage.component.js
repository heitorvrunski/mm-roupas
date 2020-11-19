import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CHAPEUS</h1>
                    <span className='subtitle'> COMPRE AGORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JAQUETAS</h1>
                    <span className='subtitle'> COMPRE AGORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>TENIS</h1>
                    <span className='subtitle'> COMPRE AGORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HOMEM</h1>
                    <span className='subtitle'> COMPRE AGORA</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MULHER</h1>
                    <span className='subtitle'> COMPRE AGORA</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;