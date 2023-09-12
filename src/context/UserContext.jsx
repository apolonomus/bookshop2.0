import {createContext} from 'react';

const UserContext = createContext ({
    name: null,
    userName: null,
});

export default UserContext;