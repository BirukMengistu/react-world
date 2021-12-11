

import './header-styles.css'
const Header = () => {
    return (
        <header>
        
        <nav className="navbar navbar-expand-lg text-white navbar-light bg-info">
          <div className="container-fluid">
            <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarExample01"
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse text-white" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      
       
        <div id = 'header-container'className="p-5 text-center bg-image">
          <div className="mask" >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Habesha IT</h1>
                <h4 className="mb-3">ethiosweden</h4>
                <a className="btn btn-outline-light btn-lg" href="#!" role="button" >Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </header>
    )
   
}
    
    export default Header