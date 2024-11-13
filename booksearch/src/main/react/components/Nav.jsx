import React, { useState } from "react";

const Nav = (props) => {

    const {locationUrl} = props
    const pageUrls = [
        {
            url:"/",
            label:'Home'
        },
        {
          url:"/another",
          label:'Place holder'
      },
]
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {
    pageUrls.map((linkInfo, index )=>{
        return (
            <li className="nav-item" key={index}>
                <a className={`nav-link ${linkInfo.url === locationUrl? "active":"" }` } aria-current='page' href={linkInfo.url}>{linkInfo.label}</a>
            </li> 
        )
            
    })
   }
      </ul>
    </div>
  </div>
</nav>
        
    )
}

export default Nav;

