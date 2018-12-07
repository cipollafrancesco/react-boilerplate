// @flow
import logo from '../assets/logo.svg'
import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'

const Header = (props) => (
    <header>
        <Navbar color="light" light>
            <NavbarBrand href="/">
                <img src={logo} className="App-logo" alt="logo"/>
                {props.title}
            </NavbarBrand>
        </Navbar>
    </header>
)

export default Header