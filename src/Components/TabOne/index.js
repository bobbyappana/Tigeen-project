import React, { useEffect, useState } from 'react'
import "./styles.css"
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormLabel';
import { FormLabel, FormControlLabel } from '@mui/material';
import { actionType } from '../../Redux/constants';
import { useSelector, useDispatch } from 'react-redux';

const TabOne = () => {

    const logoState = useSelector(x => x.logoReducer)

    const [backgroundColor, setBackgroundColor] = useState('blue')
    const [isChecked, setIsChecked] = useState(false)
    const [isRadiochecked, setIsRadoChecked] = useState(true)
    const [showHeader, setShowHeader] = useState(true)
    const [showFooter, setShowFooter] = useState(true)
    const [showLeftDrawer, setshowLeftDrawer] = useState(true)
    const [showRightDrawer, setshowRightDrawer] = useState(true)
    const [showTab, setShowTab] = useState(true)
    const [showMenu, setShowMenu] = useState(true)
    const [logoCheck, setLogoCheck] = useState('left')
    const [logoCheckLeft, setLogoCheckLeft] = useState(true)
    const [logoCheckRight, setLogoCheckRight] = useState(false)
    const [logoCheckCenter, setLogoCheckCenter] = useState(false)
    const [logoCheckDisabled, setLogoCheckDisabled] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (logoCheckLeft) {
            setLogoCheckRight(false)
            setLogoCheckCenter(false)
            setLogoCheckDisabled(false)
        }
    }, [logoCheckLeft])

    useEffect(() => {
        if (logoCheckRight) {
            setLogoCheckLeft(false)
            setLogoCheckCenter(false)
            setLogoCheckDisabled(false)
        }
    }, [logoCheckRight])

    useEffect(() => {
        if (logoCheckCenter) {
            setLogoCheckLeft(false)
            setLogoCheckRight(false)
            setLogoCheckDisabled(false)
        }
    }, [logoCheckCenter])

    useEffect(() => {
        if (logoCheckDisabled) {
            setLogoCheckLeft(false)
            setLogoCheckRight(false)
            setLogoCheckCenter(false)
        }
    }, [logoCheckDisabled])

    useEffect(() => {
        dispatch({ type: actionType.COMPANY_LOGO_LEFT, logo: logoCheck })
    }, [logoCheck])

    useEffect(() => {
        dispatch({ type: actionType.SHOW_HEADER, header: showHeader })
    }, [showHeader])

    useEffect(() => {
        dispatch({ type: actionType.SHOW_FOOTER, footer: showFooter })
    }, [showFooter])

    useEffect(() => {
        dispatch({ type: actionType.LEFT_DRAWER, leftDrawer: showLeftDrawer })
    }, [showLeftDrawer])

    useEffect(() => {
        dispatch({ type: actionType.RIGTH_DRAWER, rightDrawer: showRightDrawer })
    }, [showRightDrawer])

    useEffect(() => {
        dispatch({ type: actionType.SHOW_TABS, showTab: showTab })
    }, [showTab])

    useEffect(() => {
        dispatch({ type: actionType.SHOW_MENU, menu: showMenu })
    }, [showMenu])


    useEffect(() => {
        dispatch({ type: actionType.COLOR_CHANGE, color: backgroundColor })
    }, [backgroundColor])

    useEffect(() => {
        if (!isChecked) {
            setIsSubmit(false)
        }
    }, [isSubmit, isChecked])

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <section className="signup-step-container">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 bg-light rounded-2 py-5 shadow">
                        <div className="wizard">
                            <div className="wizard-inner">
                                <div className="connecting-line"></div>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className={`${logoState.logo != "disbled" ? "active" : ""}`}>
                                        <a data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true"><span className="round-tab">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                            </svg></span> <i></i></a>
                                    </li>
                                    <li role="presentation" className={`${isChecked === true ? "active" : ""}`}>
                                        <a data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false"><span className="round-tab">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                            </svg></span> <i></i></a>
                                    </li>
                                    <li role="presentation" className={`${isSubmit === true ? "active" : ""}`}>
                                        <a data-toggle="tab" aria-controls="step3" role="tab"><span className="round-tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                        </svg></span> <i></i></a>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div role="form" className="login-box">
                                <div className="tab-content" id="main_form">
                                    <div className="tab-pane active" role="tabpanel" id="step1">
                                        <h4>I want a Company Logo</h4>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-checkbox"
                                                    id="checkbox"
                                                    checked={logoCheckLeft}
                                                    onChange={(e) => {
                                                        setLogoCheckLeft(e.target.checked)
                                                        setLogoCheck("left");
                                                    }}
                                                />&nbsp;&nbsp;
                                                <label for="checkbox">Left</label>
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-checkbox"
                                                    id="checkbox"
                                                    checked={logoCheckRight}
                                                    onChange={(e) => {
                                                        setLogoCheckRight(e.target.checked);
                                                        setLogoCheck("right")
                                                    }}
                                                />&nbsp;&nbsp;
                                                <label for="checkbox">Right</label>
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-checkbox"
                                                    id="checkbox"
                                                    checked={logoCheckCenter}
                                                    onChange={(e) => {
                                                        setLogoCheckCenter(e.target.checked);
                                                        setLogoCheck("center")
                                                    }}
                                                />&nbsp;&nbsp;
                                                <label for="checkbox">Center</label>
                                            </div>
                                            <div className="col-md-3">
                                                <input
                                                    type="checkbox"
                                                    class="rounded-checkbox"
                                                    id="checkbox"
                                                    checked={logoCheckDisabled}
                                                    onChange={(e) => {
                                                        setLogoCheckDisabled(e.target.checked);
                                                        setLogoCheck("disbled")
                                                    }}
                                                />&nbsp;&nbsp;
                                                <label for="checkbox">Disabled</label>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <h4>Preset color</h4>
                                            <div className='d-flex'>
                                                <div class="col-md-6 form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={(e) => {
                                                        setBackgroundColor("Blue");
                                                        if (isRadiochecked) setIsRadoChecked(false)
                                                        if (!isRadiochecked) setIsRadoChecked(true)
                                                    }} checked={isRadiochecked} />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Blue (#1976d2)
                                                    </label>
                                                </div>
                                                <div class="red col-md-6 form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={(e) => {
                                                        setBackgroundColor("red");
                                                        if (isRadiochecked) setIsRadoChecked(false)
                                                        if (!isRadiochecked) setIsRadoChecked(true)
                                                    }} />
                                                    <label class="form-check-label" for="exampleRadios2">
                                                        Red (#ff0000)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='pt-5'>
                                            <h4>Preset apply only : Header background, Button, Radio Button & switch </h4>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={() => {
                                                                    if (!showHeader) setShowHeader(true)
                                                                    if (showHeader) setShowHeader(false)
                                                                }} checked={showHeader} disabled={!logoCheck} />
                                                        }
                                                        label="I want a Header"
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={() => {
                                                                    if (!showFooter) setShowFooter(true);
                                                                    if (showFooter) setShowFooter(false);
                                                                }} checked={showFooter} disabled={!logoCheck} />
                                                        }
                                                        label="I want a Footer"
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={handleChange} checked={isChecked} disabled={!logoCheck} />
                                                        }
                                                        label="I want a Drawer overlay mode(requaires header or footer)"
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={() => {
                                                                    if (!showLeftDrawer) setshowLeftDrawer(true);
                                                                    if (showLeftDrawer) setshowLeftDrawer(false)
                                                                }} checked={showLeftDrawer} disabled={!logoCheck} />
                                                        }
                                                        label="I want a left-side Drawer"
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={() => {
                                                                    if (!showRightDrawer) setshowRightDrawer(true);
                                                                    if (showRightDrawer) setshowRightDrawer(false)
                                                                }} checked={showRightDrawer} disabled={!logoCheck} />
                                                        }
                                                        label="I want a Right-side Drawer"
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={() => {
                                                                    if (!showTab) setShowTab(true);
                                                                    if (showTab) setShowTab(false)
                                                                }} checked={showTab} disabled={!logoCheck} />
                                                        }
                                                        label="I want Navigation Tabs(requaires Header)"
                                                    />
                                                </FormGroup>
                                            </div>
                                            <div className='d-flex'>
                                                <FormGroup className='toggle-text'>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch color={`${backgroundColor == 'red' ? "error" : 'primary'}`}
                                                                onChange={() => {
                                                                    if (!showMenu) setShowMenu(true);
                                                                    if (showMenu) setShowMenu(false)
                                                                }} checked={showMenu} disabled={!logoCheck} />
                                                        }
                                                        label="I want a Bottom menu(requaires Footer)"
                                                    />
                                                </FormGroup>
                                            </div>
                                        </div>
                                        <hr />
                                        <ul className="list-inline pull-left">
                                            <li><button type="button" className={`default-btn next-step text-uppercase ${backgroundColor == 'red' ? "button-red" : ''}`} onClick={() => { setIsSubmit(true) }}>Continue</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabOne