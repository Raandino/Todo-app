import { createContext } from "preact";

const UserContext = createContext ({
    user : null, 
    logInUser : (user) => {},
    logOutUser : (user)=>{}
})


export default UserContext