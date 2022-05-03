import { useContext } from 'react';

// auth provider
// import AuthContext from 'contexts/FirebaseContext';
// import AuthContext from 'contexts/Auth0Context';
import MainContext from '../contexts/MainContext';
// import AuthContext from 'contexts/AWSCognitoContext';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
    const context = useContext(MainContext);

    if (!context) throw new Error('context must be use inside provider');

    return context;
};

export default useAuth;