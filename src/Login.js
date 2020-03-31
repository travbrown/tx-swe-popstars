import React from 'react' 
import { Button } from 'react';

function Login() {
    let login = {
        margin: '20px',
        width: '250px',
        height: '250px',
        backgroundColor: 'yellow',
        display: 'inline-block',
    };
    /*let loggedin = {
      display: 'none'
    }*/


  return (
    
 <div className='login-api'>
    <Button onClick={() => Login()}>
      LOGIN
    </Button>
</div>
  )}
  export default Login ; 