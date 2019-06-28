import React from 'react';

interface SignupProps {
  apiUrl: string
}

const Signup = (props: SignupProps) => {

  return (
    <form action={`${props.apiUrl}/api/auth/signup`} method="post">>
      {/* <div>
        <label>First Name</label>
        <input type="text" name="firstName" required />
        <label>Last Name</label>
        <input type="text" name="lastName" required />
      </div> */}
      <div>
        <label>Email Address</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password"/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" name="passwordConfirm"/>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Signup;