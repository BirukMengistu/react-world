
import './App.css';
import  Header from './components/header.js'
import  User from './components/user/User'
import Blog from './pages/Blog'
function App() {
  return (
    <div className="App">
      <div className="top-nav d-flex justify-content-between">
      <div className='text-golden'><i className="far fa-clock font-normal " ></i>open hour 09-18 </div>
      <div className="social-media">
      <a className='text-golden'><i className="fab fa-facebook-square"></i> </a>  
      <a className='text-golden'><i className="fab fa-youtube"></i> </a>  
      <a className='text-golden'><i className="fab fa-twitter"></i> </a>  
      </div>
      
      </div>
       
       <Header />
      <div className="container ">
      <Blog />
      <Blog />
      <Blog />
    </div>
      <User/>
    </div>
  );
}

export default App;
