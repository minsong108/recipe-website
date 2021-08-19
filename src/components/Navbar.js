import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../firebase';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements'
import Logo from '../Logo_Transparent.png'
import '../App.css'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/esm/Dropdown';

export default function NavBar ({ user }) {

    console.log("In Navbar.js; uid: " + user)

    return (
        <Nav>
            <NavLink to="/">
                <img class="logo" src={Logo} />
            </NavLink>

            <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>

                    <NavLink to="/search" activeStyle>
                        Search
                    </NavLink>

                    <NavLink to="/post" activeStyle>
                        Post
                    </NavLink>

                </NavMenu>

                <NavBtnLink
                    to="/sign-up"
                    onClick={() => {
                        if (user != null) {
                            auth.signOut();
                            window.location = '/'
                        }
                    }}>
                    {user ? "Sign Out" : "Sign In"}
                </NavBtnLink>

                {user ?
                    <Dropdown>
                        <Dropdown.Toggle style={styles.dropDown}>
                            {/* {user ?
                                <NavBtnLink to="/account">My Account</NavBtnLink>
                                :
                                <div></div>
                            } */}
                            My Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>{<NavLink to='/myInformation'>My Information</NavLink>}</Dropdown.Item>
                            <Dropdown.Item>{<NavLink to='/myFavorite'>Favorites</NavLink>}</Dropdown.Item>
                            <Dropdown.Item>{<NavLink to='/myPost'>My Dishes</NavLink>}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    :
                    <div></div>
                }
        </Nav>
    )
}

const styles = {
    dropDown: {
        borderRadius: 4,
        background: "#FE994A",
        color: "#000",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        textDecoration: "none",
        textAlign: "center",

        hover: {
            transition: "all 0.2s ease-in-out",
            background: "#fff",
            color: "#010606"
        }
    }
}