import React, { useEffect , useState  } from 'react'
import axios from "axios";

function UserList() {
const [users, setusers] = useState([]);
  useEffect(() => {
    try{
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setusers(res.data));
  
          
          console.log(users);
         
        }
        catch (error) {
         
          console.log(error);
        }
        
  }, []);
  return (
    <div>
{users.map((el) => (
    <div>
    <h1> {el.name}</h1>
    <p>{el.email}</p>
    </div>
  ))}

</div>
  );
}
export default UserList;