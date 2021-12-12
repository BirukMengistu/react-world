import UserCard from './userCard'
import './userList-styles.css'
const UserList = (props) => {
    return (
         <div className='card-list '>
         {props.arryOfUsers.map(
             
               user  =>   <UserCard key={user.id} users={user} />
             
         )}   
        </div>
    )
}

export default UserList

