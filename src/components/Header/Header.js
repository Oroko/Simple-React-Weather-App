import React from 'react';
import {Link} from 'react-router-dom'

import classes from './Header.module.css';
import Logo from '../../elements/Logo/Logo';


const header = (props) => {
    return(
      <div>
         <header className={classes.Header} style={{backgroundColor: props.color}}>
            <Logo colorScheme={'light'} clicked={props.onClickHandler} />
            
            <Link style= {linkStyle} to="/">Home</Link> |  <Link style= {linkStyle} to="/fiveday">FiveDays</Link> 
         
        </header>

      
      </div>
       
        
    ); 
}

const linkStyle = {
  textDecoration: 'none',
  padding: '10px',
  color:'#333',
  
  

}

export default header;