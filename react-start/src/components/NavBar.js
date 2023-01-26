import React from 'react';
import './NavBar.css'

function navbar(props){
    return(
      <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
<a className="navbar-brand"  href="/">{props.title}</a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`}  href="#footer">Contact</a>
    </li>
    <li className="nav-item">
        <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`}  href="#pricing">Pricing</a>
    </li>
    <li className="nav-item">
        <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`}  href="#cta">Download</a>
    </li>
</ul>

</div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode </label>
        </div>
    </nav>
      </>
    )
};

export default navbar;
