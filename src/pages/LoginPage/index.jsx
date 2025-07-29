import React from 'react'
import {Typography,Input, Button} from 'antd'


const LoginPage = () => {
  return (
    <div style={{width:'30%',textAlign:'center',marginInline:'auto',marginTop:'100px',display:'flex',
        flexDirection:'column',
        gap:'30px'
    }}>
        <Typography style={{fontSize:'20px'}}>Please log in with your Okta Account</Typography>
        <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
             <label style={{width:'100px',fontSize:'20px'}} htmlFor="">username:</label>       
            <Input style={{borderRadius:'0'}} name='name'></Input>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
            <label style={{width:'100px',fontSize:'20px'}} htmlFor="">password:</label>
            <Input style={{borderRadius:'0'}} name='password'></Input>
        </div>
        <div style={{width:'60%',}}>
            <Button type='primary'>Login</Button>
        </div>
    </div>
  )
}

export default LoginPage