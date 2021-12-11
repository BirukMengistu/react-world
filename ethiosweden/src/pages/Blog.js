import {React ,Component }from 'react'
import './blog.css'
export default class Blog extends Component{
    
    
   constructor(){
       super();
        this.state ={
            string: 'Hello Biruk'
        };
        }
     render() {
      return(
        <div className="blog-card">
            <h3>{this.state.string}</h3>
            <hr/>
            <p>laudantium, quibusdam quia harum tempora repellendus qui. Ipsa, unde quas.</p>
        </div>
      )
     }   

}