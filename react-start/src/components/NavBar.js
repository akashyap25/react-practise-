import React from 'react';
import './NavBar.css'

function navbar(props){
    return(
      <>
        <nav class="navbar navbar-expand-lg navbar-dark ">
<a class="navbar-brand"  href="/">{props.title}</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ml-auto">
    <li class="nav-item">
        <a class="nav-link"  href="#footer">Contact</a>
    </li>
    <li class="nav-item">
        <a class="nav-link"  href="#pricing">Pricing</a>
    </li>
    <li class="nav-item">
        <a class="nav-link"  href="#cta">Download</a>
    </li>
</ul>

</div>
</nav>
      </>
    )
};

export default navbar;
