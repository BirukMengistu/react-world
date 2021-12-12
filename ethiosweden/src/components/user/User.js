import {React , Component}  from 'react'
import UserList from './UserList'
export default class  User extends Component {
    
    
    constructor() {
        super();
    
        this.state = {
          arryOfUsers: [],
          searchField: ''
        };
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState({  arryOfUsers: users }));
      }
    
    
   handleSearchField =()=>{
        console.log('hello')
    }
    
    
    render() {
        const { arryOfUsers , searchField} = this.state;
        return (
            <div className='user-container'> 
             <input type="search"  placeholder='serach user by name' onChange ={e =>console.log(e)}/> 
             
              <UserList  arryOfUsers ={this.state. arryOfUsers}/>
            </div>
        )
    }
   
}