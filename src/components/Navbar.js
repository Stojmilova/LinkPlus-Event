import React from 'react'

function Navbar(){
    return (
        <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="#">
            <h1><i class="fa fa-refresh fa-spin fa-1x fa-fw"></i>Quadrant Event</h1>
          </a>
        </nav>
      </React.Fragment>
    )
}
export default Navbar;