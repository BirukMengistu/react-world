
import './App.css';
import  Header from './components/header.js'
import Blog from './pages/Blog'
function App() {
  return (
    <div className="App">
       <div><i className="far fa-clock font-normal" ></i>open hour 09-18 </div>
       <Header />
    <div className="container ">
      <Blog />
      <Blog />
      <Blog />
    </div>
     
    </div>
  );
}

export default App;
