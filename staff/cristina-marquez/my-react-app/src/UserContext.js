import { createContext } from "react";

// set the defaults
const UserContext = createContext({
    user: null,
    setUser: () => { }
});

export default UserContext;