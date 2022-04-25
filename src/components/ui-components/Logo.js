import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/Logo.svg'
 
const Logo = () => {
    let navigate = useNavigate()

    return (
        
        <img 
        src={logo} 
        alt="Malin Greats Logo" 
        width="136px"  
        style={{cursor: 'pointer'}}
        onClick={() => navigate('/')}
        />
            
    );
};

export default Logo;