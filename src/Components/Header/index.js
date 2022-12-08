import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const showLeftDrawer = useSelector(x => x.leftReducer)
    const showRightDrawer = useSelector(x => x.rightReducer)
    const showtab = useSelector(x => x.tabReducer)
    const showHeader = useSelector(x => x.showHeaderReducer)
    const logoState = useSelector(x => x.logoReducer)
    const colorState = useSelector(x => x.colorReducer)

    const [Header, setHeader] = useState(true)
    const [headerColor, setHeaderColor] = useState("")
    const [activeTab, setactiveTab] = useState("Tab One")
    const [leftDrawer, setLeftDrawer] = useState(true)
    const [rightDrawer, setrightDrawer] = useState(true)
    const [isShowTab, setIsShowTab] = useState(true)

    const navigate = useNavigate()


    useEffect(() => {
        setHeaderColor(colorState.color)
    }, [headerColor, colorState])

    useEffect(() => {
        setHeader(showHeader.header)
    }, [Header, showHeader])

    useEffect(() => {
        setLeftDrawer(showLeftDrawer.leftDrawer)
    }, [leftDrawer, showLeftDrawer])


    useEffect(() => {
        setrightDrawer(showRightDrawer.rightDrawer)
    }, [rightDrawer, showRightDrawer])

    useEffect(() => {
        setIsShowTab(showtab.showTab)
    }, [isShowTab, showtab])

    

    const openNavLeft = () => {
        document.getElementById("mySidenav-left").style.width = "250px";
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.3)";
    }

    const closeNavLeft = () => {
        document.getElementById("mySidenav-left").style.width = "0";
        document.getElementById("overlay").style.background = "none";

    }

    const openNav = () => {
        document.getElementById("mySidenav-right").style.width = "250px";
        document.getElementById("overlay").style.background = "rgba(0, 0, 0, 0.3)";

    }

    const closeNav = () => {
        document.getElementById("mySidenav-right").style.width = "0";
        document.getElementById("overlay").style.background = "none";

    }

    return (
        <React.Fragment>
            {Header === true &&
                <nav className={`navbar navbar-expand-lg navbar-light header-fixed ${headerColor == 'red' ? "header-red" : 'header-blue'}`}>
                    <div className="container-fluid d-block">
                        <div className='d-flex justify-content-between'>
                            <div className='justify-content-start'>
                                <a href="#" className="navbar-brand">
                                    <div id="mySidenav-left" className="sidenav-left">
                                        <a href="javascript:void(0)" className="closebtn" onClick={closeNavLeft}>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={closeNav} width="30" height="30" fill="white" className="bi bi-x bg-dark rounded" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </a>
                                        <a href="#" className='text-uppercase'>About</a>
                                        <a href="#" className='text-uppercase'>Services</a>
                                        <a href="#" className='text-uppercase'>Clients</a>
                                        <a href="#" className='text-uppercase'>Contact</a>
                                    </div>
                                    {leftDrawer === true && <svg xmlns="http://www.w3.org/2000/svg" onClick={openNavLeft} width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>}
                                    {/* <i className="bi bi-list" onClick={openNav}></i> */}
                                </a>
                                {logoState.logo == "left" && <a href="#" className="navbar-brand">
                                    <img width="300" src="/assets/images/tigeen_computing_logo.png" />
                                </a>}
                            </div>
                            <div className='justify-content-start'>
                                {logoState.logo == "center" && <a href="#" className="navbar-brand">
                                    <img width="300" src="/assets/images/tigeen_computing_logo.png" />
                                </a>}
                            </div>
                            <div className='justify-content-end'>
                                {logoState.logo == "right" && <a href="#" className="navbar-brand">
                                    <img width="300" src="/assets/images/tigeen_computing_logo.png" />
                                </a>}
                                <a href="#" className="navbar-brand">
                                    <div id="mySidenav-right" className="sidenav">
                                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={closeNav} width="30" height="30" fill="white" className="bi bi-x bg-dark rounded" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </a>
                                        <a href="#" className='text-uppercase'>About</a>
                                        <a href="#" className='text-uppercase'>Services</a>
                                        <a href="#" className='text-uppercase'>Clients</a>
                                        <a href="#" className='text-uppercase'>Contact</a>
                                    </div>
                                    {rightDrawer === true && <svg xmlns="http://www.w3.org/2000/svg" onClick={openNav} width="30" height="30" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>}
                                </a>
                            </div>
                        </div>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {isShowTab && <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav">
                                <a href="#" className={`nav-item nav-link text-uppercase tab ${activeTab == "Tab One" ? "tab-active" : ''}`} onClick={() => {
                                    setactiveTab("Tab One");
                                    navigate('/tab-one')
                                }}>Tab One</a>
                                <a href="#" className={`nav-item nav-link text-uppercase tab ${activeTab == "Tab Two" ? "tab-active" : ''}`} onClick={() => { setactiveTab("Tab Two"); navigate('/tab-two') }}>Tab Two</a>
                                <a href="#" className={`nav-item nav-link text-uppercase tab ${activeTab == "Tab Three" ? "tab-active" : ''}`} onClick={() => { setactiveTab("Tab Three"); navigate('/tab-three') }}>Tab Three</a>
                            </div>
                            {/* <div className="navbar-nav">
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </div> */}
                        </div>}
                    </div>
                </nav>}
        </React.Fragment>
    );
}

export default Header;