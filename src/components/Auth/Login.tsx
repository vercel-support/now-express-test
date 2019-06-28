import React from 'react';

interface LoginProps {
  apiUrl: string
}

const Login = (props: LoginProps) => {
  // console.log('process.env.REACT_APP_NODE_ENV', process.env.REACT_APP_NODE_ENV);
  console.log('** props.apiUrl **', props.apiUrl);
  
  return (  
    <form action={`${props.apiUrl}/api/auth/login`} method="post">
        <div >
            <label>Email</label>
            <input type="text" name="email"/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password"/>
        </div>
      <button type="submit">Log in</button>
    </form>
  )
}

export default Login;