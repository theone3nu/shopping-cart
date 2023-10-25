import React from "react";
import "../styles/header.css";
import logo from '../logo.svg';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
    <header>
        <div className="container flex justify-center items-center">
            <img src={logo} className="" width={34} height={34} alt="logo" />

            <h2 className="header-title">{title}</h2>
        </div>
    </header>

);

export default Header;
