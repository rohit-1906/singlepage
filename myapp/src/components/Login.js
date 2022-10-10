
import React from 'react'

function Login() {
  return (
    <>
    <div>
    <h2>LoginForm</h2>
    <center>
        <form class="fm">
            <div>
            <div className='div1'>
            <label for ="uname">Username</label>
            <input type="text" placeholder='EnterUsername' name='uname'/>
            </div>
            <div classname = 'div2'>
            <label for ="password">password</label>
            <input type ="text" placeholder='Enter password' name='password'/>
            </div>
            <button type='Submit'>Login</button>
            </div>
        </form>
        </center>
        </div>
    </>
  )
}

export default Login

