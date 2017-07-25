import React, { Component} from 'react';
import { Link } from 'react-router';

class Menu extends Component {
    render() {
        return (
            <div>
                <Link onlyActiveOnIndex={true} to="/">MAIN</Link>
                <Link to="/about">ABOUT</Link>
            </div>
        )
    };
};

export default Menu;
