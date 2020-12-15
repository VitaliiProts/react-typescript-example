import React from 'react';

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">react + typeScript</a>
        <ul className="right hide-on-med-and-down">
            <li><a href="/">Todo</a></li>
            <li><a href="/">Information</a></li>
        </ul>
        </div>
    </nav>
)