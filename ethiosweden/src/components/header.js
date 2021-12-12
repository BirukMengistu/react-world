

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
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                <li className="nav-item active text-golden ">
                  <a className="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item text-golden">
                  <a className="nav-link " href="/services">Services</a>
                </li>
                <li className="nav-item text-golden">
                  <a className="nav-link " href="/news">News</a>
                </li>
                <li className="nav-item text-golden">
                  <a className="nav-link " href="/about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      
       
        <div id = 'header-container'className="p-5 text-center bg-image  ">
          <div className="mask" >
            <div className="d-flex justify-content-center align-items-center h-100 ">
              <div className="text-golden">
                <h1 className="mb-3">HabeshaIT <span className=''>SWEDEN</span></h1>
                <h3 className="mb-2">what are you wating for?</h3>
                <div className='ml-1'>
                  <a className="btn btn-outline-light btn-lg m-1 text-golden" href="#!" role="button" >GET STARTED
                  </a>
                  <a className="btn  bg-white btn-lg m-1 text-golden" href="#!" role="button" >WATCH OUR NEWS<i className='far fa-play-circle fa-1x m-1 text-golden'></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
       
      </header>
    )
   
}
    
    export default Header
