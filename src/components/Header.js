import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                />
            </Link>

            <div class="header__center">
                <input type="text" alt="" placeholder="Start your search" />
                <SearchIcon className="search__icon" />
            </div>

            <div class="header__right">
                <p>Become a host</p>
                <div className="language__icon">
                    <LanguageIcon />
                    <ExpandMoreIcon />
                </div>
                <Avatar />
            </div>
        </div>
    );
};

export default Header;